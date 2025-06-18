==============
Object storage
==============

Object storage is a good way to store unstructured data. Unlike a file system where you would have a structured
tree of files and directories or block storage upon which you can use a file system, object storage stores arbitrary
objects.

Each object consists of the data stored and a varying amount of metadata, that is, information about the stored object.

The :doc:`backup service </backup/index>` in Binero cloud uses our object storage to save the backup data.

In Binero cloud you are able to consume the object storage service by using both the :doc:`S3 API <s3>` and the
:doc:`Swift API <swift>`, both from the same underlying storage platform and can reach the same data but use
different APIs.

.. note::

   In the documentation we can refer to either a container or bucket both being the same thing, a container holding
   objects, where bucket is S3 terminology and container is Swift terminology.

.. tip::

   We enforce a default quota of 1000 buckets or containers in the object storage, contact our
   support if you need more.

You have the ability to choose from different :doc:`storage policies <storage-policy>` of object storage to setup a
storage solution that delivers at the lowest possible cost per GB while still meeting your requirements.

We also enable :doc:`replication <replication>` if you want to have your data available in more than one
availability zone for example as part of a multi data center high availability solution.

We recommend reading through our :doc:`getting-started` guide to get starting using our
object storage service.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  getting-started
  endpoints
  s3
  swift
  storage-policy
  replication
  versioning
  object-locking
  object-encryption
  known-limitations
