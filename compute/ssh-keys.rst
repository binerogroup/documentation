========
SSH-keys
========

Using an SSH-key is generally considered more secure than using passwords.

While you can use passwords in the platform, the initial login of a newly created
Linux instance will require an SSH-key.

If you already have an SSH-key that you use, upload the **public** part to the
platform (see below).

How to use SSH-keys on your particular client operative system are out of scope
for this documentation but there is information readily available on the internet
on this topic.

.. note::

   When using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
   you will invariably use the :doc:`main user </getting-started/users>`.

   SSH-keys created in this portal will not work in the other management tools
   which use API (OpenStack) users.

   Remember that if you create a key using the cloud management portal, you will
   also need to create a key using either Horizon, The OpenStack terminal client or using
   the API if you want to use either of these in the future.

.. tip::

   If you don't have a key, you will be able to generate a new one using one of the below
   methods.

   We do recommend using ``ssh-keygen`` to generate the key on your computer. This
   is because you are then able to choose one of the modern keying methods instead of RSA
   which the various platform options will provide.

   We recommend that you use the new modern ED25519 algorithm when creating your SSH
   key and that you use a passphrase for the key.

   Use the command ``ssh-keygen -t ed25519 -f ~/id_ed25519`` to create your new SSH
   key, use a strong password, your private key is in ``~/id_ed25519`` and your public
   key is in ``~/id_ed25519.pub`` file.

.. tip::

   If you already have a key but with no password we strongly recommend adding a password to
   it, you can add a password to your SSH key with ``ssh-keygen -p -f <your keyfile>``.

   Adding a password will secure the key in case you it's stolen or lost. Remember that the
   private key is as sensitive as a plain text password without a passphrase.

Cloud management portal
-----------------------

To create an SSH-key through the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **SSH-keys** in the side menu. 

- Press the **+** (plus) sign in lower right corner.

- Choose a name.

- Copy/paste your key into the **Key contents** field.

If you don't have a key you can instead choose to generate a new one:

- Press **Generate new key**

- Copy the **private** part of the new key to a file on your workstation as this will **not** be
  saved in the platform. We recommend setting a passphrase on the key according to the above tips. 

OpenStack Horizon
-----------------

To create an SSH-key through :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Key pairs** in the sidebar menu.

- Press **Import public key** in the top right corner.

- Choose a name.

- Choose **SSH-key** under **Key type**

- Paste your **public key** in the **Public key** form (or import the public key
  from file using the **Load public key from file** button)

- Press **Import public key**

If you don't have a key you can instead choose to generate a new one:

- Under **Project**, click **Compute** and then **Key pairs** in the sidebar menu.

- Press **Create key pair** in the top right corner.

- Choose a name.

- Press **Create key pair**

Your new **private key** is automatically downloaded to a ``.pem`` file and the public key
gets saved in the platform. We recommend setting a passphrase on the key according to above tips. 

OpenStack terminal client
-------------------------

You can create a key using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` by
running the following command ``openstack key create [NAME]``.

It will output your keys **private part** which you should save to your computer, the public part gets
stored in the platform. We recommend setting a passphrase on the key according to above tips. 

.. note::

   If you have issues with an SSH-key not provisioning correctly on your new instance, check your IP
   network configuration. You can see in the instances console log what keys cloud-init has installed.

..  seealso::

    - :doc:`/compute/gpu-instances`
    - :doc:`/storage/nvme-storage`
