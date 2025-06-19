=======
Storage
=======

Storage is a core function in the Binero cloud platform.

You are able to provision both :doc:`block <persistent-block-storage/index>` and
:doc:`object <object-storage/index>` storage directly in the platform and
:doc:`file </service-catalog/file-share>` (using NFS) via our :doc:`../service-catalog/index`. 

We provide three main :doc:`storage types <storage-types>`.

- SSD (flash), IOPS and throughput optimized highly available storage

- HDD (mechanical), throughput and space optimized highly available storage

- NVMe (PCI-E attached high performance flash), performance optimized local storage.

You are able to use our :doc:`backup solution <../backup/index>` to backup the data of
volumes onto our object platform in another data center. 

See the subsections to this article to get a good understanding of the storage
possibilities in the platform.

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
