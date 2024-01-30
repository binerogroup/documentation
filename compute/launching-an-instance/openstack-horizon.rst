===========================================
Launching instances using OpenStack Horizon
===========================================

This will walk you through launching an :doc:`instance <../index>` from :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

.. note:: If you don't have a :doc:`network </networking/router/private-subnet/index>` or :doc:`../ssh-keys` available in
          some of the steps below, you might need to do some :doc:`initial configuration </getting-started/launching-an-instance>` first.
          An SSH-key created or added in the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` is not available in Horizon as
          they use `API users </getting-started/users.html#api-users>`__ and SSH-keys are owned by the user account and not the project.

- Under **Project**, click **Compute** and then **Instances** in the left-hand side menu.

- Click the **Launch an instance** button in the upper right corner.

.. caution:: If you want to create an instance in the ``europe-se-1b`` availability zone (any availability zone that is not the default
             ``europe-se-1a``) youneed to :doc:`create the volume <../../storage/persistent-block-storage/create-volume>` in that availability
             zone beforehand and in the **Sources** step select **Boot Source** as **Volume**. This is because we do not support attaching volumes
             across availability zones and the instance and volume must be in the same availability zone.

- Under the **Details** tab in the dialog.

  - Enter an **Instance Name** for your instance and optionally provide a description.

  - Select an **Availability Zone**, see :doc:`Regions and Availability Zones <../regions-and-availability-zones>`.

    - We recommend the default ``europe-se-1a`` availability zone if you are creating your first instance and
      if you are not sure that you need to use a secondary availability zone.

- Under the **Sources** tab in the dialog.

  - Select **Image** as **Boot Source**.

  - Select **Yes** for **Create New Volume** to boot your instance from a volume, we only recommend selecting **No** here if you intend to
    use an NVMe-based flavor.

  - Select **No** for **Delete Volume on Instance Delete**. If you want the system to implicitly delete the volume together with
    the instance, select **Yes**.

  - Select the :doc:`Image </images/index>` you want to boot your instance from by pressin the arrow on the right-hand side.

- Under the **Flavour** tab in the dialog.

  - Select the :doc:`flavor <../flavors>` you want the instance to have by pressing the arrow on the right-hand side.

- Under the **Networks** tab in the dialog.

  - Select the network you want to connect your instance to by pressing the arrow on the right side. This could be
    a :doc:`private network </networking/router/private-network/index>` if you have one or a
    :doc:`directly attached IP </networking/directly-attached-ips>` in which case the availability zone is in the name of the network.
    We recommend using a private subnet, for more information see our :doc:`/getting-started/launching-an-instance` guide.

- Under the **Key Pair** tab in the dialog.

  - Select the SSH key you want added to the instance by pressing the arrow on the right-hand side. This is optional and mostly
    relevant for images and operating systems containing a SSH server.

- Click the **Launch Instance** button in the bottom right in the dialog.

When the instance is finished its status will be **Active**. You can view more details about the instance by clicking the name
in the list.

To reach your instance see the :doc:`documentation </networking/reaching-your-instances>` for that.

..  seealso::
    - :doc:`/regions-and-availability-zones`
    - :doc:`/compute/flavors`
    - :doc:`/getting-started/launching-an-instance`
