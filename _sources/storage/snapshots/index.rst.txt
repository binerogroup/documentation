=========
Snapshots
=========

A snapshot is a point-in-time snapshot of a filesystem on a volume.

Snapshots are pretty much instant because they don't move any data but
only creates a checkpoint from where it tracks changes. A revert to a
snapshot is also fast.

Snapshots are hierarchal in the sense that each snapshot will reference the
previous snapshots.

The most common use-case for a snapshot is for testing out something in a
production system. For example upgrades or other invasive actions and if
something goes wrong you can revert to the snapshot.

.. tip::

   We recommend that you are restrictive in the usage of snapshots and
   instead use best practices to test your changes before doing any invasive
   actions.

.. important::

   A snapshot is **NOT** a :doc:`backup </backup/index>`. While it might be tempting
   to take recurring snapshots for safety, all data for snapshots is in the same storage
   platform as your primary data and does not protect you in case of an unexpected outage.

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
