======================
VPN server maintenance
======================

To remain a secure solution and to keep working as intended, we recommend
maintaining and updating the VPN server.

Below we show some important tasks and how to manage them.

Updating the VPN server
-----------------------

The VPN server software is `pfSense <https://www.pfsense.org>`__ which in turn
is running on the FreeBSD operating system.

pfSense will provide updates that will include security fixes and new functionality.

We strongly recommend updating the VPN server once new releases are available to keep
it secure over time.

If you do not update your installation you risk falling to far behind to be able to
update and be vulnerable to security vulnerabilities.

To update the VPN server by using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **System** and then **Update** in the main menu.

- Ensure that the Branch is **Latest stable version**.

- Wait for the Status field to say that the server is up to date or not.

- If the server is not up to date, follow the instructions to update. 

.. note::

   The server will reboot after the update. Its advisable to first :doc:`snapshot </storage/snapshots/index>` the
   server in case the update should fail or something should not work afterwards. 

Re-issue certificates
---------------------

When you created the VPN server it generated new certificates but because some clients
doesn't allow certificates valid for longer than a year, you need to reissue these on
a yearly basis.

To re-issue certificates by using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **System** and then **Cert manager** in the main menu. 

- Press the **Certificates** tab under the main heading (the default menu is the CA
  menu, do **not** re-issue the CA).

- By default there are three certificates installed on the system; **OpenVPN Server**,
  **OpenVPN User** and ``webConfigurator default``. Aside from this, if you've added
  users these will also be in the list. You need to reissue the first two certificates.

- Press the small round arrow (re-issue / renew) to the right of each (one at the time)
  of the OpenVPN server and OpenVPN User.

- Press the **Renew/Reissue** button.

- Verify the **Valid until** date.

.. important::

   The **OpenVPN User** certificate is for the :doc:`default mode <user-modes>` user
   setup. When renewing this certificate, new :doc:`client configurations <logging-in>`
   will need to be setup in the VPN users client software.

   The **OpenVPN Server** certificate will not require new client configurations but
   renewing it will **restart the service** which will disconnect active clients. 

.. note::

   User certificates is valid for 10 years. When they expire, you will also need to
   renew them. This will also require new VPN configuration for the users who use the
   certificates.
