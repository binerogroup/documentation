======================
Advanced configuration
======================

While the VPN service sets up a template configuration of a site-to-site VPN with
verified defaults, should you for example require more IPsec flows (more subnets)
or changing settings, you will need to use the administration interface for the VPN
itself.

When provisioning the VPN, you will get output. The ``mgmt_url`` output will be the
URL that you us for managing the VPN service. Enter it into a browser. 

.. note::

   Remember that only the IP (range) that you added in **Admin IP ranges** when setting
   up the VPN can login.

   You can update that in the :doc:`security group </networking/security-groups/index>`
   named ``IPSec-<name>-<random string>_management``, if your public IP address has
   changed, you may need to edit the security group.

You would also have gotten an ``admin_password`` output, which is a generated password for
your instance. This, combined with the username `´admin`` will give you access to the portal.

Security recommendations 
------------------------ 

While the admin password is uniquely generated and secure it **is** saved as part of the
output in the platform in plain text (a user with access to the platform can read it).

While only users with access to the platform could read it and it can likewise be reset
via access to the console of the instance (which users with access to the platform has),
we still advice you to set your own password.

To do this, follow these instructions:

- Login to the admin UI according to above.

- Press **System** in the main menu.

- Press **User manager** in the sub menu.

- Edit the ``admin`` user by pressing the small pencil icon.

- Enter the new password in both password fields.

- Press **Save**

.. note::

   Should you loose your password, it can be reset via :doc:`console output </compute/console>`
   on the instance.

While the PSK (Pre-Shared Key) is uniquely generated, it **is** saved as part of the output in the platform
in plain text (a user with access to the platform can read it).

The IPsec service is using a firewall (other than traffic from the remote gateway) to secure the service.

You might still want to consider switching this from the standard output to your own string. If so, remember
that the PSK need to be identical on both sides of the tunnel.

If you want to change the PSK:

- Login to the admin UI according to above.

- Press **VPN** in the main menu.

- Press **IPsec** in the sub menu.

- Press the small pen icon on the only row under
  the tunnels (default) tab.

- Scroll down to ``pre shared key`` and input an
  equally long and complex string.

- Press **Save**

.. note::

   Remember to also update the PSK on the remote system or the tunnel will not work.

Changing IPsec configuration
----------------------------

While this guide does not exhaustively cover all the features of the VPN service (more information
available `here <https://www.pfsense.org/get-involved/>`__), the most common task you might face with
the site-to-site appliance might be to change the IPsec configuration. Its located under the main
menu **VPN** and then **IPsec**.

The IPsec configuration consists of two phases, phase 1 and phase 2. In phase 1 (also called quick
mode) the you configure settings for negotiating cryptographic parameters.

You can press the small pencil (edit) next to the only row available (in a default installation) to
edit it. 

If you want to edit phase 2 (also known as main mode), you can press **Show phase 2 entries** and then
press the small pencil next to each line. 

To add another flow (another subnet sent across the tunnel), you need to add an extra phase 2 row. The
simplest way to do so is to clone the current row by pressing the small *copy* button next to the
pencil. Then change the relevant information.

..  seealso::

    - :doc:`index`
    - :doc:`configure-remote`
