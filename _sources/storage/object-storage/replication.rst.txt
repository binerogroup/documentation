=========================
Replicated object storage
=========================

For use-cases where you would either want you storage available in case of a disaster, or more commonly, design
your application to be more resilient, making sure your object storage is available from more than one
availability zone.

Please see our :doc:`../regions-and-availability-zones` for information on where we provide object storage.

Binero cloud supports object storage replication. This works for both S3 and Swift APIs. 

The replication method used is *eventually consistent*. This means that objects will replicate in the background once
uploaded to the storage by using the proper *endpoint*.

This replication process follows an eventually consistent model and ensures that your data replicates within 15 minutes
but can take longer depending on the size of the object uploaded.

Because of this, a new object will not be immediately available in both availability zones, but rather on the site where
you uploaded it, and within a short time once replicated, on the other.

.. note::

   When using replication, always connect to the API endpoint that is local to you - replication will manage the rest.

.. important::

   Do not combine replication with object encryption as this could result in data loss when updating objects from both ends. 

Endpoints
---------

You enable using replication by connecting to a replicated endpoint. Please see :doc:`endpoints` for information on what
our endpoints for replicated storage are.

Make sure to choose the replicated endpoint local to the site that you are running your requests from (or **europe-se-1a** if
they are not from one of our sites). If you put objects in buckets or containers that's created on either of these APIs, the
objects will replicate.

.. important::

   The portals (for example the cloud management portal) in the platform only connect to the **standalone** object storage
   in availability zone **europe-se-1a**. As such, if you want to create a replicated bucket or container, you will need to
   use a CLI tool.

Storage policy
--------------

The storage policies that are available when using replicated object storage is the policies that is
most suitable as a primary storage.

The following storage policies is available when using replication:

- ``hp.intensive``

- ``gp.recurring``

..  seealso::

    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
