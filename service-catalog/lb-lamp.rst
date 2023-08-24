===========================================
Load Balanced Linux Apache MySQL PHP (LAMP)
===========================================
Using the popular and powerful open source tools `Linux <https://www.linux.org>`__, `Apache <https://httpd.apache.org>`__, MySQL (`MariaDB <https://mariadb.org>`__ will be installed) and `PHP <https://www.php.net>`__, a complete production suite can be provisioned. Popular tools like Wordpress or frameworks like CakePHP or Laravel run on LAMP installations. 

If you want to be able to scale your LAMP installation beyond a single server, using this service to setup a load balanced system will be a very good way to go about it. The following will be setup for you: 

- A :doc:`load balancer </networking/load-balancing/index>`
- A database server instance running MariaDB.
- A NFS service instance for file storage that will be mounted on the web servers. 
- Webservers (how many you can choose) that will sit behind the load balancer and accept the web requests, running Apache and PHP.

To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- If you want backup, check the "backup" checkbox and select an amount of days you would like your history stored.
- Under "db_flavor", select your *database instances* :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select disk-type for the *database instance*. See the :doc:`/storage/storage-types` article for more information. We recommend SSD.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "local network", select the :doc:`network </networking/virtual-router/private-network/index>` on which the private subnet (see below) that you want to use is located.
- Under "nfs_flavor", select your *NFS instances* :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Under "subnet", select the :doc:`network </networking/virtual-router/private-subnet/index>` on which you want to run the service.
- Under "web count", select the amount of load balanced web servers (instances running apache) you want. 
- Under "web_flavor", select your **web/apache instances** :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Press "create". You will get further details on how to connect to the service. 

..  seealso::
  - :doc:`index`
