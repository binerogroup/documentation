=========================
Replicated object storage
=========================
For use-cases where you would either want you storage available in the event of a disaster, or - more commonly - design your application to run on multiple sites, making sure your object storage is available from both sites will be a requirement. Please see our :doc:`../regions-and-availability-zones` article for information on where we provide object storage. Binero.cloud supports object storage replication. This works for both S3 and Swift APIs. 

The replication method used is called "eventually consistent". This means that objects will replicate in the background once they've been added to the storage using the proper *end point* (see below). This process is usually done within 15 minutes but can take longer depending on the size of the object uploaded. Because of this, a new object will not be immediately available on both sites, but rather on the site where it was uploaded and (within a short time once its been replicated) then on the other.

.. Note::
	When using replication, always connect to the API endpoint that is local to you - replication will manage the rest.

.. Important::
        Do not combine replication with object encryption as this could result in dataloss when updating objects from both ends. 

Endpoints
---------
You enable using replication by connecting to a replicated endpoint. Please see :doc:`our endpoints article <endpoints>` for information on what our endpoints for replicated storage are. Make sure to choose the replicated endpoint local to the site that you are running your requests from (or **europe-se-1a** if they are not from one of our sites). If you put objects on buckets/containers that are created on either of these APIs, the objects will replicate.

.. Important::
	The various GUIs (for instance the cloud management portal) in the platform connect only to the **non replicated** storage in availability zone **europe-se-1a**. As such, if you want to create a replicated bucket/container, you will need to use a CLI tool.

Flavors
-------
Flavors (or storage policys) that are available for replication are the ones suitable for primary storage that needs to be highly available:

- hp.intensive
- gp.recurring

..  seealso::
    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
