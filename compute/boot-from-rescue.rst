======================
Boot from rescue image
======================

Sometimes you need to boot your instance from a ISO image to fix things that are not possible to fix when the filesystem on the boot :doc:`volume </storage/persistent-block-storage/index>` volume is mounted. A rescue image can be used in these scenarios to boot an alternate operating system which can in turn fix the problem(s) with the volume.

While there is a function in the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, it only supports mounting a rescue image on instances that are not booting from a volume (which will be the most common scenario). We will therefore focus on using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` below.

OpenStack Terminal Client
-------------------------
To boot your instance from a rescue image using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- If you don't have a rescue image in your image repository, first you will need to create one, please follow our guide to create one :doc:`here </images/create-rescue-image>`.  
- If you do have an image available, by running this command: ``$ openstack image list --private``, you can read and note the name of it for next step.
- To connect the image to the instance, run this command ``$ openstack --os-compute-api-version 2.87 server rescue --image <ISO_NAME> <INSTANCE_NAME>``, replacing the <ISO_NAME> with the name from previous step and the <INSTANCE_NAME> with the name of the instance that should mount the image.
- When done, un-mount the image by running this command: ``$ openstack server unrescue <INSTANCE_NAME>``.

.. Note::
	The image can be deleted or remain on your account for future use once you have unmounted it from your instance. If you opt to save the image, please note that it will consume disk-space and therefore have an hourly cost as per our price list.


..  seealso::
    - :doc:`/images/create-rescue-image`
    - :doc:`index`
