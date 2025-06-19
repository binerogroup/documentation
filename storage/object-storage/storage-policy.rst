==============
Storage policy
==============

Binero cloud provides different storage policies for you to place your container or bucket on.

A storage policy is using an underlying :doc:`storage type <../storage-types>` and
other features to accommodate different use-cases.

The intent is to allow users to select on a more granular level on what they need for
their use-case such as:

- Size of the object(s)

- Risk of data loss

- Access frequency on object(s)

- Write frequency on object(s)

- Latency

- Price point

.. note::

   The default storage policy on a container or bucket is ``gp.recurring`` unless other is
   specified upon creation.

.. note::

   The storage policies available when using replication might differ,
   see :doc:`replication <replication>`

The storage policies available are:

- ``gp.archive``

- ``gp.intermittent``

- ``gp.recurring``

- ``hp.intensive``

.. tip::

   Plan the storage policy you use based on your use-case as this will have an impact on
   your performance and also on your cost and retrieval fees.

The different storage policies have different intended use-cases as presented in detail below.

Their price points for usage and retrieval is available in our `price list <https://binero.com/public-cloud-platform/publikt-moln/pris/>`__
where the pricing is different for each storage policy.

The pricing for usage is the combined size in gigabytes (GB) of objects you store in
all your containers or buckets.

The pricing for retrieval per gigabyte (GB) is also applied on some storage policies, this cost
is the bytes sent to you when for example downloading objects or listing objects in a container or
bucket, this is to keep a low price point for data set that require massive amount of usage but
infrequent access.

gp.archive
----------

This storage policy is general purpose (gp) and its intended use-case is archiving, that
is a long term storage for cold data, for example backups (our :doc:`backup service</backup/index>` use
this policy). 

To keep the price down, this solution uses erasure coding which is a way to store data redundantly
but using minimal space.

This method is somewhat less secure from a data integrity standpoint than replication (which all the other
storage policies use) but can in turn provide a lower price point per GB. The :doc:`storage media <../storage-types>` is HDD.

gp.intermittent
---------------

This storage policy is general purpose and its intended use-case is storing data that is seldom
requested but that requires a higher security than erasure coding. 

This solution uses three-way replication (meaning each object gets stored three times on different disks
in different servers). The :doc:`storage media <../storage-types>` is HDD.

gp.recurring
------------

This storage policy is general purpose and its intended use-case is storing large objects that are
frequently requested (for example video or audio material for a website). 

This solution uses three-way replication (meaning each object gets stored three times on different disks
in different servers). The :doc:`storage media <../storage-types>` is HDD.

hp.intensive
------------

This storage policy is high performance and its intended use-case is storing objects that are frequently
requested and when user experience (for example latency and speed) is important. 

This solution uses three-way replication (meaning each object gets stored three times on different disks
in different servers). The :doc:`storage media <../storage-types>` is SSD.

..  seealso::

    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
