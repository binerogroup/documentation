==============
Object Storage
==============
Object storage is a very good way to store unstructured data. Unlike a filesystem (where you would have a structured tree of files and folder) or block storage (where you would use a filesystem that kept track of stored blocks), object storage simply stores arbitrary objects. 

Each object would typically contain the data that is stored, a varying amount of meta-data (that is, information about the stored object) as well as a globally (for the platform) unique ID that reference the object. 

Object storage is optimised for storing data that needs to be written once and then read (and re-read). While there is support for committing changes to objects, this is generally avoided. As such, object storage is often used for storing and serving static data, for instance images, PDFs or movies. Binero.clouds :doc:`backup service </backup/index>` use our object storage to save the backup files. 

In Binero.cloud you are able to provision two types of object storage, :doc:`s3` and :doc:`swift`. They are both served from the same underlying platform and can reach the same data but use different API formats.

You have the ability to chose from several :doc:`flavors` of object storage to setup a storage solution that delivers at the lowest possible cost per GB while still meeting your requirements. We also enable :doc:`replication <replication>` if you want to have your data available in multiple datacenters, for instance as part of a multi datacenter high availability solution.

We recommend reading through our :doc:`getting-started` guide if you are not previously used to working with object storage in an OpenStack based platform.


.. toctree::
  :caption: Available services
  :maxdepth: 1

  getting-started
  endpoints
  s3
  swift
  flavors
  replication