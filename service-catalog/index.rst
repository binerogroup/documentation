===============
Service catalog
===============

The service catalog is a repository of installable open source software as well as convenience
functions for automating more complex tasks in the platform.

Its only available in the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

The service catalog is available in the cloud management portal from the main menu under
**Service Catalog** and then either **Services** which will show you your provisioned services
and allow you to add new or **Service templates** which will show you available services.

Create service
--------------

To provision a new service using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Service Catalog** and then **Services** in the sidebar menu.

- Press the "+" icon in the bottom right corner.

- Select a service in the drop down. 

- Press **Next**

- For detailed information on each service, please see the articles for each service
  in the documentation.

Features
--------

Automated features simplify creating complex setups in the platform by using the service catalog to
automate them.

The services will be setup the same way as if they where manually setup but the process is faster
and requires less knowledge. The following services is available:

- :doc:`Private network <private-network>` will create a router and a private network setup
  behind it.

- :doc:`Schedule snapshot <schedule-snapshot>` will schedule taking a snapshot from a
  particular instance.

- :doc:`Schedule backup <schedule-backup>` will schedule taking a backup from a particular
  instance.

Applications
------------

Automated application installations are available to provide applications pre-installed on
an instance.

Aside from having the software installed, the software will also, when applicable, be configured
for you with sane defaults. The following applications is available:

- :doc:`PostgreSQL <postgresql>` will install a PostgreSQL instance with the option of
  adding replication.

- :doc:`MySQL or MariaDB <mysql>` will install a MySQL or MariaDB instance with the option
  of using replication.

- :doc:`Grafana <grafana>` will install a Grafana Dashboard.

- :doc:`GitLab <gitlab>` will install a GitLab repository with its dashboard.

- :doc:`File share <file-share>` will install a Linux VM with both NFS and SMB support for use
  as a file store backend in the platform.

- :doc:`LAMP <lamp>` will install a Linux Apache MySQL PHP stack on a single instance.

- :doc:`Load balanced LAMP <lb-lamp>` will install a load balanced, using the Binero cloud load balancer service,
  Linux Apache MySQL PHP stack using separate instances for each component.

- :doc:`OpenVPN <openvpn>` sets up VPN, see :doc:`/networking/client-vpn/index`.

- :doc:`Redis <redis>` will install a `Redis <https://redis.io>`__ in-memory data
  structure store.

- :doc:`Grafana <grafana>` will install a Grafana Dashboard.
 
.. toctree::
  :caption: Available services
  :maxdepth: 2

  file-share
  gitlab
  grafana
  lamp
  lb-lamp
  mysql
  openvpn
  postgresql
  private-network
  redis
  schedule-backup
  schedule-snapshot
