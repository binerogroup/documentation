=====================
Setting up client VPN
=====================

You can only provision VPN from the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

Follow these steps to setup client VPN by using the cloud management portal:

- Press **VPN** and then **OpenVPN** in the sidebar menu.

- Click the **+** (plus) symbol in the lower right corner.

- Give your VPN service a name and optionally a description.

- Select your :doc:`SSH-keys </compute/ssh-keys>`.

- Under **Admin IP ranges**, enter the IP ranges (comma-delimited or a single
  range) that should be able to do initial VPN configuration, see below.

  - This should be one ore more subnets in :doc:`CIDR notation <../subnet/subnet-format>`. We
    recommend your current public IP address. If you use a single IP address, it needs to use
    a  ``/32`` CIDR suffix.

- Under **Private network**, select the :doc:`subnet <../subnet/index>` that you want to access.

  - This is also the network added to the VPN instance. If you want to reach networks, you can
    :doc:`add more networks <networks>` later on. The network you choose needs to have a router
    connected as the instance will use a :doc:`floating IP <../floating-ips>`.

- Under **pfSense instance flavor**, select the compute flavor you want for your VPN. We recommend
  the default ``gp.1x2`` for implementations up to 10 users for management use. For more users,
  consider adding an extra core per 10 users. For performance oriented users, we recommend the
  ``hp.4x6`` flavor.

- If you want backup, press the checkbox and enter the amount of days.

- Press **Create**. VPN creation takes considerably longer than setting up a standard instance. This
  is due to the (comparably) long first time bootstrap of the VPN instance when generating ciphers
  and so on.

- You are now ready to proceed to do the :doc:`initial configuration <initial-configuration>` of the
  service.

.. note::

   The **admin IP range** value will setup a :doc:`security group <../security-groups/index>` that will
   allow access to the new instance for initial web-management (for example downloading the VPN client
   configuration).

   Once done, you can further manage changes after first logging into the VPN.

   You can alter the security group from the portals in case you would originate from another IP in the
   future and for some reason cannot start the tunnel before login into the VPN interface. Note that this
   should be an IP (or network) in CIDR notation.

.. note::

   Some steps included in the setup might hit a predefined quota (for example if you cant create more
   security groups or floating IP addresses), :doc:`contact our support </general/getting-support>` to
   get your quota increased.

   If the installation fails, you are able to get the reason by clicking the service and checking
   error messages. 
