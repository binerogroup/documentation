==========================
Persistent storage (block)
==========================

Persistent block storage provides a block based storage media to a :doc:`compute instance </compute/index>`.

This comes in the form of **Volumes**, which can use either of our :doc:`../storage-types` as
backing media to save data permanently. 

Binero cloud will not provision an instance without a volume attached (unless using NVMe) and the smallest
volume size allowed is the size of the :doc:`image </images/index>` or disk specified in the :doc:`flavor </compute/flavors>`.

The image is the operating system image copied onto a volume, you can also create a raw volume
and add a filesystem on the volume and attach it to an instance for other use-cases.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-volume
  extend-volume
  volume-operations
  detach-volume
  creating-an-instance-from-a-volume
  multi-attached-persistent-volumes
