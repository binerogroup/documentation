=================
Object encryption
=================

Object encryption concept
-------------------------

.. note::

   Object encryption is a :doc:`S3 API <s3>` feature and will not work the same when using
   the :doc:`Swift API <swift>`.

.. note::

   If you retrieve the object using the :doc:`Swift API <swift>` the data will still be encrypted
   as the decryption is only when using the :doc:`S3 API <s3>`.

.. note::

   When using any of our portals to work with the object storage it is using the :doc:`Swift API <swift>`
   and will thus not decrypt the object upon retrieval.

.. important::

   Do not combine replication with object encryption as this could result in data loss when updating
   objects from both ends.

The object storage service in Binero cloud supports encryption your data at rest (on disk) using different
methods. When objects are retrieved or written to they are transparently decrypted by the platform.

The objects are secured in-transit by using HTTPS with TLS to transport the requests.

The examples in below methods uses the ``aws`` CLI, to get started see our :doc:`S3 documentation <s3>`.

Using server-side encryption with SSE-C
---------------------------------------

The object storage service in Binero cloud supports the customer-provided keys (SSE-C) specification
in the :doc:`S3 API <s3>`.

When using this method you are responsible for sending an encryption key for the object in each API requests to
retrieve or write to it. This needs to be an encryption key that works with AES-256 that is used.

The data is stored at rest (on disk) with your encryption key and the encryption key is not saved by Binero. This way you don't
have to handle the encryption or decryption of objects and only manage the encryption key sent.

To get started with using SSE-C, see below:

- Create a bucket to test with ``aws s3 mb s3://demo``

- Create a random encryption key to use ``openssl rand 32 -out ssec.key``

- Upload a object to the bucket and encrypt it with ``aws s3 cp text.txt s3://demo/text.txt --sse-c AES256 --sse-c-key fileb://ssec.key``

- Download the object that we just uploaded with ``aws s3 cp s3://demo/test.txt test-download.txt --sse-c AES256 --sse-c-key fileb://ssec.key``

Using server-side encryption with SSE-KMS
-----------------------------------------

.. important::

   If the secret in the :doc:`secret store </secret-store/index>` service is deleted, there is no way to recover
   the encrypted objects. Make sure to backup the secret and the data.

The object storage service in Binero cloud also supports the SSE-KMS specification in the :doc:`S3 API <s3>`.

When using this method you create an encryption key and store it in our :doc:`secret store </secret-store/index>` service and send the secret ID
with each API request. This needs to be an encryption key that works with AES-256 that is used.

The data is stored at rest (on disk) with your encryption key and the encryption is stored in the :doc:`secret store </secret-store/index>` service.

To get started with using SSE-KMS, see below:

.. note::

   The ``SECRET_HREF`` mentioned below is for example ``https://api-eu-se-1.binero.cloud:9311/v1/secrets/ea7454d8-d0af-4008-bba4-71245b942bb7`` but
   for your secret and in that case ``SECRET_HREF_ID`` is the UUID ``ea7454d8-d0af-4008-bba4-71245b942bb7`` from that URL

- Create a bucket to test with ``aws s3 mb s3://demo``

- Create a random encryption key that you can store using ``openssl rand -base64 32`` and save the key.

- :doc:`Create a secret </secret-store/create-secret>` in our secret store and save the returned ``Secret href`` value.

- To allow the platform access to your secret (so that it can handle encryption and decryption with the key) you need to add a
  :doc:`ACL </secret-store/acl>` using the :doc:`openstack CLI </getting-started/managing-your-cloud/openstack-terminal-client>` with command ``openstack acl user add --user 23646ed0e7d240ceb56eef6ec909c2ff [SECRET_HREF]``

- Upload a object to the bucket with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3 cp test.txt s3://demo/test.txt --sse=aws:kms --sse-kms-key-id [SECRET_HREF_ID]``

..  seealso::

  - :doc:`s3`
  - :doc:`swift`
