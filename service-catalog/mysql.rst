===============
MySQL / MariaDB
===============

`MySQL <https://www.mysql.com>`__ is a very popular open source database. `MariaDB <https://mariadb.org>`__ is an alternate version of MySQL with some key differences (exactly what is outside the scope of this article but there is plentiful information available on this subject on the internet). Generally, the feature set is somewhat similar. 

Binero cloud enables you to provision either MySQL or MariaDB (or both) as a standalone installation or with replication. If you select with replication, a slave instance will be setup that will copy all writes. This server can be used for database reads (to alleviate load on the master server) and in the event of a failure of the master server, can be used as a new master server. 

To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you want to provision in. We recommend *europe-se-1a* if you are unsure. 
- If you want backup, check the "backup" checkbox and select an amount of days you would like your history stored.
- Check "database dump" checkbox if you wan periodic dumping of data to the filesystem of the instance. This is good in conjunction with backup as it will guarantee the database integrity in the event of a need to restore. We recommend this. 
- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select disk-type. See the :doc:`/storage/storage-types` article for more information.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "local network", select the :doc:`network </networking/router/private-subnet/index>` on which you want to run the service.
- Check the "replication" checkbox if you want to have a slave server setup (see above).
- Press "create". You will get further details on how to connect to the service. 

..  seealso::
  - :doc:`index`
