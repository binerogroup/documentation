========================
Logging in to client VPN
========================

To use your client VPN you will need a client software running on your computer.

Which software will vary based on what operating system your computer is running as
well as your preferences.

Below we will walk-through ways to get up and running, the general idea is to import
a client configuration file that the VPN server provides into the client VPN application.

The client configuration will contain the necessary keys, certificates and settings to
be able to authenticate and start the tunnel

.. important::

   The exported client configuration file contains sensitive information that an attacker
   can use to gain access to your VPN.

   You should treat it as sensitive information according to your policy. We recommend
   that you do **not** email the configuration to users but rather put it onto a flash
   drive or using a secure file transfer service to distribute it.

Downloading configuration
-------------------------

To download configurations from the VPN server.

- :doc:`Login <initial-configuration>` to the WebUI of the client VPN. If you don't already
  have a VPN account that works, you will need to login from the admin IP address used in
  the initial configuration. See :doc:`setting-up` for more information.

- Press **VPN** and then **OpenVPN** in the main menu.

- Press the **Client Export** tab.

- Scroll down to **OpenVPN clients**.

- Download the appropriate client or configuration (see below). If you run the VPN with user
  based authentication, download the configuration for the proper user - they will contain
  different keys and certificates. You are able to use the search feature directly above to
  search for a specific user.

Once you have a client configuration setup, you should be able to login to your VPN and
:doc:`reach your cloud network <networks>` directly from your client computer.

Windows based clients
---------------------

The VPN server will provide a pre-configured installer for Windows computers.

This installer will install a client software with an already included configuration setup
which makes it more pleasant for a user to get the VPN connection up and running.

To download this configuration, follow the instructions above and select the appropriate
(most likely 64 bit) version under **Current Windows Installer** section.

Assuming you already have a OpenVPN client installed and prefer to use that software, instead
download the configuration named **Most clients** under **Inline configurations** section.

You can then import it into the client software by double clicking the file or right clicking
it and selecting **import**.

If neither of those works, see relevant documentation on your specific client for how to import
configurations into the client.

Mac clients
-----------

Clients available for Mac that should work well, one client is `OpenVPN Connect <https://openvpn.net/client/>`__
and another client is `Tunnelblick <https://tunnelblick.net>`__.

Other clients
-------------

Generally, the most clients configuration will work on most clients. To download it, follow the
instructions under the **Downloading configuration** and select it, after which you should
be able to import it by following the documentation from your software provider.
