==============================
Regions and availability zones
==============================

Binero cloud is conceptually designed and physically provisioned to provide segmentation into regions which in turn are split into availability zones. The main reason for wanting several physical locations is to build geo-redundant installations, meaning infrastructure that is able to withstand a disaster scenario. For instance a plane-crash into a datacenter is a common example of a situation that a properly designed geo-diverse installation should be able to handle without disruption. 

Regions
-------
A region is a wider geographical area where resources are available. A region does not share dependencies with other regions except for certain central services like authentication - not relating to the production of infrastructure services. Regions are designed to be autonomous. Networking between regions are internet-based (as opposed to low latency networking between availability zones). Regions have their own name-spaces and domains in the public cloud platform.

Currently Binero.Cloud has one publicly available region which is named "europe-se-1" or (eu-se-1 for short in some places). Its physically located in datacenters close to Stockholm in Sweden. 

Availability zones
------------------
While an availability zone (or "AZ" in short) in some cases may be defined as a physical rack or a room in a datacenter, in Binero.Cloud an AZ is *a separate installation of Binero.Cloud in its own datacenter*, sharing a name space with its partner AZs in the same region. Several AZs thus make up a region with a minimum distance of a metric mile (as the crow flies) between them.

AZs are designed and implemented with no dependencies between them in crucial areas relating to production of infrastructure services:

- Networking
- Storage
- Compute
- Internet providers (ISPs)
- And more

This enables you to provision your infrastructure in several locations and as such achieve (very) high availability as well as geo-redundancy, through the same platform - vastly simplifying rolling out such a setup.

While AZs are able to reach each other through diverse, fault tolerant, low latency networking (< 1 ms), they do not *share* networking infrastructure (only common reachability between them). An availability zone network fabric is designed to continue operation regardless of its neighbouring availability zones status.

While some services (mainly storage) have various replication options (which greatly simplifies implementing geo diverse HA setups), these systems are also autonomous - replication simply enables data to be stored on both (or several).

Generally, services in the platform are provisioned with no dependencies between the AZs and provisioning works the same way regardless of zone and by using the same methods. Its up to you to decide where to put your infrastructure. 

Binero.Cloud currently provide two public availability zones:
  - europe-se-1a
  - europe-se-1b

.. Tip::
	We recommend using the availability zone **europe-se-1a** to start with (or if you only need a single AZ) as the cost is slightly higher i europe-se-1b.

Availability zones networking
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Its important to understand the networking concepts used in order to ensure a functioning system in the event of a unforeseen disruption to a single availability zone - which in a geo redundant setup is what you need take into account. 

While the network fabric is built to have no dependencies between availability zones so as to ensure the continued operation in the event of a zone malfunctioning, particularly the internet access will require a proper design in order to guarantee functionality.

In Binero.cloud, the floating and directly attached IPs (the public IP-space that provides your infrastructure access to the internet) are local to a single availability zone. While assigning a floating IP to an instance located in a different AZ would work, in the event of a complete outage of the first AZ (that hosts the IP) the access to both zones would be disrupted (since your traffic would still need to traverse the first zone).

The solution to this is to assign a floating IP in both zones (which should only be linked to resources that are located in the same zone) and have a DNS record that could be re-pointed or to use a global load balancer (see below) to send the request to a zone that is currently working.

This would in turn require you to use more than a single internal subnet as your networking would otherwise send your traffic to the router that has the default route setup (which would be located in one of the AZs). More on this in the `router segment </networking/router/index>`_ in this documentation.

Availability zones and storage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Using Binero.Clouds various replication options for storage would ensure that data is located in both zones. While this is enough to guarantee data integrity in a disaster scenario, if you also want your data *available* you would need to ensure that you read your data from the same zone that your request your data.

For instance if you request an S3-object, this could be done from all zones (irrespectively from where you make the request) and would work either way so long as all zones where up - in the event one goes down, if the request is still made towards that zone then it would suddenly fail. Binero.Cloud provides endpoints for S3 in all zones that host S3, make sure to use the correct one.

When doing database replications between multiple sites, make sure your connection strings from your application servers are made towards a database that is local to the application server making the request. 

Global load balancing
---------------------
A global load balancer is a solution that uses a globally redundant technology to send requests to more than a single AZ (or datacenter). There are two common ways to implement this, either by using BGP (the internet routing protocol) or by using DNS (domain name system). Both are globally distributed by nature and would therefore work irrespectively of a single AZ. 

The main reason to use a global load balancer is to ensure that the request does not get stuck in a dependency towards an AZ that is not working. Lets say you do load balancing in AZ1, it would normally send requests also to AZ2. Now, AZ2 goes down, it would correctly be removed. If AZ1 instead go down, the load balancer becomes unavailable and would therefore not be able to send traffic to AZ2 either. Using a failover scenario with load balancers in both DCs would still mean that there are dependencies between them that might cause the failover not to work (particularly in a partial outage scenario). 

Using a global load balancer (that is truly distributed, that is not local to a single AZ or datacenter) would solve this by simply removing traffic to the faulty AZ. Since it would always have an outside-in perspective it would make its decisions about sending traffic based on the same information an end user would have. 

When setting up multiple individual installations with replication between them (as is possible with availability zones in Binero.cloud), a single zone should be enough to guarantee a full working service on its own. A global load balancer would be able to notice a failure at an AZ and proceed to remove it in its entirety (fencing it) from receiving requests until service is restored.

Binero.Cloud does not currently provide a global load balancer service but using `our DNS system </dns>`__ we do provide a highly redundant, geo diverse name server solution that could be used as a manual GLB. Please contact us for more information in this matter.

.. Tip::
	While building geo-diverse highly available systems is difficult, using a platform with support for it greatly simplifies the task. We are available to help with design decisions for your setup, please contact us if you need our assistance!


..  seealso::
  - :doc:`/networking/router/index`
  - :doc:`/storage/index`
