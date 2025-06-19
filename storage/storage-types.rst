=============
Storage types
=============

By storage type, we refer to the media used to store data. Binero cloud has three main storage
types, namely SSD, HDD and NVMe.

You are able to :doc:`retype <retype-a-volume>` a volume later on if you are using either SSD or
HDD (to the other type).

SSD
---

SSD is the most versatile storage solution. It uses NAND cells to store data This technique vastly
shortens latency since seek time is a big issue with traditional drives where a mechanical read/write
head needs to physically move into position before being able to read or write data.

This means SSD media have great random read/write performance with lower latency than mechanical drives.

The downside is that SSD storage is more expensive than mechanical (HDD) drives and so storing large
amount of infrequently accessed data on SSD drives is not cost efficient. 

SSD backed storage is the default option, that is if you don't select what media to use, you will
end up on SSD media.

All SSD storage in Binero cloud is three-way replicated. That means that for each gigabyte of data that
you store in the platform, three times the data gets stored on disk. The reason behind this is data
integrity, we want to minimise the risk for data loss for our customers.

SSD is a good tradeoff between cost and performance for most use cases involving data that needs to
be widely accessible.

HDD
---

HDD is the most cost effective storage solution when only taking pure storage space into account.

This storage tier consists of traditional mechanical spinning drives which use magnetism on a metallic
surface to store data.

HDD drives suffer from seek times, that is they have a read/write mechanical head that needs to be physically
moved on the disk surface for operations.

When reading or writing data sequentially, meaning working with a large data set from start to finish
for example a large backup, HDD media still have good performance throughput but still less than SSD.

HDD backed storage is available when creating an :doc:`instance </compute/index>` or by choosing the
proper Storage policy when provisioning an object storage container or bucket.

When using HDD, storage is three-way replicated. When using HDD for :doc:`object storage <object-storage/index>`
it's also three-way replicated, except for the storage policy **gp.archive** (which uses erasure coding).

HDD is a good option when wanting to store large amounts of data, preferably infrequently used as with
use-cases for file servers, archive or backup solutions.

NVMe
----

NVMe is the fastest, highest performing storage in the platform. It's based on enterprise grade NAND-flash
cells such as our SSD type. The difference is the access, NVMe disks connect directly on the PCI-Express bus
on the hypervisor running your instance.

That means that the path from CPU to storage is much faster and you get access times more closer to memory. This
lowers the *latency* (the time from CPU requesting data until its delivered from storage) to microseconds where
other storage media gets measured in milliseconds.

Faster access to storage is particularly important when reading (or writing) random data. The downside is
that NVMe storage, since its physically located in a hypervisor node, is not redundantly setup.

NVMe based storage is only available in specific instance flavors and has some disadvantages that you need to
be aware of, read more in our :doc:`nvme-storage` article.

NVMe is a strong option for situations where you need fast access to disk, beyond what SSD can deliver.

..  seealso::

    - :doc:`nvme-storage`
    - :doc:`persistent-block-storage/index`
    - :doc:`object-storage/index`
