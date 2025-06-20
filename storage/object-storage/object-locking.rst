==============
Object locking
==============

.. note::

   :doc:`Versioning <versioning>` of objects are implicitly enabled when using object locking.

.. note::

   Locking an object enforces on the version of the object, deleting an object is still possible but will
   cause a DeleteMarker thus preserving your data even on deletion. See :doc:`/storage/object-storage/versioning`.

Object locking concept
----------------------

Object storage is often used in use-cases where objects gets stored once and read many times. The objects saved
are seldom, if ever, updated but should remain available and protected against accidental or malicious deletions.

To guarantee that an object is not accidentally or intentionally deleted, enable locking. When setting up
locking, it becomes impossible, even for a cloud operator, to delete the object.

Combined with the high availability and data durability of the object storage platform, this adds an extra
layer of data security in the platform.

.. note::

   Object locking can be setup for a certain time. Remember that depending on the mode, you cannot delete the objects
   until the time passes, meaning you will need to pay for the storage of the object until the locking has expired.

Using object locking
--------------------

To create a bucket with support for locking.

.. note::

   Below guide will use the s3 object storage and the `aws` client. We suggest you read
   :doc:`our guide on the same </storage/object-storage/s3>` before proceeding. 

- Run this command to create the bucket: ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api create-bucket --bucket [BUCKET_NAME] --create-bucket-configuration LocationConstraint=europe-se-1:gp.recurring --object-lock-enabled-for-bucket``

- Select either **COMPLIANCE** or **GOVERNANCE** as retention mode. COMPLIANCE will enforce the settings for all users
  (also administrators), GOVERNANCE will allow users with privileges to remove objects or change the retention days.

- Run this command to setup locking on the bucket: ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api put-object-lock-configuration --bucket [BUCKET_NAME] --object-lock-configuration '{ "ObjectLockEnabled": "Enabled", "Rule": { "DefaultRetention": { "Mode": "COMPLIANCE", "Days": 1 }}}'``

Objects are now protected according to the policy and days chosen. See the :doc:`versioning <versioning>` documentation on
how it's enforced with versions.

..  seealso::

  - :doc:`/storage/object-storage/s3`
  - :doc:`/storage/object-storage/versioning`
