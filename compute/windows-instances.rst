=================
Windows instances
=================

Windows runs great on Binero cloud! Some considerations when using a Windows
based :doc:`image </images/index>` on the platform. We outline them below. 

- As Windows generally heavy on memory usage, we recommend using a
  :doc:`high memory flavor version 1 (hm) <flavors>` to run your windows
  instance on.

- While Microsoft says Windows server will run on the smallest instance, for a
  good user experience we recommend at least 3 cores and 8 GB of memory.

- You can expect reasonable performance at 4 cores and 12 to 16 GB of memory. 

- As Windows Server is not open source, there is a license cost associated with
  provisioning Windows Server. See our `price list <https://binero.com/en/it-services/cloud-services/public-cloud/price/>`_
  for more information.

- While Microsoft says 32 GB is the lower limit of disk required to run Windows
  Server, we recommend using at least 64 GB. This does not include your actual
  use-case, but for the operating system itself. 

Supported flavors
-----------------

Only version 1 :doc:`flavors <flavors>` support Windows.

Provisioning
------------

Provisioning a Windows Server based instance works the same as in our
:doc:`launching an instance <launching-an-instance/index>` documentation with the
exception that Windows Server does not support SSH-keys for login.

Because of this, when you've provisioned your instance and the status becomes
``ACTIVE`` you need to set the password by using the console, see below.

Cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^

To set the initial password through the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance that you recently provisioned.

- In the top right corner, press **Console** (its the two angle brackets ``< >``).

- You will now get the visual screen output of the server. The image might be blank because
  the server puts it in power save mode when not used. Moving the cursor or pressing the
  screen to wake it up. 

- Press CTRL + ALT + DELETE

- Press (using the cursor) the **Sign in** button.

- You will get a prompt to select a password.

You are now able to login using your new password via an RDP client by using for example
a :doc:`floating IP </networking/floating-ips>`.

Don't forget that you might need to add a :doc:`security group </networking/security-groups/index>`
for RDP access.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

To set the initial password through
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the instance
  you want to resize, press **Console**

- You will now get the visual screen output of the server. The image might be blank
  because the server puts it in power save mode when not used. Moving the cursor or
  clicking on the screen will wake it up. 

- Press CTRL + ALT + DELETE

- Press (using the cursor) the **Sign in** button.

- You will get a prompt to select a password.

You are now able to login using your new password via an RDP client by using for example 
a :doc:`floating IP </networking/floating-ips>`.

Don't forget that you might need to add a :doc:`security group </networking/security-groups/index>`
for RDP access.

.. note::

   If you cannot see the sign-in button for any reason, restart the server.

Upgrading Windows VirtIO driver
-------------------------------

From time to time, the underlying infrastructure behaviour will change.

This could result in bad IO-performance and even IO-stalls on windows instances with
old versions of VirtIO drivers installed. Upgrading the VirtIO driver from time to
time is advisable.

To perform the upgrade, follow this below process.

.. important::

   Its advisable to backup (or at least :doc:`snapshot </storage/snapshots/create-snapshot>`)
   your volume before upgrading the VirtIO driver.

.. note::

   The process involves a reboot, we recommend that you proceed during a maintenance
   window if your instance is mission critical.

- Stop any application write IO towards the local disc. This means for example shutting down
  a database service. You do not need to quiesce all IO towards the disk.

- Download the most recent VirtIO ISO driver
  from `here <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/>`__.

- Mount the ISO in Windows.

- Run the ``virtio-win-gt-x64.msi`` installer with administrative privileges.

- Click through it.

- When installer completes successfully, reboot your server.

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
