===================================
Initial configuration of client VPN
===================================
After the service stack has been created (and the stack status says: ``CREATE COMPLETE``), open its info view by clicking the service card or list entry. Here you will be presented with a URL to the VPN WebUI. Copy the value from the ``mgmt_url`` output and open the URL in your browser. As the WebUI uses a self-signed certificate by default, your browser will display a warning before opening the site. Default username/password for the WebUI is ``admin``/``pfsense``.

.. Note::
	The WebUI can only be accessed from the IP-address or network that was assigned in the "admin IP-ranges" during the :doc:`setup of the VPN <setting-up>`. If you cannot reach the WebUI, its likely that you are connecting from another IP than the one you choose during setup. Proceed to edit the :doc:`security group <../router/security-groups/index>` on the VPN :doc:`instance </compute/index>` so that it includes your current source IP (or *temporarily* remove the security group, making sure to re-add it once initial configuration is done and you've downloaded the client config).

Once logged in, read and accept pfsense EULA. After this, your first task should be to change the admin accounts password. There should be a warning on the top of the screen with a link to change the password. If not, its available under the menu "system" -> "user manager", press the small pen icon next to the admin user. 

.. Important::
	Not changing the default user password is a **major** security risk as this login combination is widely known as default credentials.

Your next task is to choose a user mode. The default mode (which will work out of the box) is using a certificate and TLS key to secure traffic with no user authentication. An alternative mode (also available) will allow for individual users to authenticate. We strongly recommend reading the :doc:`user-modes` article before proceeding as changing the mode down the line will require new client configs to be distributed to the end users. 

If you want to continue with the default user mode and login to your new VPN please see the :doc:`logging-in` article.
