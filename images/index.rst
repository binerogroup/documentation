======
Images
======

A image is a prepared operating system disk that can be used to populate a :doc:`volume </storage/persistent-block-storage/index>` or boot an :doc:`instance </compute/index>` from.

Public images
-------------

Binero cloud provides images of popular operating systems that are publicly available in the platform. The public images is most common operating systems or appliances.

Each image is configured to honour :doc:`cloud-init data <cloud-init-data>`. An included image is publicly available in the platform but an instance will instantiate its own block device with the image *as base* - meaning that nothing will never write to the actual image.

Private images
--------------

Its possible to create (based on an existing instance) or upload your own image. This might for instance be useful if you have a certain installation that you would frequently re-use (maybe a boot-strapped base installation that does check-in with some sort of automation framework). Alternatively, you might have had an installation at another cloud supplier and would like to re-use it in Binero cloud.

Uploading an image
^^^^^^^^^^^^^^^^^^
To upload an image using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Compute" and then "Images" in the sidebar menu.
- Enter an image name.
- Select and OS-distro and version, as well as architecture. 
- Either select "URL" (and if so, enter the URL to the downloadable image) or "File" (and if so, select a compatible disk image file on your computer for upload). 
- Leave remaining fields empty.
- Press "Create image".

Creating image from instance
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Creating a private image from a current instance (that is, an instance which is running in the cloud) is done with the snapshot instance feature. Please see our :doc:`/storage/snapshots/create-snapshot` article which will detail creating an instance snapshot which is the same thing as creating a private image from a current instance. 

Create instance from image
--------------------------
To create a new compute instance from an image, see our :doc:`launch-instance-from-image` article.


.. toctree::
  :caption: Available services
  :maxdepth: 1

  launch-instance-from-image
  rescue-image
  cloud-init-data
