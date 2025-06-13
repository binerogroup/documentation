=======
Console
=======

You are able to open the console of your instances using the instance console in
either the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`
or :doc:`OpenStack Horizon </getting-started/managing-your-cloud/openstack-horizon>`.

This is useful if you need to debug or troubleshoot your instance if it is unreachable.

.. note::

   Since you cannot use SSH-keys to login to a console but need to have a password, if you
   have not set a password (but trusted in the keys from provisioning), you will have to reset
   the root or administrator password.

   How to do this will vary by operating system but for the majority of Linux distributions, booting
   into single user mode will enable a password-less login which can be used to reset the password
   for the root user.

Cloud management portal console
-------------------------------

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance you want to view console output for.

- Press the console icon (looks like ``< >``) in the top right.

- A new window will appear showing the console. If the image is blank, this might be because the screen
  is in power save mode (OS setting). Press the mouse cursor on the screen and press any key to wake it
  up.

OpenStack Horizon console
-------------------------

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the instance you want
  to view console for, press **Console**.

- A new window will appear showing the console. If the image is blank, this might be because the screen
  is in power save mode (OS setting). Press the mouse cursor on the screen and press any key to wake it
  up.

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
