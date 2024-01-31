=======
Storage
=======

Storage is a core function in the Binero cloud platform. You are able to provision both :doc:`block <persistent-block-storage/index>` and :doc:`object <object-storage/index>` storage directly in the platform as well as :doc:`file </service-catalog/fileshare>` (using NFS) via our :doc:`../service-catalog/index`. 

We provide three main :doc:`storage types <storage-types>`, each with its unique benefits; 

- SSD (flash), iops and throughput optimised highly available storage.
- HDD (mechanical), throughput and space optimised highly available storage.
- NVMe (PCI-e attached high performance flash), performance optimised storage.

You are able to use our :doc:`backup solution <../backup/index>` to backup your volumes onto our object platform in a second datacenter. 

Please see the various subsections to this article in order to get a good understanding of the storage possibilities in the platform.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  storage-types
  persistent-block-storage/index
  snapshots/index
  retype-a-volume
  object-storage/index
  nvme-storage
  regions-and-availability-zones
