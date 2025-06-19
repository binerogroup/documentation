====================
Shelving an instance
====================

Shelving an instance allows you to save the data for your instance but release
the allocated resources required to run the instance and decrease the price you
pay for resource you're don't currently need.

Shelving an instance saves your data by uploading it to the image service and
storage such as volumes are not touched. The system saves the metadata about
your instance and releases any compute allocations.

You can at any time unshelve the instance and start it again.

.. tip::

   Shelving also works for our GPU and NVMe based flavors.

.. note::

   Shelved instances reduces your cost for allocated resources for the
   instance but you still pay for the used storage, such as root disk
   and volumes.

Shelve an instance using Cloud portal
-------------------------------------

To shelve an `instance <index>`_ from the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Click **Compute** then **Instances** in the sidebar menu.

- On the card for the instance click the dropdown menu and click the **Shelve** action

Shelve an instance using OpenStack Horizon
------------------------------------------

- Click **Project**, then **Compute**, then **Instances** in the sidebar menu.

- In the dropdown menu to the right for the instance, click **Shelve instance**.

If the instance is running, the system will power it off and then start the
shelving process.

To unshelve the instance repeat the same process but click **Unshelve instance**
in the dropdown menu.

Shelve an instance using OpenStack Terminal client
--------------------------------------------------

To shelve an `instance <index>` by using the OpenStack terminal client.

- Identify the instance you want to shelve. You can find it by listing existing
  instance with ``openstack server list``

- To shelve the instance run ``openstack server shelve [NAME]``. Replace the values
  within brackets with the name of the instance from the previous step.

If the instance is running, the system will power it off and then start the
shelving process.

To unshelve the instance repeat the same process but instead
run ``openstack server unshelve [NAME]``

.. seealso::

  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
