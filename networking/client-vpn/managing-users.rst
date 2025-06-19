============================
Managing users of client VPN
============================

You are able to use different authentication mechanisms with the client VPN service.

It supports both LDAP and Radius (which in turn will support many other mechanisms
such as 2FA and so on). The scope of this support article will only include local
users. 

Add a user
----------

To add a user, using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **System** and then **User manager** in the main menu.

- Press the **+Add** button. 

- Enter a username (firstname.lastname is common).

- Enter a full name. 

- Enter a password and verify it. 

- Check the **Click to create a user certificate** checkbox.

- Copy the username to the **descriptive name** field under **create certificate
  for user**.

- Press **Save**.

Remove a user
-------------

To remove a user, using the VPN WebGUI.

- :doc:`Login <initial-configuration>` to the VPN management interface.

- Press **System** and then **User manager** in the main menu.

- Mark the checkbox in front of the user you want to remove.

- Press **Delete** button on the bottom.

.. note::

   A deleted user will not disconnect immediately from the VPN. If that's needed for
   any reason, do so by pressing **Status** and then **OpenVPN** in the main menu, and
   then pressing the cross (``x``) next to the user. 
