====================================================
Resizing an instance using OpenStack terminal client
====================================================

To resize an :doc:`instance <../index>` using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

.. important::

   Resizing an instance will cause the instance to shut off during the
   process. We recommend doing a backup of your data before proceeding.

- Identify the :doc:`flavor <../flavors>` you want. This can be done
  by running command: ``openstack flavor list``.

- Identify the instance you want to resize. This can be done by running
  the following command: ``openstack server list``.

- To resize, run the following command: ``openstack server resize --flavor [FLAVOR NAME] [INSTANCE NAME]`` where
  you replace the items in brackets to the flavor you choose in previous step and the instance name.

- Run the command: ``openstack server list`` and you'll see the instance is now in Status **VERIFY_RESIZE**. Login
  to the instance and verify that it worked as intended (meaning the instance is working as before but with the new flavor).

- If you are happy with the result, run the following command: ``openstack server resize confirm [INSTANCE NAME]`` This
  will finalize the process and make it permanent.

- If you are unhappy (for some reason the process failed), you are able to instead run the
  command ``openstack server resize revert [INSTANCE NAME]``. This will revert the process.

The process is now complete. 

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
    - :doc:`/compute/flavors`
