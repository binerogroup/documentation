=======
Flavors
=======

Binero.Cloud provides various flavors of object storage. A flavor is using an underlying :doc:` storage typ <../storage-types>` that combines a set of features to cater to a certain use-case. Another word for flavor relating to object storage is "storage policy" - the intent is to give the user a way to (on a more granular basis) setup their solution to match the use-case when it comes to the following parameters:

- Size of the object(s).
- Risk of dataloss.
- Frequency of accessing the objects.
- Price point.

The flavors available are:

- gp.archive
- gp.intermittent
- gp.recurring
- hp.intensive

The various flavors have different intended use cases and will be presented in detail below. Their respective price points are available `here <https://binero.com/public-cloud-platform/publikt-moln/pris/>`__.

gp.archive
----------
This flavor is classified as "general purpose" and its intended use case is archiving, that is a file-dump on which you can store data that is not intended to be read that much (or at all), for instance backup of files or instances (our :doc:`backup solution </backup/index>` use this plan). 

In order to keep the price down, this solution uses erasure coding which is a way to store data redundantly with minimum overhead. This method is somewhat less secure from a data integrity standpoint than replication (which the other flavors use) but can in turn be provided at a lower price point per GB. The :doc:`storage media <../storage-types>` is HDD.

gp.intermittent
---------------
This flavor is classified as "general purpose" and its intended use case is storing data that is seldom requested but that requires a higher security than erasure coding. 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is HDD.

gp.recurring
------------
This flavor is classified as "general purpose" and its intended use case is storing large objects that are frequently requested (for instance video or audio material for a website). 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is HDD.

hp.intensive
------------
This flavor is classified as "high performance" and its intended use case is storing objects that are frequently requested and when user experience (i.e. latency of download) is important. 

This solution uses 3-way replication (meaning each object is stored 3 times on different disks in different servers). The :doc:`storage media <../storage-types>` is SSD.

..  seealso::
    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
