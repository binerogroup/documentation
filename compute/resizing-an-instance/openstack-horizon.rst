============================================
Resizing an instance using OpenStack Horizon
============================================
To resize an :doc:`instance <../index>` using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

.. Important::
	Resizing an instance will cause the instance to shut off during the process. We recommend doing a backup of your data before proceeding.

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to resize, press "resize instance".
- Under "new flavor", select the :doc:`flavor <../flavors>` you want.
- Press "resize" button.
- You will see the status of the resize in the following page.
- When it says "Confirm or Revert Resize/Migrate", login to the instance and verify that it worked as intended (meaning the instance is working as before but with the new flavor). 
- If you are happy with the result, press "Confirm Resize/Rigrate" in drop-down to the far right (it should be pre-selected). This will finalise the process and make it permanent.
- If you are unhappy (for some reason the process failed), you are able to instead press "Revert resize/Migrate" (available in the drop-down). This will revert the process.

The process is now complete. 

..  seealso::
    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/compute/flavors`