=================
Object encryption
=================

Object encryption concept
-------------------------
Objects stored on the platform can be encrypted at rest (that is, on the storage platform) using a secret that is stored in the platform :doc:`secret store </secret-store/index>`. The benefit is that the objects are secure as stored on the platform. When the objects are accessed, they are transparently decrypted using the same secret. Naturally the objects are secure in transit using HTTPS as carrier.

Object encryption is an :doc:`S3 </storage/object-storage/s3>` feature and will not work using :doc:`Swift </storage/object-storage/swift>`. The object is encrypted using the stored secret upon creation. Below we will show how to setup a secret as well as an example command for creating an encrypted secret using the `aws` klient.  

.. Important::
	Should the stored secret be deleted, there is no way to recover the encrypted objects. Take care to backup the secret.

Using object encryption
-----------------------
To enable object encryption, follow these steps:

.. Note::
	Below guide will use the s3 object storage and the `aws` client. We suggest you read :doc:`our guide on the same </storage/object-storage/s3>` before proceeding. 

- Create a secret to use. One way might be to run the command: ``$ openssl rand -base64 32`` and save the ouput (this is a base64 encoded secret).
- :doc:`Store the secret </secret-store/create-secret>` in our secret store. Make a note of the returned `Secret href` value, which will ve needed in the coming steps.
- The `rgwcrypt` user will need access to the secret to enable encryption. This is done via :doc:`ACLs </secret-store/acl>`. The following command, using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` will set the correct ACL: ``$ openstack acl user add --user 23646ed0e7d240ceb56eef6ec909c2ff [SECRET_HREF]``
- Create an encrypted object in a bucket using the following example command: ``$ aws --endpoint=https://object-eu-se-1a.binero.cloud s3 cp [FILE_NAME] s3://new-bucket/ --sse=aws:kms --sse-kms-key-id [SECRET_HREF_ID]``
- The ``SECRET_HREF_ID`` in the above command is the last part of the ``SECRET_HREF`` value. If the ``SECRET_HREF`` for instance, is ``https://api-eu-se-1.binero.cloud:9311/v1/secrets/ea7454d8-d0af-4008-bba4-71245b942bb7`` then the ``SECRET_HREF_ID`` is ``ea7454d8-d0af-4008-bba4-71245b942bb7``.

.. Important::
	If the key is deleted, the file will not be decrypted (by the platform). 

.. Note::
	If using :doc:`swift </storage/object-storage/swift>` (which is used in the various control panels), the object will not be decrypted on download as this is an S3 feature.



..  seealso::
  - :doc:`/storage/object-storage/s3`
  - :doc:`/storage/object-storage/swift`


