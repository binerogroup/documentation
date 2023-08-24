===============
Cloud init data
===============
Cloud-init is an industry standard method for doing initial configuration of compute instances across plattforms. During first boot of a cloud-init configured compute instance, cloud-init will automatically provision the instance with networking, storage, SSH keys, packages and various other system aspects already configured in the cloud infrastructure. Cloud-init is therefore a bridge between the platform and the OS-installation running on the cloud, enabling zero configuration on the guest instances. 

User have the option to inject their own commands via cloud-user data. This is accomplished by adding YAML data in the "cloud init user data" fields associated with provisioning a new instance. More information on whats available to configure via cloud-user data is available `here <https://cloudinit.readthedocs.io/en/latest/reference/examples.html>`__.

..  seealso::
    - :doc:`index`