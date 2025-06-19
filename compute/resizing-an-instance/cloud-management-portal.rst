==================================================
Resizing an instance using Cloud management portal
==================================================

To resize an `instance <../index>`_ by using the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

.. important::

   Resizing an instance will cause the instance to shut off during the
   process. We recommend doing a backup of your data before proceeding.

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance that you want to resize.

- In the top right corner, press **Resize** (its a small dotted square).

- Select the :doc:`flavor <../flavors>` you want.

- Press **Resize** and press **Yes**

- You will see the status in the top left corner. 

- When it says **Verify resize** (and a small triangle), login to the instance
  and verify that it worked as intended (meaning the instance is working as
  before but with the new flavor). 

- If you are happy with the result, press the small checkmark in the top
  right corner. This completes the process and make the resize permanent.

- If you are unhappy (or for some reason the resize was unsuccessful), you
  are able to instead click the small **x** (cross). This will revert the
  process.

- Accept the change by pressing **Yes**

The process is now complete. 

..  seealso::

    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/compute/flavors`
