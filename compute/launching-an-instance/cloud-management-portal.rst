=====================================================
Launching instances using the cloud management portal
=====================================================
To launch an `instance <../index>`_ from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

.. Note::
	If you don't have a :doc:`network </networking/virtual-router/private-subnet/index>` or :doc:`../ssh-keys` available in some of the steppes below, you might need to do some :doc:`initial configuration </getting-started/launching-an-instance>` first.

- Press "Compute" and then "Instances" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Name your instance.
- Under region, "europe-se-1" should be pre-selected.
- Under "boot source", choose the :doc:`image </images/index>` you want (the operative system). Here you should also choose (under "storage type") what type of storage you want (SSD or HDD). If you don't select, SSD will be chosen for you. When choosing a type, you are able to select a volume size for your persistent storage. 25GB is the smallest size available, anything under that will still default to 25GB but you are able to increase the size. See `persistent storage <storage/persistent-block-storage>`_ for more information. Press "select" when done.
- Under "choose configuration", select the :doc:`flavor <../flavors>` you want.
- Under "availability zone", select an availability zone. We recommend "europe-se-1a" if you are creating you first instance (or generally if you are not sure you need to be in 1b).
- Under "SSH-keys", select your key.
- Under "Root password", select a complicated password. Save it as it will not be saved in the platform after provisioning.
- Under "Network", select the network you want to connect to. This could be either a :doc:`private subnet </networking/virtual-router/private-subnet/index>` (if you have one setup, if so the name is whatever you chose) or a :doc:`directly attached IP </networking/directly-attached-ips>` (the name would be based on the availability zone you previously chose). We recommend using a private subnet, for more information see our :doc:`/getting-started/launching-an-instance` guide.
- Press "create" when done.

The instance will take some time to deploy. When done, it will display as "running" on the next page. When the instance is running, click it and review its IP-configuration under "networking details". There you are able to see its IP-address (both IPv4 and IPv6). To connect use either SSH or RDP (depending on image). If you are using a private subnet (and not a directly attached IP, see above), you might need to add a floating IP to be able to connect. More information in our :doc:`/networking/reaching-your-instances` article.

.. Note::
	The cloud management portal will not setup :doc:`security groups </networking/virtual-router/security-groups/index>` which will be needed to access the instance if you are using a floating IP.

..  seealso::
    - :doc:`/regions-and-availability-zones`
    - :doc:`/compute/flavors`
    - :doc:`/getting-started/launching-an-instance`