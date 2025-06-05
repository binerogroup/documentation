==================
Available services
==================

Binero cloud is a full fledged infrastructure platform. Below are some of the
main services outlined.

Compute
-------

One of the three core services of the platform, compute is instances (virtual
machines) running on physical hardware, providing CPU and RAM via flavors (which
defines amount of resources and what kind of resources a server or instance gets access to).

Block storage
-------------

Another core service, block storage is the persistent storage that is used to store your
data, i.e. the hard drive of the server.

This is done via volumes that can be either SSD-based or HDD-based (depending on the use case).

The volumes are attached to instances at creation but can be re-attached to a new instance or shelved. 

Networking
----------

The last core service is networking. Binero cloud supports networks, routers, load balancers,
security groups (firewall) and other services to implement networking for you.

To routers (and instances) its possible to connect floating IP addresses which are public IP addresses
on the internet that you can use to provide access to your applications and services.

Load balancer
-------------

To manage load distribution between servers (or to create highly available systems) a load balancer
is provisioned.

This is a system that takes a request and forwards it to one of several available servers in a pool.

If one server is not working (or needs to be for instance rebooted), it will be removed from the
pool. By using a load balancer, its easier to scale out a system.

Secret store
------------

Using our secure secret store, you can store information securely that you want to use for
the platform.

For instance certificate keys for terminating SSL in the load balancer or for object encryption
when using with the object storage service. 

Client VPN
----------

To reach your infrastructure securely, a VPN might be utilised.

This would setup a secure tunnel, encrypting your traffic before sending it over the internet
back and forth. Binero cloud supports OpenVPN.

Object storage
--------------

Object storage is a way to store objects (files of any kind) by id in the cloud using HTTPS.

Binero cloud supports both S3 and Swift APIs for our object storage service.

NVMe storage
------------

NVMe based storage is the most highly performing storage available with latency, throughput
and I/O close to the speed of RAM.

Binero cloud supports NVMe volumes for applications that require the highest possible speed.

Backup
------

Binero cloud has a built-in backup solution that you can enable for your volumes.

Backup is always sent off site and stored in our S3 cloud. 

GPU based compute
-----------------

For certain workloads, a CPU will not provide enough parallelism to provide an efficient workflow.

A GPU is by design more limited in their use but extremely capable at doing the work they are designed
and optimized for.

Binero cloud provides instances with GPU compute. 

Multiple availability zones
---------------------------

Binero cloud is available in two physical locations, availability zones, with a metric mile between the
them.

..  seealso::

  - :doc:`/compute/index`
  - :doc:`/storage/index`
  - :doc:`/networking/index`
  - :doc:`/networking/load-balancer/index`
  - :doc:`/secret-store/index`
  - :doc:`/networking/client-vpn/index`
  - :doc:`/storage/object-storage/index`
  - :doc:`/storage/nvme-storage`
  - :doc:`/backup/index`
  - :doc:`/compute/gpu-instances`
  - :doc:`/regions-and-availability-zones`
