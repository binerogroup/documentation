=========
Snapshots
=========

A snapshot is a point-in-time snapshot of a filesystem on a volume.

Snapshots are pretty much instant because they don't move any data but
only creates a checkpoint from where it tracks changes. A revert to a
snapshot is also fast as no data needs to be moved.

Snapshots are hierarchal in the sense that each snapshot will reference the
previous snapshots.

The most common use-case for a snapshot is for testing out something in a
production system. For example upgrades or other invasive actions if something
goes wrong the snapshot can be used to revert.

.. tip::

   We recommend that you are conservative in the usage of snapshots and
   instead implement best practices to test your changes before going
   any invasive actions.

.. important::

   A snapshot is **NOT** a :doc:`backup </backup/index>`. While it might seem like
   a good approach to just take recurring snapshots, so that its possible to revert
   to an older stage, no data is moved so in case of an issue with the underlying
   platform, all snapshots would be lost. 

If you want to access the data of a snapshot, the recommended approach is to
:doc:`create-volume-from-snapshot` and attach it to an instance (or base a new
instance of the volume).

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-snapshot
  delete-snapshot
  create-volume-from-snapshot
  create-backup-from-snapshot
