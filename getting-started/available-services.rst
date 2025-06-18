==================
Available services
==================

Binero cloud is a fully fledged infrastructure platform. Below are some of the
main services outlined.

Compute
-------

One of the three core services of the platform, compute is instances (virtual
machines) running on physical hardware, providing CPU and RAM via flavors (which
defines amount of resources and what kind of resources a server or instance gets
access to).

Block storage
-------------

Another core service, block storage is the persistent storage that's used to store
your data.

This block storage service provides volumes that can be either SSD or HDD based
depending on your use-case. Volumes supports snapshot, backups and many other features.

You can boot instances by using a volume, or attach one or more volumes to instances,
move volumes between instances and many other features.

Networking
----------

The last core service is networking. Binero cloud supports networks, routers, load balancers,
security groups (firewall) and other functionality to provide you with fast networking for
your infrastructure.

You can use floating IP addresses connected (public IP addresses on the internet) to a port to
provide access to and from your applications and services.

Load balancer
-------------

To manage load distribution between instances and creating highly available and redundant
services you can use our load balancer service.

This system takes incoming requests and forwards it to an instances that you
configure in a pool.

If one instance is not working our system will automatically remove it from the pool. By using
our load balancer service, you can scale out your applications and services fast and efficiently.

Secret store
------------

Using our secure secret store, you can store information securely that you want to use
for the platform.

For instance certificate keys for terminating SSL/TLS in the load balancer or for object
encryption when using with the object storage service. 

Client VPN
----------

To reach your infrastructure securely, you can use a VPN.

This adds a secure tunnel, by encrypting your traffic before sending it over the internet
to your cloud infrastructure. Binero cloud different types of VPN solutions.

Object storage
--------------

Our object storage service helps you store objects, blobs, files or data of any kind by
talking to our secure HTTPS APIs.

Binero cloud supports both the S3 and Swift API for our object storage service.

NVMe storage
------------

NVMe based storage is the most highly performing storage available with latency, throughput
and I/O close to the speed of memory.

Binero cloud provides different NVMe flavors for applications that require the highest
possible throughput and lowest latency to disk.

Backup
------

Binero cloud has a built-in backup solution that you can enable for your volumes.

Backup is always sent to another availability zone and stored in our object storage
service. 

GPU based compute
-----------------

For certain workloads, a CPU will not provide enough parallelism to provide an efficient
workflow.

A GPU is by design more limited in their use-cases but fast and optimized for graphics
or AI workloads.

Binero cloud provides instances with GPU compute. 

Availability zones
------------------

Binero cloud is available in two physical locations, availability zones, with a metric mile
between them.

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
