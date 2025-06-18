=========================
Boot instances using UEFI
=========================

.. note::

   We do not currently support UEFI Secure Boot, :doc:`contact our support </general/getting-support>`
   and let us know you need this feature.

We support booting instances by using ``UEFI`` instead of legacy ``BIOS``. To use it you
need to set the properties ``hw_firmware_type`` to ``uefi`` and ``hw_machine_type`` to
``q35`` on your :doc:`image </images/index>` or in the volume metadata.

The system copies the image properties into the volume metadata when it creates
a volume with an image.
