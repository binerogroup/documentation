===============
MySQL / MariaDB
===============

`MySQL <https://www.mysql.com>`__ is a popular open-source relational
database. `MariaDB <https://mariadb.org>`__ is an alternative database
that was forked from MySQL that is mostly similar but has diverged a
bit through the years.

Binero cloud enables you to provision either MySQL or MariaDB (or both)
as a standalone installation or with replication.

If you select with replication, an auxiliary instance will be setup that
will copy all writes. This server can be used for database reads to reduce
the load on the primary instance and in case of a failure of the primary
server, can be used as a new primary server. 

To setup the service, first follow the general instructions on our
:doc:`index` page.

- Give your service a name and optionally a description.

- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you
  want to provision in. We recommend the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days you
  want your history stored.

- Check **Database dump** checkbox if you wan periodic dumping of data to the filesystem
  of the instance. This is good in conjunction with backup as it will guarantee the database
  integrity in case of a need to restore. This is recommended.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.

- Select disk-type. See the :doc:`/storage/storage-types` article for more information.

- Select your :doc:`SSH-key </compute/ssh-keys>`. 

- Under **Local network**, select the :doc:`network </networking/router/private-subnet/index>`
  on which you want to run the service.

- Check the **Replication** checkbox if you want to have a auxiliary instance
  setup (see above).

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
