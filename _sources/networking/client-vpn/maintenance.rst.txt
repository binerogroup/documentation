======================
VPN server maintenance
======================

In order to remain a secure solution as well as to keep working as
intended, we recommend maintaining the VPN server from time to time.

Below we show some important tasks and how to manage them.

Updating the VPN server
-----------------------

The VPN server software is based on `pfSense <https://www.pfsense.org>`__ which
in turn is running on FreeBSD operating system.

pfSense will provide updates that will include security fixes and additional functionality.

We strongly recommend updating the VPN server once new releases are available to keep it
secure over time.

If your installation is left un-updated your risk falling to far behind to be able
to update and be vulnerable to security exploits.

To update the VPN server using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press "System" and then "Update" in the main menu.

- Ensure that the Branch is "Latest stable version".

- Wait for the Status to indicate if the server is up to date or not. 

- If the server is not up to date, follow the instructions to update. 

.. note::

   The server will reboot after the update. Its advisable to first :doc:`snapshot </storage/snapshots/index>` the
   server in case the update should fail or something should not work afterwards. 

Re-issue certificates
---------------------

The VPN server will be created with newly issued certificates but because some clients does not
allow certificates which are valid for longer than a year, these certificates will need to be
reissued on a yearly basis.

To re-issue certificates using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press "System" and then "Cert. manager" in the main menu. 

- Press the "Certificates" tab under the main heading (the default menu is the CA menu - do *not* re-issue the CA).

- By default there are 3 certificates installed on the system; "OpenVPN Server", "OpenVPN User",
  ``webConfigurator default``. Aside from this, if you've added users these will also be in the list. The
  first two certificates will need to be reissued.

- Press the small "round arrow" (re-issue / renew) to the right of each (one at the time) of the OpenVPN server and OpenVPN User.

- Press the "Renew/Reissue" button.

- Note that the "valid until" date is renewed.

.. important::

   The "OpenVPN User" certificate is used when using the :doc:`default mode <user-modes>` user setup. When renewing
   this certificate, new :doc:`client configurations <logging-in>` will need to be setup in the VPN users client software.

   The "OpenVPN Server" certificate will not require new client configurations but renewing it will **restart the service**
   which will disconnect active clients. 

.. note::

   User certificates will have a 10 year life-span. In case they expire, they will also need to be renewed. This will also
   require new VPN configuration for the users who use their certificates.
