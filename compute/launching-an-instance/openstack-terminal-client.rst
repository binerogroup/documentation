===================================================
Launching instances using OpenStack terminal client
===================================================
To launch an :doc:`instance <../index>` from the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

.. Note::
	If you don't have a :doc:`network </networking/virtual-router/private-subnet/index>` or :doc:`../ssh-keys` available in some of the steppes below, you might need to do some :doc:`initial configuration </getting-started/launching-an-instance>` first. An SSH-key setup using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` is not available in Horizon or the terminal client as they use `api users </getting-started/users.html#api-users>`__ to login and SSH-keys are account bound.

- Identify which :doc:`network </networking/virtual-router/private-network/index>` you want to use by running ``$ openstack network list``, save the name.
- Identify which :doc:`SSH-key <../ssh-keys>` you want to use by running ``$ openstack key list``, save the name.
- Identify which :doc:`flavor <../flavors>` you want to use by running ``$ openstack flavor list``, save the name.
- Identify which :doc:`image </images/index>` you want to boot from by running ``$ openstack image list``, save the name.
- Once you have all above information you are able to run the following command that will create and start an instance similarly as from :doc:`/compute/launching-an-instance/openstack-horizon`:

::

     openstack server create \
     --flavor [FLAVOR NAME] \
     --availability-zone europe-se-1a \
     --image [IMAGE NAME] \
     --boot-from-volume [VOLUME SIZE] \
     --network [NETWORK NAME] \
     --security-group default \
     --key-name [KEY NAME] \
     [NAME OF SERVER]

It will create a server with a persistent volume that **does not** get deleted along with the instance (as would have been the case from Horizon). The values within brackets needs to be replaced with the values you want to use, as provided by previous steps. Note the disk size value that states how big the servers disk will be.

To get the status of the provisioned server, you can use ``$ openstack server list`` which will show all servers. Once the server gets status "ACTIVE", its booting. 

Above method will create a disk with standard options. It will end up on our standard storage tier (which is flash/ssd) and it will not get deleted along with the VM. 

.. Important::
	Take care that your instance is listed (with ``$ openstack server list``) to have booted from a *volume* and not an image. The "Image" column in the output should say **N/A (booted from volume)**. Booting from an image will give you constraints as to the disk-size and other options that are hardwired in the image and is not a recommended way to start a new instance. 

When running ``$ openstack server list`` you will notice that your newly created server is given an IP from the subnet you specified. You might need to add a floating IP to be able to connect. More information in our :doc:`/networking/reaching-your-instances` article. To assign it a floating IP via the OpenStack terminal client, please see :doc:`/networking/floating-ips`.

.. Note::
	The cloud management portal will not setup :doc:`security groups </networking/virtual-router/security-groups/index>` which will be needed to access the instance if you are using a floating IP.

.. Tip:: 
	The OpenStack terminal client will give you helpful feedback when ending a command with "-h". For instance ``$ openstack server create -h`` will show you how you can work with various options to create a server. 



..  seealso::
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
