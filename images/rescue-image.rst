============
Rescue image
============

Sometimes you need to boot your instance from a ISO image to fix things that are not possible to fix when the filesystem on the boot :doc:`volume </storage/persistent-block-storage/index>` volume is mounted (that is; the instance is booted from it). To do this, you can use a rescue image.

While there is a function in the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, it uses an old version of the underlying OpenStack functionality and is not recommended. 

OpenStack Terminal Client
-------------------------
To create a rescue image to boot from using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Download the ISO that you want to use and save it locally.
- Run this command: ``$ openstack image create <ISO_NAME>.iso --property hw_rescue_device=cdrom --property hw_rescue_bus=scsi --disk-format iso --file <LOCAL_FILENAME>.iso --private --progress``

.. Note::
	The image can be deleted after use or remain on your account for future use.

To boot your instance from a rescue image using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- First you need to create the ISO image in our image repository, please follow our guide to create a new rescue image :doc:`here <index>`. The image type should be "ISO". 
- Secondly, run this command ``$ openstack --os-compute-api-version 2.87 server rescue --image <ISO_NAME> <SERVER>``.
- When done, un-mount the image by running this command: ``$ openstack server unrescue <SERVER>``.


..  seealso::
    - :doc:`index`
