=================
Windows instances
=================

Windows runs great on Binero cloud! There are some considerations when using a Windows based :doc:`image </images/index>` on the platform. We outline them below. 

- As Windows generally is quite RAM-hungry, we recommend using a :doc:`high memory flavor <flavors>` to run your windows instance on. 
- While Microsoft says Windows server will run on the smallest instance, for a good user experience we recommend a minimum of 3 cores and 8 GB of RAM. 
- A resonable performance could be expected at 4 cores and 12-16GBs of RAM. 
- As Windows Server is not OpenSource, there is a license cost associated with provisioning Windows Server. Please see our `pricelist <https://binero.com/public-cloud-platform/publikt-moln/pris/>`_ for more information.
- While Microsoft says 32GB is the minimum disk-space to run Windows Server, we recommend a disk-space of at least 64GB. This does not include your actual use-case, but for the OS itself. 

Provisioning
------------

Provisioning a Windows Server based instance works mostly the same as is described in our :doc:`launching an instance <launching-an-instance/index>` documentation with the exception that Windows Server does not support SSH-keys for login. Because of this, when you've provisioned your instance (and its reported as ACTIVE - that is it has started), you need to set the password using the console. Follow these steps: 

Cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^

To set the initial password through the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps:

- Press "Compute" and then "Instances" in the sidebar menu.
- Press the instance that you recently provisioned.
- In the top right corner, press "Console" (its the two angle brackets "< >").
- You will now get the visual screen output of the server. The image might be blank because the server puts it in power save mode when not used. Moving the cursor or pressing for instance "ctrl" will bring it back. 
- Press "ctrl" + "alt" + "delete".
- Press (using the cursor) the "sign in" button.
- You will be prompted to select a password.

You are now able to login using your new password via an RDP client using for instance a :doc:`floating IP </networking/floating-ips>`. Dont forget that you may need to add a :doc:`security group </networking/router/security-groups/index>` for RDP access.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

To set the initial password through the :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps:

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to resize, press "console".
- You will now get the visual screen output of the server. The image might be blank because the server puts it in power save mode when not used. Moving the cursor or pressing for instance "ctrl" will bring it back. 
- Press "ctrl" + "alt" + "delete".
- Press (using the cursor) the "sign in" button.
- You will be prompted to select a password.

You are now able to login using your new password via an RDP client using for instance a :doc:`floating IP </networking/floating-ips>`. Dont forget that you may need to add a :doc:`security group </networking/router/security-groups/index>` for RDP access.

.. note:: If you cannot see the sign-in button for any reason, restart the server.

Upgrading Windows virtio driver
-------------------------------

Frome time to time, the underlying infrastructure behaviour will change. This could result in bad IO-performance and even IO-stalls on windows instances with old versions of virtio drivers installed. Upgrading the virtio driver from time to time is therefore advisable. To do so, follow this below process.

.. important:: Its advisable to backup (or at the very least, :doc:`snapshot </storage/snapshots/create-snapshot>`) your volume before upgrading the IO-driver.

.. note:: The process involves a reboot so proceeding during a downtime window for mission critical instances is recommended.

- Stop any application write IO towards the local disc. This means for instance shutting down a database service. You do not need to quiesce all IO towards the disk.
- Download the most recent virtio ISO driver from `here <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/>`__.
- Mount the ISO in windows.
- Run the ``virtio-win-gt-x64.msi`` installer with administrative privileges.
- Click through it.
- When installer completes successfully, reboot your server.

..  seealso::
    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
