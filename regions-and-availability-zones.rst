==============================
Regions and availability zones
==============================

Binero cloud is conceptually designed and physically provisioned to provide
segmentation into regions which in turn are split into availability zones.

The main reason for wanting several physical locations is to build geo-redundant
installations, meaning infrastructure that is able to withstand a disaster scenario.

For example a properly designed geographically distributed application should in case
of a force majeure event in a data center be able to handle without any disruption. 

Regions
-------

A region is a wider geographical area where resources are available.

A region does not share dependencies with other regions except for certain central services
like authentication - not relating to the production of infrastructure services.

Regions are designed to be autonomous. Networking between regions are internet-based as
opposed to availability zones that are interconnect with low latency networking.

Regions have their own APIs and control planes isolated from each other.

Binero cloud has one publicly available region which is named *europe-se-1* or *eu-se-1* for
short. The region is composed of data centers close to or around Stockholm in Sweden. 

A region can contain multiple availability zones.

Availability zones
------------------

While some organizations define a availability zone (AZ for short) as a physical rack or a
room in a data center, in Binero cloud a availability zone is a separate physical data center
in a region.

Several availability zones together form a region and is separated by a minimum of a metric
mile between them.

Availability zones is designed to have no dependencies between them for the infrastructure
services. That means that all infrastructure is separate from other availability zones in
the same region.

- Physical location, building, data center, power cooling
- Infrastructure networking (internet)
- Networking services
- Storage services
- Compute services
- And much more

This enables you to provision your infrastructure in several locations and as such build and
design highly available and geographically redundant application in the same platform.

Availability zones in the same region has reachability between each other over fault tolerant,
low latency networking (sub 1ms), they do not share any networking infrastructure other than
reachability between them.

The networking is designed to continue operation regardless of other availability zones in
the same region.

Storage services are also autonomous to other availability zones and do not share anything, we
provide various replication options that can help you copy data between availability zones.

Binero cloud provides two public availability zones (*a* and *b*) in the *europe-se-1* region,
these are named like below.

- europe-se-1a

- europe-se-1b

.. tip::

   We recommend using the availability zone **europe-se-1a** to start with (or if you only need
   a single AZ) as the cost is slightly higher in *europe-se-1b*

Availability zones networking
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Its important to understand the networking concepts used in order to ensure a functioning system
in case of a unforeseen disruption to a single availability zone - which in a geographically
redundant setup is what you need take into account. 

While the network fabric is built to have no dependencies between availability zones so as to ensure
the continued operation in case of a zone malfunctioning, particularly the internet access will require
a proper design in order to guarantee functionality.

In Binero cloud, the floating and directly attached IP addresses, the public IP space that provides
your infrastructure access to the internet, are local to a single availability zone.

While assigning a floating IP to an instance located in a different AZ would work, in case of a complete
outage of the first AZ (that hosts the IP) the access to both zones would be disrupted (since your traffic
would still need to traverse the first zone).

The solution to this is to assign a floating IP in both zones (which should only be linked to resources
that are located in the same zone) and have a DNS record that could be re-pointed or to use a global load
balancer (see below) to send the request to a zone that is currently working.

This would in turn require you to use more than a single internal subnet as your networking would otherwise
send your traffic to the router that has the default route which would be located in only one availability
zone.

More on this in the `router segment </networking/router/index>`_ in this documentation.

Availability zones and storage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Using Binero clouds various replication options for storage would ensure that data is located in both zones.

While this is enough to guarantee data integrity in a disaster scenario, if you also want your data *available*
you would need to ensure that you read your data from the same zone that your request your data.

For instance if you request an S3 object, this could be done from all zones (irrespectively from where you make
the request) and would work either way when all zones where up - in case one goes down, if the request is still
made towards that zone then it would suddenly fail.

Binero cloud provides endpoints for S3 in all zones that host S3, make sure to use the correct one.

When doing database replications between multiple sites, make sure your connection strings from your application
servers are made towards a database that is local to the application server making the request. 

Global load balancing
---------------------

A global load balancer is a solution that uses a globally redundant technology to send requests to more than a
single availability zone.

The two most common ways to implement this, either by using BGP (the dynamic routing protocol that powers the
internet) or by using DNS (Domain Name System).

Both are globally distributed by nature and would therefore work irrespectively of a single availability
zone.

The main reason to use a global load balancer is to ensure that the request does not get stuck in a dependency
towards an AZ that is not working.

Lets say you do load balancing in *europe-se-1a*, it would normally send requests also to backends that you have
running in *europe-se-1b*. If *europe-se-1b* goes down, it would correctly be removed.

If *europe-se-1a* instead go down, the load balancer becomes unavailable and would therefore not be able to send
traffic to the backend in *europe-se-1b* causing an outage for your application.

Using a failover scenario with load balancers in availability zones would still mean that there are dependencies
between them that might cause the failover not to work, particularly in a partial outage scenario.

Using a global load balancer that is truly distributed, that is not local to a single availability zone solves
this by removing traffic to the faulty availability zone entirely. Since it would always have an outside-in
perspective it would make its decisions about sending traffic based on the same information an user would have. 

When setting up multiple copies of your application with replication between them, as is possible with availability
zones in Binero cloud, a single zone should be enough to guarantee a full working service on its own.

A global load balancer would be able to notice a failure at a availability zone and proceed to remove it in its
entirety by fencing it from receiving requests until service in that availability zone is restored.

Binero cloud does not currently provide a global load balancer service but by using `our DNS system </dns>`__ we do
provide a highly redundant, geo-diverse name server solution that could be used as a manual GLB.

Please contact us for more information or if you need help designing the fault tolerance that suites
your application best.

.. tip::

   While building geo-diverse highly available systems is difficult, using a platform with support for it greatly
   simplifies the task. We are available to help with design decisions for your setup, please contact us if you need
   our assistance!

..  seealso::

  - :doc:`/networking/router/index`
  - :doc:`/storage/index`
