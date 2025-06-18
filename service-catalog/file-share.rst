==========
File share
==========

If you need to store files on a filesystem that can be access across a
network, using our file share service is a good option.

The file share service will provision a Linux based instance on which it
will setup either (or both of) NFS and Samba (SMB / CIFS). 

To setup the service, first follow the general instructions on our
:doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.

- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you
  want to provision in. We recommend the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days
  you want your history stored.

- Select disk-type. See the :doc:`/storage/storage-types` article for more information.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.

- Select your :doc:`SSH-key </compute/ssh-keys>`.

- Under **Local network**, select the :doc:`network </networking/network/index>`
  on which you want to run the service.

- Check **NFS** if you want to install support for NFS.

- Check **Windows Samba** if you want to install support for SMB/CIFS.

- Select the storage volume size. This is the volume on which you will store your data. The
  volume can extended later, see the :doc:`/storage/persistent-block-storage/extend-volume`
  article.

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
