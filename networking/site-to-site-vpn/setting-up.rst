===========================
Setting up site-to-site VPN
===========================

We recommend that you first read through our :doc:`prerequisites` guide. Follow
these steps to setup site-to-site VPN by using the cloud management portal:

- Press **VPN** and then **IPsec** in the sidebar menu.

- Click the **+ (plus)** symbol in the lower right corner.

- Enter the required information:

  - ``Name``: This is a friendly name used to distinguish the resources
    created by this template.

  - ``Admin SSH key pair``: Your SSH key pair used to access the pfSense
    instance by SSH.

  - ``Admin IP ranges``: IP ranges in :doc:`CIDR notation </networking/subnet/subnet-format>`
    that's allowed to access the pfSense instances WebUI and SSH server through the router.

    - This would be your office public IP address followed by ``/32`` (for example ``8.8.8.8/32``)
      in which case traffic from ``8.8.8.8`` would be able to reach management. If you prefer open access to the VPN
      server, you can enter ``0.0.0.0/0`` here (not recommended) or leave the standard ``127.0.0.1/32`` which will
      not allow access other than from inside the cloud (for example via the client VPN). You can change this later
      by updating the security group named ``IPSec-<name>-<random string>_management``.

  - ``Availability zone``: This needs to be the same availability zone that's used for the
    network that you intend to use.

  - ``pfSense instance flavor``: The instance flavor used for the pfSense instance. The default
    ``gp.1x2`` should be enough for most use cases.

  - ``Private network``: The network that's exposed through IPsec.

  - ``IPSec pre-shared key``: If you want to use a specific pre-shared key you may enter that
    here. If left at default, a random key will be generated for you.

  - ``IPSec peer IP``: This should contain the public gateway address for the remote IPsec
    endpoint. It should not be a DNS name but an IP-address.

  - ``IPSec remote network``: This should contain the network address (in CIDR notation) for
    the tunneled remote network.

- Press **Create**. VPN creation takes considerably longer than setting up a standard
  instance. This is due to the (comparably) long first time bootstrap of the VPN instance
  when generating ciphers and so on.

- Post installation tasks:

  - In the output of the stack, save the output for the ``mgmt_url`` parameter, along with the
    ``admin password`` (the username is always ``admin``). You will need these when doing extra
    configuration.

  - We recommend logging into the above URL and changing the password and pre-shared key, see
    :doc:`advanced-configuration` for more information on this.

  - After the service creation is complete you will need to :doc:`add routes to the remote subnets <adding-routing-for-vpn>`
    to get traffic flowing over VPN.

  - Add the newly created security group ``IPSec-<name>-<random string>_access`` to all instances
    that should be accessible from the remote end of the IPSec tunnel.

  - Once you are ready, proceed to configure :doc:`the remote end <configure-remote>` of the tunnel.

.. note::

   Some steps included in the setup that might cause you to hit a predefined quota (for example if you
   cant create more security groups or floating IP addresses), :doc:`contact our support </general/getting-support>`
   to raise the :doc:`quota </general/quotas>` on your account.

   If the installation fails, you are able to get the reason by clicking the service and checking error messages. 

..  seealso::

    - :doc:`index`
    - :doc:`prerequisites`
    - :doc:`configure-remote`
    - :doc:`advanced-configuration`
