===========================================
Load Balanced Linux Apache MySQL PHP (LAMP)
===========================================

Using the popular and powerful open source tools `Linux <https://www.linux.org>`__,
`Apache <https://httpd.apache.org>`__, MySQL (`MariaDB <https://mariadb.org>`__)
and `PHP <https://www.php.net>`__, you can provision a complete production suite.

Popular tools such as WordPress or frameworks like CakePHP and Laravel run on LAMP
installations.

If you want to be able to scale your LAMP installation beyond a single server, using
this service to setup a load balanced system will be a good way to go about it.

The following will be setup for you: 

- A :doc:`/networking/load-balancer/index`

- A database server instance running MariaDB.

- A NFS service instance for shared file storage.

- Web servers (you can choose how many) that gets added as backends behind the load balancer
  and accept the web requests, running Apache and PHP and mounts the shared file storage.

To setup the service, first follow the general instructions on our :doc:`index` page.

- Give your service a name and optionally a description.

- If you want backup, check the **Backup** checkbox and select an amount of days you
  want your history stored.

- Under **db_flavor**, select your *database instances* :doc:`flavor </compute/flavors>`.
  We recommend sticking with the default.

- Select disk-type for the *database instance*. See the :doc:`/storage/storage-types`
  article for more information. We recommend SSD.

- Select your :doc:`SSH-key </compute/ssh-keys>`.

- Under **local network**, select the :doc:`network </networking/network/index>`
  on that you want to use.

- Under **nfs_flavor**, select your *NFS instances* :doc:`flavor </compute/flavors>`.
  We recommend sticking with the default.

- Under **Subnet**, select the :doc:`network </networking/subnet/index>`
  on which you want to run the service.

- Under **Web count**, select the amount of load balanced web servers (instances
  running apache) you want. 

- Under **web_flavor**, select your **web/apache instances** :doc:`flavor </compute/flavors>`.
  We recommend sticking with the default.

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
