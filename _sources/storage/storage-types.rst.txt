=============
Storage types
=============

By storage type, we refer to the media used to store data. Binero cloud has two main storage
types, namely SSD (flash) and HDD (mechanical).

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

..  seealso::

    - :doc:`persistent-block-storage/index`
    - :doc:`object-storage/index`
