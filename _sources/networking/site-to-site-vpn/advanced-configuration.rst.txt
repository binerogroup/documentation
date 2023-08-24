======================
Advanced configuration
======================
While the VPN service sets up a template configuration of a site-to-site VPN with sane defaults, should you for instance require more IPSec flows (more subnets) or changing settings, you will need to use the administration interface for the VPN itself.

When provisioning the VPN, you will get output. The "mgmt_url" output will be the URL that you us for managing the VPN service. Enter it into a browser. 

.. Note::
	Keep in mind that only the IP (range) that you added in "Admin IP ranges" when setting up the VPN will be allowed to login. This is managed via a :doc:`security group </networking/virtual-router/security-groups/index>` which is called ``IPSec-<name>-<random string>_management``, if you've not retained the same IP, you may need to edit the security group.

You would also have gotten an "admin_password" output, which is a generated password for your instance. This, combined with the username "admin" will give you access to the portal.

Security recommendations 
------------------------ 
While the admin password is uniquely generated and secure it **is** saved as part of the output in the platform in clear text (a user with access to the platform can read it). While only users with access to the platform could read it and it can likewise be reset via access to the console of the instance (which users with access to the platform, has), we still advice you to set your own password. To do this, follow these instructions:

- Login to the admin UI as per above.
- Press "System" in the main menu.
- Press "user manager" in the sub menu.
- Edit the "admin" user by pressing the small "pen" icon.
- Enter the new password in both password fields.
- press "save".

.. Note::
        Should you loose your password, it can be reset via :doc:`console output </compute/console>` on the instance.

While the PSK (Pre Shared Key) is uniquely generated, it **is** saved as part of the output in the platform in clear text (a user with access to the platform can read it). The IPSec service is firewalled (other than traffic from the remote gateway) so the actual service is protected. You might however still want to consider switching this from the standard output to your own string. If so, please keep in mind, the PSK need to be identical on both sides of the tunnel. To do this, follow these steps:

- Login to the admin UI as per above.
- Press "VPN" in the main menu.
- Press "IPsec" in the submenu.
- Press the small pen icon on the only row under the "tunnels" (default) tab.
- Scroll down to "pre shared key" and input an equally long and complex string.
- Press "save".

.. Note::
	Don't forget to also update the remove system as otherwise the tunnel will not work.

Changing IPSec configuration
----------------------------
While this guide does not exhaustively cover all the features of the VPN service (more information available `here <https://www.pfsense.org/get-involved/>`__), the most common task you might face with the site-to-site appliance might be to change the IPSec configuration. Its located under the main menu "VPN" and then "IPsec".

The IPSec configuration is made up of two phases, phase 1 and phase 2. In phase 1 (also called quick mode) the settings for negotiating crypto parameters are set. You can press the small pencil  (edit) next to the only row available (in a default installation) to edit it. 

If you want to edit phase 2 (also known as main mode), you can press "show phase 2 entries" and then press the small pencil next to each line. 

In order to add another flow (another subnet that is sent across the tunnel), an additional phase 2 row should be added. The simplest way to do so is to clone the current row by pressing the small "copy" button next to the pencil. Then change the relevant information.

..  seealso::
    - :doc:`index`
    - :doc:`configure-remote`
