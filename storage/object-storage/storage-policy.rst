==============
Storage policy
==============

Binero cloud provides various storage policies for you to place your container/bucket on. A storage policy is using an underlying :doc:`storage type <../storage-types>` and additional features to accommodate different use-cases.

The intent is to allow users to select on a more granual level on what they need for their use-case such as:

- Size of the object(s)
- Risk of data loss
- Access frequency on object(s)
- Write frequency on object(s)
- Latency
- Price point

.. note:: The default storage policy on a container/bucket is ``gp.recurring`` unless other is specified upon creation.

.. note:: The storage policies available when using replication might differ, please see :doc:`replication <replication>`

The storage policies available are:

- gp.archive
- gp.intermittent
- gp.recurring
- hp.intensive

.. tip:: Plan the storage policy you use based on your use-case as this will have an impact on your performance as well as pricing and retrieval fees.

The various storage policies have different intended use-cases as presented in detail below. Their respective price points for usage and retrieval is available in our
`price list <https://binero.com/public-cloud-platform/publikt-moln/pris/>`__ where the pricing is different for each storage policy.

The pricing for usage is based on the combined size in gigabytes (GB) of objects you store in all your buckets/containers.

The pricing for retrieval per gigabyte (GB) is also applied on some storage policies, this is based on the bytes sent to you when for example downloading
objects or listing objects in a bucket, this is to keep a very low price point for dataset that require massive amount of usage but very infrequent access.

gp.archive
----------

This storage policy is classified as general purpose (gp) and its intended use-case is archiving, that is a file-dump on which you can store data that is not intended to be read that much (or at all), for instance backup of files or instances (our :doc:`backup solution </backup/index>` use this plan). 

In order to keep the price down, this solution uses erasure coding which is a way to store data redundantly with minimum overhead. This method is somewhat less secure from a data integrity standpoint than replication (which all the other storage policies use) but can in turn be provided at a lower price point per GB. The :doc:`storage media <../storage-types>` is HDD.

gp.intermittent
---------------

This storage policy is classified as "general purpose" and its intended use-case is storing data that is seldom requested but that requires a higher security than erasure coding. 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is HDD.

gp.recurring
------------

This storage policy is classified as "general purpose" and its intended use-case is storing large objects that are frequently requested (for instance video or audio material for a website). 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is HDD.

hp.intensive
------------

This storage policy is classified as "high performance" and its intended use-case is storing objects that are frequently requested and when user experience (i.e. latency of download) is important. 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is SSD.

..  seealso::
    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
