============
NVMe storage
============

General concept
----------------
NVMe based storage is the fastest available persistent storage in the platform. This is due to:

- NVMe is based on flash (SSD) cells that are connected very close to the CPU of the computer (on the PCIx bus directly - similar, but not identical, to RAM). 
- NVMe storage in Binero.Cloud is local to the hypervisor, meaning networking is not used to reach the storage. 
- NVMe storage is **not** replicated, meaning there is no overhead in writing data several times and waiting for sync for each write.

These attributes combine to dramatically lower the latency from request to response (for both reads and writes) to the storage layer. NVMe storage is actually measured in micro seconds as opposed to other storage that is generally measured in milliseconds. One microsecond is 1/1000 of a millisecond.

As latency is arguably the most important factor in storage performance, reducing it will certainly have an impact on storage intensive applications where CPU will not have to idle while waiting for IO as much.

How to use
----------
When provisioning an :doc:`instance </compute/index>` that is including NVMe in its name (for more information, please see our list of :doc:`flavors </compute/flavors>`), the platform will schedule the instance onto hypervisors with local NVMe disks attached. 

With NVMe, you are only able to select between 50GB or 250GB disk sizes, the reason for this is because NVMe disks by design are local and therefore does not scale as well as well as the SSD and HDD storage (which is delivered from a highly scalable storage platform). You are not able to grow a disk or :doc:`retype it <retype-a-volume>` either for the same reason. Because of this, we recommend choosing an NVMe disk that fits your need. 

.. Note::
	Should you need more NVMe storage than 250GB, please :doc:`contact us </general/getting-support>` and we can discuss the available options.

Differences to standard storage
-------------------------------
Since NVMe-based storage is setup differently than our standard :doc:`SSD and HDD <storage-types>` storage types (which is a requirement to reach the performance level), there are some caveats that a consumer of NVMe storage should be aware of: 

- NVMe storage is *not* redundantly setup. NVMe storage is delivered from the same hypervisor that runs the instance - in order to provide the performance that NVMe disks does, they are not RAIDed or replicated. That said, they are also very high grade disks. 
- NVMe storage can not be live migrated. Live migration is a technique that is used by our administrators when doing system maintenance in order to evacuate parts of the platform so as to allow for maintenance with zero downtime. Since NVMe uses a local resource, its not possible to live migrate. Because of this, when doing maintenance, instances based on NVMe will be shut down for the duration of the maintenance. Please see our :doc:`/general/outages` article that details how to get noticed in the event of planned maintenance. 
- NVMe-based storage cannot be :doc:`extended <persistent-block-storage/extend-volume>` through the platform, if you think you will ever need more than 50 GB we recommend going with 250 GB. If you need more than 250 GB, :doc:`contact us </general/getting-support>` to discuss a solution.
- NVMe-based storage cannot be :doc:`retyped <retype-a-volume>`. You can however add one or more additional HDD or SSD volumes to the same instance and copy the data. Since the NVMe volume is the boot disk, however, we recommend doing a migration to another instance if you need to retype.
- Since NVMe volumes are copied from the image repository to the hypervisor, it takes longer to provision an NVMe based instance.
- NVMe based storage is currently only available in the *europe-se-1a* :doc:`availability zone <regions-and-availability-zones>`.
- Because NVMe is generally used only when performance is very important, we only have our High Performance :doc:`/compute/flavors` available with NVMe.

.. Important::
	For above reasons, we strongly recommend you to regularly backup your data if you are using NVMe based storage.




