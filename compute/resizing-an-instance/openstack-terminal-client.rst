====================================================
Resizing an instance using OpenStack terminal client
====================================================

To resize an :doc:`instance <../index>` by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

.. important::

   Resizing an instance will cause the instance to shut off during the
   process. We recommend doing a backup of your data before proceeding.

- Identify the :doc:`flavor <../flavors>` you want. You can list all
  flavors with ``openstack flavor list``.

- Identify the instance you want to resize. You can list all your
  instances with ``openstack server list``.

- To resize, run the following command: ``openstack server resize --flavor [FLAVOR NAME] [INSTANCE NAME]`` where
  you replace the items in brackets to the flavor you choose in previous step and the instance name.

- Run the command: ``openstack server list`` and you'll see the instance is now in Status **VERIFY_RESIZE**. Login
  to the instance and verify that it worked as intended (meaning the instance is working as before but with the new flavor).

- If you are happy with the result, confirm the resize with ``openstack server resize confirm [INSTANCE NAME]``,
  this completes the process and make the resize permanent.

- If you are unhappy (or for some reason the resize was unsuccessful), you are able to instead
  run the command ``openstack server resize revert [INSTANCE NAME]``. This will revert the process.

The process is now complete. 

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
    - :doc:`/compute/flavors`
