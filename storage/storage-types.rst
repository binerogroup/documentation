=============
Storage types
=============

By storage type, we refer to the media that is used to store data. Binero cloud has three main
storage types, namely SSD, HDD and NVMe.

You are able to :doc:`retype <retype-a-volume>` a volume later on if you are using either SSD or
HDD (to the other type).

SSD
---

SSD is the most versatile storage solution. It uses NAND cells to store data This technique vastly
shortens "seek times" - a big issue with traditional drives because a mechanical read/write head needs
to physically move into position before being able to read or write data.

This means SSD media have great random read/write performance with significantly lower latency than
mechanical drives.

The downside is cost - SSD storage is more expensive than mechanical (HDD) drives and so storing large
amount of infrequently accessed data on SSD drives is not cost efficient. 

SSD backed storage are the default option, i.e. if you don't select what media to use, you will
end up on SSD media.

All SSD storage in Binero cloud is three way replicated. That means that for 1GB data that you upload in
the platform, 3GB of data is written to disk. The reason behind this is data integrity, we want to minimise
the risk for data loss for our customers.

SSD is a good tradeoff between cost and performance for most use cases involving data that needs to
be widely accessible.

HDD
---

HDD is the most cost effective storage solution when only taking pure storage space into account.

This storage tier consists of traditional mechanical spinning drives which use magnetism on a metallic
surface to store data.

HDD drives suffer from seek times, that is they have a read/write head that needs to be positioned correctly
above the disk surface before data can be read or written.

When data is read (or written) sequentially however (meaning when a large bit of data, for example a backup
image, is read one byte after the other from start to finish), HDD media still have good performance, i.e
throughput but less so than SSD.

HDD backed storage can be used by specifically selecting it when creating an :doc:`instance </compute/index>`
or by choosing the proper Storage policy when provisioning an S3 bucket.

When using HDD , storage is (like SSD) three way replicated. When using HDD for
:doc:`object storage <object-storage/index>` its also three way replicated, except
for the storage policy **gp.archive** (which uses erasure coding).

HDD, then, is a good option when wanting to store large amounts of data, preferably infrequently
used (like a file server or archive solution).

NVMe
----

NVMe is the fastest, highest performing storage in the platform. Like SSD, its also based on enterprise
grade NAND-flash cells.

The difference is the access stack, NVMe disks are connected directly on the PCI bus of the hypervisors.

That means that the path from CPU to storage is similar to that of RAM with minimal overhead. This lowers
the *latency* (that is, the time from CPU requesting data until its delivered from storage) of the
solution to well below 1 ms (its normally measured in microseconds, other solutions are measured in
milliseconds). 

Faster access to storage is particularly important when reading (or writing) random data. The downside is
that NVMe storage, since its physically located in a hypervisor node, is not redundantly setup.

NVMe based storage is therefore only available in the instance flavors that use it and will have some
downsides because of it. More information in our :doc:`nvme-storage` article.

NVMe is a strong option for situations where extremely fast access to disk is needed, beyond what
SSDs deliver. 

..  seealso::

    - :doc:`nvme-storage`
    - :doc:`persistent-block-storage/index`
    - :doc:`object-storage/index`
