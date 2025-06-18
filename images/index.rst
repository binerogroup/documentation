======
Images
======

The image service in Binero cloud allows you to store and retrieve virtual machine images that
you can populate a :doc:`volume </storage/persistent-block-storage/index>` or boot an
:doc:`instance </compute/index>` from.

The pricing for uploaded images is per gigabyte hour for the combined used space for all your
private images. See our pricing list for more details.

Public images
-------------

Binero cloud provides images of popular virtual machine images and operating systems from
official sources that are publicly available in the platform so that you can get started quickly.

All images uses :doc:`cloud-init <cloud-init>`. Images is always used as a source for volumes
or instances and the images themselves are never written to.

Private images
--------------

You can upload and store images that only you have access to on your account. You can create a
image from an existing :doc:`instance </compute/index>`, this can be useful if you already have
a certain configuration that you want to re-use.

You can bring any image that you want to use, for example from other cloud providers where you
already have a image that you want to use in Binero cloud as well.

Uploading an image
^^^^^^^^^^^^^^^^^^

.. note::

   Customers can only upload private images and cannot set image visibility to public
   or community as that would open up a security vulnerability for malicious images.

To upload an image by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Images** in the sidebar menu

- Click the plus sign (+) in the lower right corner

- Specify a image name

- Select the disk format that the image has

- Select a operating system and version that matches what your image contains

- Set the architecture to x86_64 as this is the only supported architecture

- Set the visibility to private

- You can upload a image either using an URL that's downloaded or
  from a file on your computer, select what you prefer.

- You can leave any remaining fields empty unless you want to fill them
  in as well.

  - If you want to prevent your image from being accidentally deleted you
    can set the image as protected which means you need to un-protect it
    before you can delete the image.

- Click **Create Image**

Creating image from instance
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can create a private image from an existing instance that is available in the cloud
with the snapshot instance feature.

See the :doc:`/storage/snapshots/create-snapshot` documentation that details creating
an instance snapshot that you can then upload as an image.

Create instance from image
--------------------------

To create a new compute instance from an image, see the :doc:`launch-instance-from-image`
documentation.


.. toctree::
  :caption: Available services
  :maxdepth: 1

  launch-instance-from-image
  create-rescue-image
  cloud-init
