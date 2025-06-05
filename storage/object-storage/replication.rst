=========================
Replicated object storage
=========================

For use-cases where you would either want you storage available in case of a disaster, or - more commonly - design
your application to run on multiple sites, making sure your object storage is available from both sites will be a
requirement.

Please see our :doc:`../regions-and-availability-zones` for information on where we provide object storage.

Binero cloud supports object storage replication. This works for both S3 and Swift APIs. 

The replication method used is *eventually consistent*. This means that objects will replicate in the background once
they've been added to the storage using the proper *endpoint* (see below).

This process is usually done within 15 minutes but can take longer depending on the size of the object uploaded.

Because of this, a new object will not be immediately available on both sites, but rather on the site where it was
uploaded and (within a short time once its been replicated) then on the other.

.. note::

   When using replication, always connect to the API endpoint that is local to you - replication will manage the rest.

.. important::

   Do not combine replication with object encryption as this could result in data loss when updating objects from both ends. 

Endpoints
---------

You enable using replication by connecting to a replicated endpoint. Please see :doc:`endpoints` for information on what
our endpoints for replicated storage are.

Make sure to choose the replicated endpoint local to the site that you are running your requests from (or **europe-se-1a** if
they are not from one of our sites). If you put objects on buckets/containers that are created on either of these APIs, the
objects will replicate.

.. important::

   The various portals (for example the cloud management portal) in the platform only connect to the **standalone** object storage
   in availability zone **europe-se-1a**. As such, if you want to create a replicated bucket/container, you will need to use a
   CLI tool.

Storage policy
--------------

The storage policies that are available for when using replicated object storage is the policies that is
most suitable as a primary storage with a requirement for high availability.

The following storage policies is available when using replication:

- hp.intensive

- gp.recurring

..  seealso::
    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
