============================
Managing users of client VPN
============================
You are able to use various authentication mechanisms with the client VPN service. It supports both LDAP and Radius (which in turn will support lots of other mechanisms as well as 2FA, etc). The scope of this support article will however only include local users. 

Add a user
----------
To add a user, using the VPN WebGUI, follow these steps:

- :doc:`Login <initial-configuration>` to the VPN management interface.
- Press "System" and then "User manager" in the main menu.
- Press the "+Add" button. 
- Enter a username (firstname.lastname is common).
- Enter a full name. 
- Enter a password and verify it. 
- Check the "Click to create a user certificate" checkbox.
- Copy the username to the "descriptive name" field under "create certificate for user".
- Press "save".

Remove a user
-------------
To remove a user, using the VPN WebGUI, follow these steps:

- :doc:`Login <initial-configuration>` to the VPN management interface.
- Press "System" and then "User manager" in the main menu.
- Mark the checkbox infront of the user you want to remove.
- Press "Delete" button on the bottom. 

.. Note:: 
	A deleted user will not immediately be de-authenticated from the VPN. If that is needed for any reason, do so by pressing "Status" and then "OpenVPN" in the main menu, and then pressing the small red X next to the user. 