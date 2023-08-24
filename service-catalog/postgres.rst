========
Postgres
========
`PostgreSQL <https://www.postgresql.org>`__ is a very popular OpenSource relational database. 

Binero.Cloud enables you to provision PostgreSQL as a standalone installation or with replication. If you select with replication, a slave instance will be setup that will copy all writes. This server can be used for database reads (to alleviate load on the master server) and in the event of a failure of the master server, can be used as a new master server. 

- Give your service a name and optionally a description.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "secondary node availability zone" dropdown, you are able to select which availability zone to place the slave node in (if you choose to replicate). You can choose to use the same zone as the master node or you can selet another zone if you want to build a geographically diverse application. 
- Under "alternate network", you select the :doc:`network </networking/virtual-router/private-subnet/index>` that the slave server should connected to.
- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select the volume size for the instance. Its growable later on as per the :doc:`/storage/persistent-block-storage/extend-volume` article.
- Under "primary node availability zone", select the availability zone to run your primary (master) instance in. 
- Under "primary network", you select the :doc:`network </networking/virtual-router/private-subnet/index>` that the master server should connected to.
- Under "secondary nodes", you select the amount of slave servers you want. If you select "0", no replication will be done.
- Press "create". You will get further details on how to connect to the service. 

..  seealso::
  - :doc:`index`
