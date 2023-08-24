==================
Available services
==================
Binero.cloud is a full fledged infrastructure platform. Below are some of the main services outlined.

Compute
-------
One of the three core services of the platform, compute are virtual instances of physical hardware, providing CPU and RAM via "flavors" (which can be described as "recepies" for a virtual server or instance). 

Block storage
-------------
Another core service, block storage is the persistant storage that is used to save files and data, i.e. the "harddrive" of the server. This is done via volumes that can be either SSD-based or HDD-based (depending on the use case). The volumes are attached to instances at creation but can be re-attached to a new instance or shelved. 

Networking
----------
The last core service is networking. Binero.cloud supports virtual routers that enable routing between networks as well as firewalling. To routers (and instances) its possible to connect floating IPs which are public (available on the internet) IP-addresses that can have various functions.

Load balancing
--------------
To manage load distribution between servers (or to create highly available systems) a load balancer is provisioned. This is a system that takes a request and forwards it to one of several available servers in a pool. If one server is not working (or needs to be for instance rebooted), it will be removed from the pool. By using a load balancer, its easier to scale out a system.

Secret store
------------
Using our secure secret store, you can store information securely that you want to use for the platform. For instance certificate keys for terminating SSL in the loadbalancer or for using with the S3 service. 

Client VPN
----------
To reach your infrastructure securely, a VPN might be utilised. This would setup a secure tunnel, encrypting your traffic before sending it over the internet back and forth. Binero.cloud supports OpenVPN.

Object storage
--------------
Object storage is a way to store objects (files of any kind) by id in the cloud using HTTPS. Binero.cloud supports both S3- and Swift-based object storage.

NVMe storage
------------
NVMe based storage is the most highly performing storage available with latency, throughput and I/O close to the speed of RAM. Binero.cloud supports NVMe volumes for applications that require the highest possible speed.

Backup
------
Binero.cloud has a built in backup solution that you can enable for your volumes. Backup is always sent off site and stored in our S3 cloud. 

GPU based compute
-----------------
For certain workloads, a CPU will not provide enough parallelism to provide an efficient workflow. GPUs are by design more limited in their use but extremely capable at doing the work they are designed for. Binero.cloud provides instances with GPU compute. 

Multiple availability zones
---------------------------
Binero.cloud is available in two physical locations, availability zones, with about 10 km as the crow flies between the sites.  

..  seealso::
  - :doc:`/compute/index`
  - :doc:`/storage/index`
  - :doc:`/networking/index`
  - :doc:`/networking/load-balancing/index`
  - :doc:`/secret-store/index`
  - :doc:`/networking/client-vpn/index`
  - :doc:`/storage/object-storage/index`
  - :doc:`/storage/nvme-storage`
  - :doc:`/backup/index`
  - :doc:`/compute/gpu-instances`
  - :doc:`/regions-and-availability-zones`
