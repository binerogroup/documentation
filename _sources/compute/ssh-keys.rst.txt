========
SSH-keys
========

Using an SSH-key is generally considered more secure than using passwords. While you can use passwords in the platform, the initial login of a newly created Linux instance will require an SSH-key. If you already have an SSH-key that you use, upload the **public** part to the platform (see below). How to use SSH-keys on your particular client operative system are out of scope for this guide but there is information readily available on the internet on this topic.

.. note:: When using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` you will invariably use the :doc:`main user </getting-started/users>`. SSH-keys created in this portal will therefore not work in the other management tools which use API (OpenStack) users. Therefore keep in mind that if you create a key using the cloud management portal, you will also need to create a key using either Horizon, The OpenStack terminal client or using the API if you want to use either of these in the future.

.. tip:: If you don't have a key, you will be able to generate a new one using one of the below methods. We do however recommend using ``ssh-keygen`` to generate the key on your computer. This is because you are then able to choose one of the modern keying methods instead of RSA which the various platform options will provide. A good command to generate a key in Linux and Linux like systems running Open SSH using the modern ed25519 algorithm (which may not be supported on all systems yet - but is very safe and preferable to RSA) is ``ssh-keygen -t ed25519 -f ~/id_ed25519``, this will output the key in your home folder with filename "id_ed25519" and public key in same folder with filename "id_ed25519.pub". You will be asked to provide a password for the key which we recommend. 

.. tip:: If you already have a key but with no password we strongly recommend adding a password to it, this can be done (in Linux and Linux like systems running Open SSH) by the following command ``ssh-keygen -p -f <your keyfile>``. Adding a password will secure the key in the event you for instance loose your laptop or otherwise compromise the key. Also keep in mind, the private part of the key is as sensitive as a clear text password without the passphrase (and depending on your passphrase strength, potentially also with it) and should be stored with this in mind.

Cloud management portal
-----------------------

To create an SSH-key through the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps:

- Press "Compute" and then "SSH-keys" in the side menu. 
- Press the "+" sign in lower right corner.
- Choose a name.
- Copy/paste your key into the "key contents" field.

If you don't have a key you can instead choose to generate a new one:

- Press "generate new key". 
- Copy the **private** part of the new key to a file on your workstation as this will **not** be saved in the platform (and should be kept secret). We recommend setting a password on the key as per above tips. 

OpenStack Horizon
-----------------

To create an SSH-key through :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps:

- Under "project", click "compute" and then "key pairs" in the sidebar menu.
- Press "import public key" in the top right corner.
- Choose a name.
- Choose "SSH-key" under "key type".
- Paste your **public key** in the "public key" form (or choose the file from the "load public key from file".
- Press "import public key"

If you don't have a key you can instead choose to generate a new one:
- Under "project", click "compute" and then "key pairs" in the sidebar menu.
- Press "create key pair" in the top right corner.
- Choose a name.
- Press "create key pair"

Your new **private key** will be downloaded in .pem format and the public key is stored in the platform. We recommend setting a password on the key as per above tips. 

OpenStack terminal client
-------------------------

You can create a key using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` by running the following command ``openstack key create [NAME]``. It will output your keys **private part** which should be saved to your computer, the public part is stored in the platform. We recommend setting a password on the key as per above tips. 

.. note:: If you have issues with an SSH-key not provisioning correctly on your new instance, check your various IP-configurations. You can see in the instances (full) log what keys it has installed  via cloud-init.

..  seealso::
    - :doc:`/compute/gpu-instances`
    - :doc:`/storage/nvme-storage`
