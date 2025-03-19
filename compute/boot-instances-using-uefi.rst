=========================
Boot instances using UEFI
=========================

.. note::

   We do not currently support UEFI Secure Boot, please :doc:`contact our support </general/getting-support>`
   and let us know you need this feature.

We support booting instances using UEFI instead of legacy BIOS, to use it you
need to set the properties ``hw_firmware_type`` to ``uefi`` and ``hw_machine_type``
to ``q35`` on your :doc:`image </images/index>` or in the volume metadata.

When creating a volume with an image the properties on the image is copied into
the volume metadata.
