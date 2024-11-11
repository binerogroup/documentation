======================
Boot from rescue image
======================

Sometimes you need to boot your instance from a ISO image to fix things that are not possible to fix when the filesystem on the boot :doc:`volume </storage/persistent-block-storage/index>` volume is mounted. A rescue image can be used in these scenarios to boot an alternate operating system which can in turn fix the problem(s) with the volume.

While there is a function in the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, it only supports mounting a rescue image on instances that are not booting from a volume (which will be the most common scenario). We will therefore focus on using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` below.

OpenStack Terminal Client
-------------------------
To boot your instance from a rescue image using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- We provide a public `SystemRescue <https://www.system-rescue.org>` image that can be used.
- You can use a custom rescue image or use our guide :doc:`here </images/create-rescue-image>` to create one.
- To connect the image to the instance, run this command ``$ openstack --os-compute-api-version 2.87 server rescue --image <ISO_NAME> <INSTANCE_NAME>``, replacing the <ISO_NAME> with the name from previous step and the <INSTANCE_NAME> with the name of the instance that should mount the image. It takes a few minutes for server to go through a series of states and finally start. Manage server via console.
- When done, un-mount the image by running this command: ``$ openstack server unrescue <INSTANCE_NAME>``.

.. Note::
        If you created custom image and have run ``$ openstack server unrescue <INSTANCE_NAME>``. please remove image or it will consume disk-space and therefore have an hourly cost as per our price list.


..  seealso::
    - :doc:`/images/create-rescue-image`
    - :doc:`index`
