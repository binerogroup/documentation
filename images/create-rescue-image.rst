===================
Create rescue image
===================

To :doc:`boot your instance from a rescue image </compute/boot-from-rescue>` you will
need to first have a rescue image available.

A rescue image can be an operating system installation media, Live-CD that boots an
entire operating system from an ISO file or any other rescue media

Since you need to set custom properties on the rescue image this can only be done using
the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` or :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

OpenStack Terminal Client
-------------------------

This will guide you through creating a rescue image using the  :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Download the rescue media ISO to your computer

- Upload it as a new image

.. note:: Replace name and file with the correct information in below command.

::

    openstack image create [NAME] --property hw_rescue_device=cdrom --property hw_rescue_bus=scsi --disk-format iso --file [FILENAME] --private --progress

Your rescue image can now be used, make a note of the name of the image.

.. note:: You will be charged based on the price list for the image unless it's deleted, when you
          are done using the image it can be deleted to save on the hourly cost for storing the image.

..  seealso::
    - :doc:`index`
