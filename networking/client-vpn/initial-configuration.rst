===================================
Initial configuration of client VPN
===================================

When the VPN service stack says completed (``CREATE COMPLETE``), open its
info view by clicking the service card or list entry.

You will see the URL to the VPN WebUI presented. Copy the value from the
``mgmt_url`` output and open the URL in your web browser.

As the WebUI uses a self-signed certificate by default, your browser will
display a warning before opening the site. The default username and password
for the WebUI is ``admin`` and ``pfsense``.

.. note::

   You can only access the WebUI from the IP address or network that configured
   in **Admin IP ranges** during the :doc:`setup of the VPN <setting-up>`.

   If you cannot reach the WebUI, its likely that you are connecting from another IP
   address than the one you choose during setup.

   Proceed to edit the :doc:`security group <../security-groups/index>` on the VPN
   :doc:`instance </compute/index>` so that it includes your current IP address (or
   **temporarily** remove the security group, making sure to re-add it once you're
   done and have downloaded the client configuration).

Once logged in, read and accept pfSense EULA. After this, your first task should be
to change the admin accounts password.

There should be a warning on the top of the screen with a link to change the
password. If not, its available under the menu **System** then **User manager**,
press the small pen icon next to the admin user. 

.. important::

   Not changing the default user password is a **major** security risk as this login
   combination is widely known as default credentials.

Your next task is to choose a user mode. The default mode is using a certificate
and TLS key to secure traffic with no user authentication.

An alternative mode (also available) will allow for individual users to authenticate. We
strongly recommend reading the :doc:`user-modes` article before proceeding as changing the
mode later will require new client configurations for the VPN users. 

If you want to continue with the default user mode and login to your new VPN, see the
:doc:`logging-in` article.
