======
Backup
======

Using the backup feature in Binero cloud, you are able to backup and restore volumes.

Backups will be stored on the object storage of your account in :doc:`availability zone </storage/regions-and-availability-zones>`
**europe-se-1b** using the gp.archive :doc:`storage policy </storage/object-storage/storage-policy>`. 

.. important::

   When backing up volumes from availability zone *europe-se-1b*, note that the backups currently
   will *also end up in the same availability zone* (and, in part, on the same storage).

   If you have data that is not also stored in zone europe-se-1a, we recommend using a different
   backup in order to secure your data for a potential storage outage in zone europe-se-1b.

Data integrity
--------------

The backup service in Binero cloud backs up :doc:`volumes </storage/persistent-block-storage/index>`.

When backing up a volume, data will be copied bit-by-bit from the source to the destination over some time (it
takes time to copy large amounts of data).

If data is also being written to the source disk during copying, the data on the destination server may get
corrupted. A way to work around this is to shut down the server but since this may not always be an option, taking
some time to consider the potential impact of corrupted data might be advisable. 

For a file server, the risk of corrupted files should be minimal (and in case a file is compromised, the damage is
limited to that file).

When backing up a database, however, the entire database might be reliant on a few files and should one of them be
compromised, the database will not start again. In this scenario, the usual solution is to first run a dump of the
database data onto a file on the filesystem. This file would then be safe (as its not written to after the dump) and
in case of a restore, the file could just be read back into the database. 

A way to work around this problem (in part) is to first :doc:`snapshot </storage/snapshots/index>` your volume and then
backup the snapshot. That way, new writes will be moved away from the snapshot (which is read-only) and data will be
safer. Bare in mind that a snapshot could also cut writes in half so exporting databases is still advisable. 

Shutting of your instance will make the backup entirely safe from above issues. 

.. tip::

   We strongly recommend doing a restore test of your backups. Since :doc:`restoring <restore-volume>` to a new volume
   and creating a new instance that could run parallel to your production workload, this is a good way to ensure data
   consistency in your backup.

Setting up backup
-----------------

The Binero cloud backup feature can be used in two main ways, see below.

Manual backup
^^^^^^^^^^^^^

When doing a manual backup, your data would be pushed to the backup storage once upon request. This could be done for
example, before doing a migration or upgrade (although a snapshot might also be a good alternative for this) or if you want
to have a copy of an installed server stored offline in case of the real server for instance being deleted - and then backing
up the data separately.

More information in our :doc:`manual-backup` article.

Automated backup
^^^^^^^^^^^^^^^^

The platform is able to automatically run backup jobs for you. This can be setup via the :doc:`platform automation tool </platform-automation/index>`, however
we strongly recommend using our :doc:`service catalog </service-catalog/schedule-backup>` to simplify creating an automated backup job.

The platform will not do incremental backups when using the built-in workflow to run backups.

More information in our :doc:`automatic-backup` article.

.. note::

   Before creating a backup, please note that you are strongly recommended to also dump any database to disk before running
   the job. If the job is ran on a schedule, also dump your database on a schedule inside your instance (and do it before
   the backup is created). 

.. toctree::
  :caption: Available services
  :maxdepth: 2

  manual-backup
  automatic-backup
  restore-volume
