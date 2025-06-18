===================================
Getting started with object storage
===================================

Preparation
-----------

Before getting started, you will need to choose if you want to :doc:`replicate <replication>` your
storage or not.

If you are unsure about replication, we recommend not replicating. Once you know this, you are able to select an
:doc:`endpoint <endpoints>`, which would also depend on what :doc:`availability zone <../regions-and-availability-zones>`
you want to run your requests from.

If you are unsure what availability zone to use, select **europe-se-1a** as endpoint. The combination
of replication (or not) and availability zone will result in an endpoint URL according to our
:doc:`endpoint <endpoints>` article, you will use this endpoint to reach the proper storage backend.

Initial setup
-------------

To get started with storing objects (either S3 or Swift), you create a container or bucket to store the objects in.

You can create container or bucket by using either S3 or Swift, the concept is the same and both APIs can manage
all containers or buckets.

You can use the two GUI portals (the cloud management portal or OpenStack Horizon) to create the container or bucket
(they will use the Swift API), *they are only able to create un-replicated containers or buckets in availability zone
europe-se-1a* (since you cannot specify which endpoint to access).

Because of this, we recommend using the protocols own command line to create the container or bucket:

- :doc:`s3`

- :doc:`swift` 

Above said, its possible to use the following methods to setup a new container or bucket without replication in the
availability zone europe-se-1a if this meets your requirements. Below methods use the Swift API.

.. note::

   By using any of the below methods, you will create a container or bucket without replication in the
   europe-se-1a availability zone.

.. tip::

   We enforce a default quota of 1000 buckets or container in the object storage, contact our support if
   you need more.

Cloud management portal
-----------------------

To create a container by using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Storage** and then **Object storage** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Name your container.

- Select your :doc:`storage policy <storage-policy>`.

.. caution::

   Setting your container as public means anybody with a correct URL can access your
   data without any authentication!

- If you check **public**, users will not need any credentials reach the container (good for when
  using the object storage as a CDN for example).

- Press **Create**

You are now able to upload objects by using the portal, by pressing the container icon and then pressing **Upload file**
or **Create folder**. You are also able to use the container via external access, see each protocol sub-article
for more information.

OpenStack Horizon
-----------------

To create a container by using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Object Store** and then **Containers** in the sidebar menu.

- Click **+ Container**

- Name your container.

- Select your :doc:`storage policy <storage-policy>`.

.. caution::

   Setting your container as public means anybody with a correct URL can access your
   data without any authentication!

- If you select **public** under **Container Access**, users will not any credentials
  to reach the container (good for when using the object storage as a CDN for example). 

- Press **Submit**

You are now able to upload objects by using the portal, by pressing the container name and then pressing
the upload icon (looks like a small upwards facing arrow) or **+ Folder** to create a folder.

You are also able to use the container via external access, see each protocol sub-article for more
information.

OpenStack Terminal Client
-------------------------

To create a container by using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Decide which :doc:`storage policy <storage-policy>` you want to use.

- Run this command: ``openstack container create --storage-policy [STORAGE_POLICY_NAME] [CONTAINER_NAME]``, replacing
  the values in angle brackets.

.. note::

   The above methods will create an container without replication in availability zone europe-se-1a.
