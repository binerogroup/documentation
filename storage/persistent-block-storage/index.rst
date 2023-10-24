==========================
Persistent storage (block)
==========================
Persistent storage is the "harddisk" of a :doc:`compute instance </compute/index>`. This comes in the form of **volumes**, which can use either of our :doc:`../storage-types` as backing media to save data permanently. 

Binero.Cloud will not provision an instance without a volume attached and the smallest volume allowed will be the size of the :doc:`image </images/index>` that you want to provision your instance using. The image is the operating system that is pre-installed onto a volume, however since Binero.Cloud is using shared images ("base images"), users will get their own volumes that will save the *delta* (that is the changes) from the image as well as their files and data. This speeds up provisioning of the instances dramatically and is totally transparent from the users perspective.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-volume
  extend-volume
  volume-operations
  detach-volume
  creating-an-instance-from-a-volume
  multi-attached-persistent-volumes
