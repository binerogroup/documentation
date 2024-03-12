===================
Create rescue image
===================

To :doc:`boot your instance from a rescue image </compute/boot-from-rescue>` you will need to first have a rescue image available. A rescue image can be an operating system installation media (for instance) or a live-cd that boots an entire operating system from an ISO file. 

Because you need to set various properties on the image to use it as a rescue image, its nessecary to use the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` to create the image.

OpenStack Terminal Client
-------------------------
To create a rescue image to boot from using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Download the ISO that you want to use and save it on your computer.
- Run this command: ``$ openstack image create <ISO_NAME> --property hw_rescue_device=cdrom --property hw_rescue_bus=scsi --disk-format iso --file <LOCAL_FILENAME>.iso --private --progress``
- Note the <ISO_NAME> as you will need this to boot from the image.

.. Note::
	The image can be deleted or remain on your account for future use once you have unmounted it from your instance. If you opt to save the image, please note that it will consume disk-space and therefore have an hourly cost as per our price list.

..  seealso::
    - :doc:`index`
