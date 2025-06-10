==========
PostgreSQL
==========

`PostgreSQL <https://www.postgresql.org>`__ is a popular open-source relational database. 

Binero cloud enables you to provision PostgreSQL as a standalone installation or with
replication. If you select with replication, a auxiliary instance will be setup that
will copy all writes.

This server can be used for database reads (to alleviate load on the master server) and
in case of a failure of the primary server, can be used as a new primary server. 

- Give your service a name and optionally a description.

- Select your :doc:`SSH-key </compute/ssh-keys>`.

- Under **Secondary node availability zone** dropdown, you are able to select which availability
  zone to place the slave node in (if you choose to replicate). You can choose to use the same
  zone as the primary node or you can select another zone if you want to build a geographically
  distributed application. 

- Under **Alternate network**, you select the :doc:`network </networking/network/index>`
  that the auxiliary server should connected to.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.

- Select the volume size for the instance. The volume can be extended later, see the
  :doc:`/storage/persistent-block-storage/extend-volume` article.

- Under **Primary node availability zone**, select the availability zone to run your primary instance in. 

- Under **Primary network**, you select the :doc:`network </networking/network/index>` that
  the primary server should connected to.

- Under **Secondary nodes**, you select the amount of auxiliary servers you want. If you select zero, no
  replication will be done.

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
