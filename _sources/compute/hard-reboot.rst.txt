===========
Hard reboot
===========

General concept
---------------

If an instance is hung (does not reply to commands), a hard reboot of the instance
is the same as pulling the power cord on a physical computer, a soft reboot sends a
signal to the operating system and waits for it to try to reboot on its own.

.. tip::

   Aside from actually rebooting the instance, a hard reboot will also redefine the instance
   on the hypervisor.

   This means that the instance will get the latest hardware version in the platform which is
   good for keeping compatible with the evolving ecosystem of OpenStack.

   Doing an occasional hard reboot with the instance in powered off mode is therefore
   recommended.

Executing a hard reboot
-----------------------

The hard reboot option is only available via :doc:`/getting-started/managing-your-cloud/openstack-horizon`
or :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`.

We recommend checking out our guides on working with these platforms if you normally only work
with the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

.. important::

   Please note that a hard reboot will not care about the state of the operating system. Any current writes
   to the disk in the middle of a hard reboot will get interrupted, potentially causing data loss.

   We recommend this action as a last resort, or to be executed after the operating system has halted.

Hard reboot using the OpenStack Horizon portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To hard reboot an instance using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the dropdown button **Actions**

- Press **Hard reboot instance**

- Press the confirmation button (**Hard reboot instance**).

- Wait until the progress bar has finished.

The instance will start again (even if hard rebooted from a powered off state).

Hard reboot using the OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To hard reboot an instance using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack server list``. Save the name of the instance you want to
  hard reboot.

- Run this command: ``openstack server reboot --hard [SERVER NAME]``, replacing the values
  in angle brackets by the information from the previous steps.

The instance will start again (even if hard rebooted from a powered off state).
