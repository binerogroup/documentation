===============
MySQL / MariaDB
===============

`MySQL <https://www.mysql.com>`__ is a popular open source relational
database. `MariaDB <https://mariadb.org>`__ is an alternative database
that forked from MySQL that is similar but has diverged a
bit through the years.

Binero cloud enables you to provision either MySQL or MariaDB (or both)
as a standalone installation or with replication.

If you select with replication, an auxiliary instance will be setup that
will copy all writes. You can use this server for database reads to reduce
the load on the primary instance and in case of an outage of the primary
server, use it as the new primary server. 

To setup the service, first follow the general instructions on our
:doc:`index` page.

- Give your service a name and optionally a description.

- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you
  want to provision in. We recommend the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days you
  want your history stored.

- Check **Database dump** checkbox if you want periodic dumping of data to the file system
  of the instance. This is good in conjunction with backup as it will guarantee the database
  integrity in case of a need to restore, we recommended that you enable this.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.

- Select disk-type. See the :doc:`/storage/storage-types` article for more information.

- Select your :doc:`SSH-key </compute/ssh-keys>`. 

- Under **Local network**, select the :doc:`network </networking/network/index>`
  on which you want to run the service.

- Check the **Replication** checkbox if you want to have a auxiliary instance
  setup (see above).

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
