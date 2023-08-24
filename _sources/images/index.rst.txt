======
Images
======
An image is a collection of a :doc:`persistent volume </storage/persistent-block-storage/index>` and meta data describing a :doc:`compute instance </compute/index>`. From an image, a compute instance can be provisioned, complete with its own persistent storage (for instance with a particular operating system installed and pre-configured). 

Public images
-------------
Binero.Cloud provides and maintains several images of popular operating systems that are publicly available (in the platform) and free for all to use. The following images are available in our image repository: 

- alma-8-x86_64
- centos-7-x86_64
- centos-stream-8-x86_64
- centos-stream-9-x86_64
- cirros-0.4.0-x86_64
- cirros-0.5.1-x86_64
- debian-10-x86_64
- debian-11-x86_64
- fedora-36-x86_64
- fedora-37-x86_64
- fedora-atomic-28
- fedora-atomic-latest
- fedora-coreos-31-x86_64
- opensuse-15-x86_64
- pfsense-ce-2.6.0-x86_64
- rocky-8-x86_64
- ubuntu-bionic-18-x86_64
- ubuntu-focal-20-x86_64
- ubuntu-jammy-22-x86_64
- windows-server-2016-gui-x86_64
- windows-server-2019-gui-x86_64

They can be used to create new instances with the operating systems and architectures that are detailed in their respective name. Each image is configured to honour :doc:`cloud-init data <cloud-init-data>`. An included image is publicly available in the platform but an instance will instantiate its own block device with the image *as base* - meaning that nothing will never write to the actual image.

Private images
--------------
Its possible to create (based on an existing instance) or upload your own image. This might for instance be useful if you have a certain installation that you would frequently re-use (maybe a boot-strapped base installation that does check-in with some sort of automation framework). Alternatively, you might have had an installation at another cloud supplier and would like to re-use it in Binero.Cloud. 

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
  cloud-init-data