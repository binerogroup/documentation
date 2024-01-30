========================
Logging in to client VPN
========================

To utilize your client VPN you will need a client software running on your computer. Which software will vary based on what operating system your computer is running as well as your preferences. Below we will demonstrate ways to get up and running but the general idea is to import a client configuration file that the VPN server provides into the client program. The client configuration will contain the necessary keys, certificates and settings to be able to authenticate and start the tunnel

.. important:: The client configuration export file contains secret information that could be used by an attacker to gain access to your VPN. It is to be treated as a password. We recommend not e-mailing the configuration to end users but rather put it onto a flash drive and handing it over or using a secure file transfer service to distribute it.

Downloading configuration
-------------------------

To download configurations from the VPN server, follow these steps:

- :doc:`Login <initial-configuration>` to the WebUI of the client VPN. If you dont already have a VPN account that works, this will have to be done from the IP address that was used for the initial configuration. See :doc:`setting-up` for more information.
- Press "VPN" and then "OpenVPN" in the main menu.
- Press the "Client Export" tab.
- Scroll down to "OpenVPN clients".
- Download the appropriate client or config (see below). If you run the VPN with user based authentication, download the config for the proper user - they will contain different keys and certificates. You are able to use the search feature directly above to search for a specific user.

Once you have a client configuration setup, you should be able to login to your VPN and :doc:`reach your cloud network <networks>` directly from your client computer.

Windows based clients
---------------------

The VPN server will provide a pre-configured installer for Windows computers. This installer will install a client software with an already included configuration setup which makes it very easy for an end-user to get a VPN connection up and running. To download this configuration, follow the instructions above and select the appropriate (most likely 64 bit) version under "Current Windows Installer" section.

Assuming you already have a OpenVPN client installed and prefer to use that software, instead download the configuration named "Most clients" under "Inline configurations" section. This can then be imported into the client software by (usually) double clicking the file or right clicking it and selecting "import". If neither of those works, please see relevant documentation on your specific client for how to import configurations into the client.

Mac OSX clients
---------------

We recommend the client `Viscosity <https://www.sparklabs.com/viscosity/>`_ which is a full featured OpenVPN client software at an affordable price. This client also has its own specific configuration bundle available from the server, making it very easy to configure. To download this bundle, follow above steps and press "Viscosity bundle" under section "Viscosity (Mac OS X and Windows)". Once you have the bundle, double clicking it will import it into Viscosity after which you can connect to the VPN.

There are numerous other clients available for Mac OSX that should work well with the "most clients" config download. One client that is known to work is `Tunnelblick <https://tunnelblick.net>`__, this is free to use and generally works well.

Other clients
-------------

Generally, the "most clients" config will work on most clients. To download it, follow the instructions under the "Downloading configuration" and select it, after which you should be able to import it by following the documentation from your software provider.

