======
Backup
======

Using the backup feature in Binero cloud, you are able to backup and restore volumes.

The system stores the backups in the object storage of your account in
:doc:`availability zone </storage/regions-and-availability-zones>` **europe-se-1b**
using the gp.archive :doc:`storage policy </storage/object-storage/storage-policy>`. 

.. important::

   When backing up volumes from availability zone *europe-se-1b*, note that the backups currently
   will *also end up in the same availability zone* (and, in part, on the same storage).

   If you have data that is not also stored in zone europe-se-1a, we recommend using a different
   backup to secure your data for a potential storage outage in zone europe-se-1b.

Data integrity
--------------

The backup service in Binero cloud backs up :doc:`volumes </storage/persistent-block-storage/index>`.

When backing up a volume the system copies the data bit-by-bit from the source to the destination, it
takes time when copying large amounts of data.

The system first takes snapshot of the data if it's a volume. If you're writing data to the volume while
taking the snapshot or if you are not using a volume and are writing data while a backup is running the
data might be corrupt before the data is even copied.

It's recommend to not write data while taking a backup and if you can power off your instance during
a backup that makes it more safe, but that's not always an option so you need to consider the impact
if your data in a backup is corrupt.

For a file server the risk of corrupted files should be minimal and in case of file damage or data loss
it's limited to that file.

When backing up a database the entire database might be reliant on a few files and should one of them
become corrupt, the database will not start again. In this scenario, the usual solution is to first run
a dump of the database data onto a file on the filesystem. This file would then be safe (as its not written
to after the dump) and in case of a restore, you can import the data back into the database from the dump.

Shutting of your instance will make the backup entirely safe from above issues. 

.. tip::

   We strongly recommend doing a restore test of your backups. Since :doc:`restoring <restore-volume>` to a
   new volume and creating a new instance that could run parallel to your production workload, this is a good
   way to ensure data consistency in your backup.

Setting up backup
-----------------

You can use the Binero cloud backup feature in two main ways, see below.

Manual backup
^^^^^^^^^^^^^

A manual backup is useful before doing a migration, upgrade or when retire an old system but want to
keep a copy of the data.

More information in our :doc:`manual-backup` article.

Automated backup
^^^^^^^^^^^^^^^^

The platform is able to automatically create backups for you. This can be setup via the
:doc:`platform automation tool </platform-automation/index>`, we strongly recommend using
our :doc:`service catalog </service-catalog/schedule-backup>` to enable automated backup.

The platform will not do incremental backups when using the built-in workflow to run backups.

More information in our :doc:`automatic-backup` article.

.. note::

   Before creating a backup, note that you are strongly recommended to also dump any database to disk. If
   the backup is ran on a schedule, also dump your database on a schedule inside your instance before the
   system takes the backup.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  manual-backup
  automatic-backup
  restore-volume
