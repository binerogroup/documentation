============
NVMe storage
============

General concept
----------------

NVMe based storage is the fastest available persistent storage in the platform. This is due to:

- NVMe uses flash (SSD) cells connected close to the CPU of the computer (on
  the PCI Express bus directly - similar, but not identical, to RAM).

- NVMe storage in Binero cloud is local to the hypervisor, meaning networking is not used to reach
  the storage. 

- NVMe storage is **NOT** replicated, meaning there is no added latency when writing data.

These attributes combine to dramatically lower the latency from request to response (for both reads
and writes) to the storage layer.

NVMe storage measures in microseconds as opposed to other storage that is generally measured in
milliseconds. As latency is arguably the most important factor in storage performance, reducing it
will certainly have an impact on storage intensive applications where CPU will not have to idle while
waiting for IO as much.

How to use
----------

When provisioning an :doc:`instance </compute/index>` that is including NVMe in its name (for more
information, see our list of :doc:`flavors </compute/flavors>`), the platform will schedule
the instance onto hypervisors with local NVMe disks attached. 

With NVMe, you are only able to select between 50 GB or 250 GB disk sizes, the reason for this is because
NVMe disks by design are local and does not provide the same flexibility as our block storage service.

You are not able to grow a disk or :doc:`retype it <retype-a-volume>` either for the same reason. Because
of this, we recommend choosing an NVMe disk that fits your need. 

.. note::

   Should you need more NVMe storage than 250GB, :doc:`contact us </general/getting-support>` and we
   can discuss the available options.

Differences to standard storage
-------------------------------

Since NVMe-based storage is setup differently than our standard :doc:`SSD and HDD <storage-types>` storage
types, there are some caveats that a consumer of NVMe storage should be aware of: 

- NVMe storage is **NOT** redundantly setup. We deliver NVMe storage from the same hypervisor that runs the
  instance to provide the performance that NVMe disks does, they are not using RAID nor are they replicated. That
  said, they are high enterprise grade disks.

- NVMe storage cannot be live migrated. Live migration is a technique that our administrators use when doing system
  maintenance to evacuate parts of the platform to allow for maintenance with zero downtime. Since NVMe uses a local
  resource, its not possible to live migrate. Because of this, when doing maintenance, instances based on NVMe is 
  powered off for the duration of the maintenance. Please see our :doc:`/general/outages` article that details how to
  get noticed in case of planned maintenance. 

- NVMe-based storage cannot be :doc:`extended <persistent-block-storage/extend-volume>` through the platform, if
  you think you will ever need more than 50 GB we recommend going with 250 GB. If you need more than 250 GB,
  :doc:`contact us </general/getting-support>` to discuss a solution.

- NVMe-based storage cannot be :doc:`retyped <retype-a-volume>`. You can add one or more extra HDD or SSD volumes to
  the same instance and copy the data. Since the NVMe volume is the boot disk, we recommend doing a migration to
  another instance if you need to retype.

- Since we need to write images to the local NVMe disk on the hypervisor, it takes longer to provision an NVMe
  based instance.

- NVMe based storage is currently only available in the *europe-se-1a* :doc:`availability zone <regions-and-availability-zones>`.

- Because NVMe is generally used only when performance is critical to the application, we only have our High Performance
  :doc:`/compute/flavors` available with NVMe.

.. important::

   For above reasons, we strongly recommend you to regularly backup your data if you are using NVMe based storage.
