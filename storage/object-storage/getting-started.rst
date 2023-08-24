===================================
Getting started with object storage
===================================

Preparation
-----------
Before getting started, you will need to choose if you want to :doc:`replicate <replication>` your storage or not. If you are unsure, we recommend not replicating. Once you know this, you are able to select an :doc:`endpoint <endpoints>`, which would also depend on what :doc:`availability zone <../regions-and-availability-zones>` you want to run your requests from. If you are unsure, select **europe-se-1a** as endpoint. The combination of replication (or not) and availability zone will result in an endpoint URL as is defined in our :doc:`endpoint <endpoints>` article, you will use this endpoint to reach the proper storage backend.

Initial setup
-------------
To get started with storing objects (either S3 or Swift), you create a bucket to store the objects in. Creating a bucket can be done as either S3 or Swift, the concept is the same and both protocols can use each others buckets. You can use the two GUI portals (the cloud management portal or OpenStack Horizon) to create the bucket (they will use the Swift protocol) *however they are only able to create un-replicated buckets in availability zone europe-se-1a* (since you cannot specify which endpoint to access). Because of this, we recommend using the protocols own command line to create the bucket:

- :doc:`s3`
- :doc:`swift` 

Above said, its possible to use the following methods to setup a new un-replicated bucket in availability zone europe-se-1a if this meets your requirements. Below methods use the swift protocol. 

.. Note::
	By using any of the below methods, you will create an un-replicated bucket in the europe-se-1a availability zone.

Cloud management portal
-----------------------
To create a bucket using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Storage" and then "Object storage" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Name your bucket.
- Select your :doc:`storage policy <flavors>`.
- If you check "public", there will not be need for credentials to reach the bucket (good for when using the object storage as a CDN for instance). 
- Press "create".

You are now able to upload objects using the portal, by pressing the container icon and then pressing "upload file" or "create folder". You are also able to use the bucket via external access, see each protocol sub-article for more information.

OpenStack Horizon
-----------------
To create a bucket using :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "Object Store" and then "Containers" in the sidebar menu.
- Click "+ Container".
- Name your bucket.
- Select your :doc:`storage policy <flavors>`.
- If you select "public" under "Container Access", there will not be need for credentials to reach the bucket (good for when using the object storage as a CDN for instance). 
- Press "Submit".

You are now able to upload objects using the portal, by pressing the container name and then pressing the upload icon (looks like a small upwards facing arrow) or "+ Folder" to create a folder. You are also able to use the bucket via external access, see each protocol sub-article for more information.

OpenStack Terminal Client
-------------------------
To create a bucket using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps:

- Select which :doc:`storage policy <flavors>` you want to use.
- Run this command: ``$ openstack container create --storage-policy [FLAVOR_NAME] [BUCKET_NAME]``, replacing the values in angle brackets.

.. Note::
	All of the above methods will result in an un-replicated bucket being created in availability zone europe-se-1a.