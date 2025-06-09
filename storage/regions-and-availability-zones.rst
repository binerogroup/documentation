======================================
Storage regions and availability zones
======================================

Storage is a core service and is available in all Binero clouds regions and availability
zones.

Below we outline the region and availability zone concepts for storage.

If you are looking to roll out a geographically redundant platform, understanding the base
design principles will help you create a resilient and highly available system as well as
securing your data in case of a hypothetical availability zone outage scenario.

Volumes
-------

:doc:`Volumes <persistent-block-storage/index>` are local to an availability zone. Binero cloud
does *not* stretch our storage platform(s) but use individual storage in each availability zone.

This is to guarantee that the storage is not impacted in several zones at once in case of some
incident with the storage platform. 

Binero cloud currently does not allow for replication of block storage between zones. We recommend
that you implement replication of your data on the application layer or by using our :doc:`object storage <object-storage/index>` 
service.

Moving a volume between availability zones
------------------------------------------

For security reasons, there is no network connectivity between the storage platforms of our
availability zones. Because of this, there are two main options to move volumes:

- Create a :doc:`backup </backup/index>` and restore in the different zone. 

- Create an :doc:`image </images/index>` from a volume and setup an instance in a different zone based on the image. 

Object storage
--------------

:doc:`Object storage <object-storage/index>` is available in all our availability zones.

Replication is available using a separate :doc:`endpoint <object-storage/endpoints>` that will replicate between
our europe-se-1a and europe-se-1b availability zones.

When using replicated object storage, there are no special considerations (with regards to the actual replication)
for the user as the platform manages the entire replication.

The user should however take care to connect to the endpoint that is local to the application (or to europe-se-1a
when connecting from the outside). 

NVMe storage
------------

NVMe storage is not replicated and is currently only available in the europe-se-1a availability zone. 

Snapshots
---------

All snapshots are local to the volume that the snapshot depends on. This means that snapshots are store in the
availability zone where the volume they belong to are stored.

When creating a volume from a snapshot, it will be save in the same availability zone as the snapshot.

While you are able to provision an instance from a snapshot in a different availability zone, this provision
task will fail. 
