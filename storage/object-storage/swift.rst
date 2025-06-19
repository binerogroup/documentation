====================
Swift object storage
====================

Swift is the object storage service in the OpenStack ecosystem exposing a HTTP based API
knows as Swift API.

Binero cloud provides it's own object storage service that supports this HTTP based
Swift API.

The Swift API is fully supported within the platform and you are able to run it from any
of our :doc:`../regions-and-availability-zones`, either from one availability zone at a
time or both using :doc:`replication <replication>`.

In Swift terminology a container holds objects and is the same as a
bucket in S3 terminology.

.. tip::

   The Swift implementation does not have as broad support as the :doc:`S3 API <s3>` among
   applications and libraries. If you don't need the Swift API specifically we recommend
   going with the :doc:`S3 API <s3>`.

.. note::

   See :doc:`known limitations <known-limitations>` for more information on compatibility
   and interoperability between the :doc:`S3 <s3>` and :doc:`Swift <swift>` APIs.

Setting up credentials
----------------------

You are able to use the Swift API by using any API-user and setting up application specific
credentials performed in the same manner.

See our :doc:`/getting-started/users` article for more information.

Swift client
------------

While you can use the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` or
:doc:`/getting-started/managing-your-cloud/openstack-horizon` to create and manage containers 
see :doc:`getting-started`), if you want to manage swift storage in another
:doc:`availability zone </storage/regions-and-availability-zones>` than *europe-se-1a* (which is
the only one these tools can access), you will need the swift client. 

If you read our guide :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, chances
are that you've already installed the client, you can test this by running ``swift --version``.

If not, its available via your python package manager (or your operating system package manager) as
``python-swiftclient``.

To use the client, provided you are also using the OpenStack terminal client, you should be able to
re-use the same environmental variables as it does.

That means if you are able to run for example ``openstack server list`` in a terminal, you should also
be able to run ``swift list`` (which will show your buckets in availability zone europe-se-1a) in the same
terminal.

Please see the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` article for more
information.

Client endpoints
^^^^^^^^^^^^^^^^

When you want to use the client with one of the non-default endpoints - that is when you want to use
replicated storage or when you want to use another availability zone, you would use the ``--os-storage-url``
flag with the new endpoint: 

- Run this command: ``openstack project list``, save the ID of the project. 

- Run this command: ``swift --os-storage-url https://object-eu-se-1b.binero.cloud/swift/v1/AUTH_[PROJECT_ID] list``, replacing
  the [PROJECT_ID] with the ID from previous step and using the URL from the :doc:`endpoints` article to reach
  the storage.

.. note::

   Without the ``--os-storage-url`` all requests will go to the non-replicated storage in
   availability zone **europe-se-1a**.

Creating a container
--------------------

To create a container via Swift, you would either use the API (not covered in this documentation) or the swift
client.

To use the latter to create a bucket see below. Add the ``--os-storage-url`` as per above
if you need to change API endpoint.

- Decide which :doc:`storage policy <storage-policy>` you want to use. Save the name.

- Decide if you need to use :doc:`replication <replication>`.

- Decide in what :doc:`availability zone <../regions-and-availability-zones>` to store your
  data, save the name.

- Based on replication (or not) and availability zone, choose the right :doc:`endpoint <endpoints>`. Save
  the endpoint URL.

- Create your container using ``swift post -H "X-Storage-Policy:[STORAGE_POLICY_NAME]" [CONTAINER_NAME]``, add
  the correct information in the command, you can skip specifying a :doc:`storage policy <storage-policy>` in
  which case it will use the default.

- Verify by running the following command ``swift stat [CONTAINER_NAME]``

.. note::

   Please read the section above about client :doc:`endpoints <endpoints>` and add the ``--os-storage-url`` flag
   should you need to use something other than non-replicated storage in availability zone *europe-se-1a*.

Deleting a container
--------------------

.. caution::

   Everything in the bucket will get deleted when you run the below!

To delete a container by using the ``swift`` terminal client.

- Run this command: ``swift list``, save the name of the bucket you want to delete.

- Run this command: ``swift delete [BUCKET_NAME]``, replace [BUCKET_NAME] with the
  name of the bucket. 
