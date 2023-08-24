===========================================
Launching instances using OpenStack Horizon
===========================================
To launch an :doc:`instance <../index>` from :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

.. Note::
	If you don't have a :doc:`network </networking/virtual-router/private-subnet/index>` or :doc:`../ssh-keys` available in some of the steppes below, you might need to do some :doc:`initial configuration </getting-started/launching-an-instance>` first. An SSH-key setup using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` is not available in Horizon or the terminal client as they use `api users </getting-started/users.html#api-users>`__ to login and SSH-keys are account bound.

- Under "project", click "compute" and then "instances" in the sidebar menu.
- Click "launch an instance" in the right upper corner.
- Name your instance and optionally provide a description.
- Under "availability zone", select an availability zone. We recommend "europe-se-1a" if you are creating you first instance (or generally if you are not sure you need to be in 1b).
- Press "source" in the leftmost menu.
- "Image" should be pre-choosen under "select boot source". 
- Select a size for your persistent storage volume (the disk connected to the instance). Also note that "create new volume" is set to "yes" and "delete volume on instance delete" is set to "no" (assuming you would not specifically want the image to remain when you delete the instance which is perfectly viable).
- On the same page, further down you can select :doc:`boot image </images/index>`. Press the arrow next to the OS you want. 
- Press "flavor" in the leftmost menu.
- Press the small arrow next to the :doc:`flavor <../flavors>` you want.
- Press "Networks" in the leftmost menu.
- Select the network you want to connect to. This could be either a :doc:`private subnet </networking/virtual-router/private-subnet/index>` (if you have one setup, if so the name is whatever you chose) or a :doc:`directly attached IP </networking/directly-attached-ips>` (the name would be based on the availability zone you previously chose). We recommend using a private subnet, for more information see our :doc:`/getting-started/launching-an-instance` guide.
- Press "key pair" in the leftmost menu.
- Select the SSH key you want to use (if its not already selected). This is assuming you are running a Linux instance. 
- Press "launch instance" in the bottom right corner.
- When the instance is provisioned it will show as status "active". 
- By pressing its name, you are able to see its IP-configuration. There you are able to see its IP-address (both IPv4 and IPv6). To connect use either SSH or RDP (depending on image). If you are using a private subnet (and not a directly attached IP, see above), you might need to add a floating IP to be able to connect. More information in our :doc:`/networking/reaching-your-instances` article.

.. Note::
	The cloud management portal will not setup :doc:`security groups </networking/virtual-router/security-groups/index>` which will be needed to access the instance if you are using a floating IP.

..  seealso::
    - :doc:`/regions-and-availability-zones`
    - :doc:`/compute/flavors`
    - :doc:`/getting-started/launching-an-instance`
