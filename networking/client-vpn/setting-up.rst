=====================
Setting up client VPN
=====================
VPN can only be provisioned from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`. If you normally work via either OpenStack Horizon or the OpenStack API, its possible to execute a :doc:`HEAT template manually </orchestration/index>` but we recommend the cloud management portal. Keep in mind (if you don't normally use it) that there may be discrepancies (for instance on SSH keys and logins) between it and the other management options. Please see :doc:`/getting-started/managing-your-cloud/index` for more information.

Follow these steps to setup client VPN using the cloud management portal:

- Press "VPN" and then "OpenVPN" in the sidebar menu.
- Click the "+" symbol in the lower right corner.
- Give your VPN service a name and optionally a description.
- Select your :doc:`SSH-keys </compute/ssh-keys>`.
- Under "Admin ip ranges", enter the IP-ranges (can be comma delimited or a single range) that should be able to do initial VPN configuration (see below). This should be one ore more subnets in :doc:`CIDR notation <../router/private-subnet/subnet-format>`. We recommend your current public IP-address. If you opt to use a single IP, it should then be suffixed by "/32", which indicate a single address.
- Under "private network", select the :doc:`private subnet <../router/private-subnet/index>` that you want to access. This is also the network to which the VPN instance will be connected. If you want to reach several networks, you will be able to :doc:`add more networks <networks>` later on. The network needs to be located behind, and connected to, a router as the instance will get a :doc:`floating ip <../floating-ips>` assigned. 
- Under "pfSense instance flavor", select the compute flavor you want for your VPN. We recommend the default gp.1x2 for implementations up to 10 users for management use. For additional users, consider adding an additional core per 10 extra users. For performance oriented users, we recommend a hp.4x6 instance.
- If you want backup, press the checkbox and enter the amount of days.
- Press "Create". VPN creation takes considerably longer than setting up a standard instance. This is due to the (comparably) long first time bootstrap of the VPN instance when generating ciphers, etc.
- You are now ready to proceed to do the :doc:`initial configuration <initial-configuration>` of the service.

.. Note::
	The "admin ip range" value will setup a :doc:`security group <../router/security-groups/index>` that will allow access to the new instance for initial web-management (for instance downloading the VPN config). Once this is done, further management can be accomplished by first logging into the VPN. The security group can be altered from the various portals in the event you would originate from another IP in the future and for some reason cannot start the tunnel before login into the VPN interface. Note that this should be an IP (or network) in CIDR notation.

.. Note::
	There are some steps included in the setup that may hit a pre-defined quota (for instance if you cant create more security groups or floating ips), these can then be raised by the support team. If the installation fails, you are able to get the reason by clicking the service and checking error messages. 
