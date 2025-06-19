============================================
Resizing an instance using OpenStack Horizon
============================================

To resize an :doc:`instance <../index>` by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

.. important::

   Resizing an instance will cause the instance to shut off during the
   process. We recommend doing a backup of your data before proceeding.

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- In the dropdown menu to the far right of the line corresponding to the instance
  you want to resize, press **Resize instance**.

- Under **New flavor**, select the :doc:`flavor <../flavors>` you want.

- Press **Resize** button.

- You will see the status of the resize in the following page.

- When it says **Confirm or Revert Resize/Migrate**, login to the instance and verify
  that it worked as intended (meaning the instance is working as before but with the
  new flavor). 

- If you are happy with the result, press **Confirm Resize/Rigrate** in dropdown to
  the far right (it should be pre-selected). This completes the process and make the
  resize permanent.

- If you are unhappy (or for some reason the resize was unsuccessful), you are able
  to instead click **Revert resize/Migrate** (available in the dropdown). This will
  revert the process.

The process is now complete. 

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/compute/flavors`
