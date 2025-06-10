=====================================================
Launching instances using the cloud management portal
=====================================================

To launch an `instance <../index>`_ from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

.. note::

   If you don't have a :doc:`network </networking/network/index>` or
   :doc:`../ssh-keys` available in some of the steppes below, you might need to do
   some :doc:`initial configuration </getting-started/launching-an-instance>` first.

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the **+** (plus) icon in the bottom right corner.

- Name your instance.

- Under region, **europe-se-1** is pre-selected.

- Under **Boot source**, choose the :doc:`image </images/index>` you want (the operative
  system). Here you should also choose what type of storage type you want (SSD or HDD).

  - If you don't select a storage type, SSD will be chosen for you

  - When choosing a type, you also select a volume size for your persistent storage. 20 GB
    is the smallest size available, anything under that will still default to 20 GB but you
    are able to increase the size. See `persistent storage <storage/persistent-block-storage>`_ for
    more information.

  - Press **Select** when done.

- Under **Choose configuration**, select the :doc:`flavor <../flavors>` you want.

- Under **Availability zone**, select an availability zone. We recommend **europe-se-1a** if you are
  creating you first instance (or generally if you are not sure you need to be in europe-se-1b).

- Under **SSH-keys**, select your key.

- Under **Root password**, select a complicated password. Save it as it will not be saved in the
  platform after provisioning.

- Under **Network**, select the network you want to connect to. This could be either a :doc:`subnet </networking/subnet/index>`
  (if you have one setup, if so the name is whatever you chose) or a :doc:`directly attached IP </networking/directly-attached-ips>` (the name would
  be based on the availability zone you previously chose). We recommend using a subnet, for more information see
  our :doc:`/getting-started/launching-an-instance` guide.

- Press **Create** when done.

The instance will take some time to deploy. When done, it will be displayed as running on the next page.

When the instance is running, click on it and review the IP configuration under **Networking details**. There you are able
to see its IP-address (both IPv4 and IPv6).

To connect use either SSH or RDP (depending on image). If you are using a subnet (and not a directly attached
IP, see above), you might need to add a floating IP to be able to connect. For more information see
our :doc:`/networking/reaching-your-instances` article.

.. note::

   The cloud management portal will not setup :doc:`security groups </networking/security-groups/index>` which
   will be needed to allow traffic to the instance.

..  seealso::

    - :doc:`/regions-and-availability-zones`
    - :doc:`/compute/flavors`
    - :doc:`/getting-started/launching-an-instance`
