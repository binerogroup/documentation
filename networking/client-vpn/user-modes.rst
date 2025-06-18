==========
User modes
==========

While there are many modes of operation possible on the VPN, there are two main modes that
we recommend, the difference being wether to require individual user authentication.

Both modes will provide :doc:`strong encryption <security-settings>` but aims to provide
solutions for different use-cases. 

Default configuration
---------------------

In its default configuration, the VPN service does not rely on user accounts but rather a
certificate and a TLS key shared among its clients.

This is a good starting point as you can share the VPN configuration among users and is identical
for all users, you don't need any user management and getting one or more users enrolled to the
VPN is as fast as importing the configuration into the client and connecting.

Once connected, it will provide a secure communication to the inside network where authentication
would (most likely) still enforce a username and password (or key).

Having a VPN greatly simplifies :doc:`connecting to your instances <../reaching-your-instances>`
and communication is secure.

A potential downside to this setup is that its impossible to deactivate a user from the VPN that
already have the configuration without changing the certificates or the TLS key for all users.

In case the internal authentication protocols (once connected to the VPN) are not considered a
strong enough security level, this then becomes a cumbersome process when for example an employee
leaves or a consultant stops working on a project where, had there been user authentication, you would
normally remove the user and disconnect any existing sessions.

.. note::

    Remember that it's best practice to renew certificates and keys at a regular interval which
    further makes this a cumbersome solution.

Individual users
----------------

An alternative way to authenticate users is by setting up individual users with passwords and unique
certificates to increase the layers of security.

This allows you to remove a user should the need arise and there is then no need to replace the
certificates and keys for all users. 

To change the operating mode to include user authentication, using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **VPN** and then **OpenVPN** in the main menu.

- Click the small pen symbol (edit server) on the only row (assuming you have not added more servers)
  under **OpenVPN servers**. 

- Under section **Mode configuration** (close to the top), change **Server mode**
  to ``Remote Access ( SSL/TLS + User Auth )``

- Scroll down to **Duplicate Connection** under section **Tunnel settings** and disable it (by removing the
  checkbox) if you only want to allow one simultaneous connection per user. This will enforce that a single
  user is not sharing their login (willingly or otherwise) as just a single login at the time per user account
  is possible.

- Press **Save** at the bottom.

You are now ready to :doc:`create some users <managing-users>` to login to your VPN. 

.. important::

   If you've changed from using the default mode, you will need to ensure that you
   also :doc:`update your client configuration <logging-in>` before logging in again.

   The configuration will be different on the client side with new per user certificates.

.. note::

   When removing a user, the user will not disconnect or logout automatically but rather
   cannot log back in once disconnected. It's possible to manually disconnect a user via
   the web interface under **Status** and then **OpenVPN**.
