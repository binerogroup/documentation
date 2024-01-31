=========
Snapshots
=========

A snapshot is a point-in-time freeze of a filesystem on a volume. This is managed by re-routing changes (writes) to another disk, leaving the snapshot un-affected. Snapshots are pretty much instant since they dont move any data but rather moves the location for future data. A revert to a previous snapshot is equally quick since again, no data needs to be moved, read just need to happen from another place.

Snapshots are hierarchal in the sense that each snapshot will reference the previous snapshots. While its possible to remove a snapshot in the middle, this will mean a commit of its data into a previous snapshot. When removing a snapshot (which is different from reverting *to* a snapshot), data is consolidated into the main disk again.

The most common scenario for using a snapshot is for testin out something in a production system. For instance doing a dist-upgrade of Linux, completely changing out all packages in the OS and testing out the result - would be much safer with a snapshot. If it does not work, just revert.

.. important:: A snapshot is **NOT** a :doc:`backup </backup/index>`. While it might seem like a good approach to just take recurring snapshots, so that its possible to revert to an older stage, no data is moved so in the event of an issue with the underlying platform, all snapshots would be lost. 

If you want to access the data of a snapshot, the recommended approach is to :doc:`create-volume-from-snapshot` and attach it to an instance (or base a new instance of the volume).

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-snapshot
  delete-snapshot
  create-volume-from-snapshot
  create-backup-from-snapshot
