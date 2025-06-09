==========
Versioning
==========

.. note:: Versioning is a :doc:`S3 API <s3>` feature and is also called Bucket Versioning, the 
          data protection it gives when enabled is still enforced if the :doc:`Swift API <swift>` is used.

Versioning concept
------------------

Versioning is a means to keep multiple variants of a object in the same bucket. You can use it to store multiple versions of an
object to preserve, retrieve and restore every version of objects stored in your bucket.

This means that you can get you data back from accidental user actions such as a deleted object or application failures.

If you delete a object instead of permanently delete the object a DeleteMarker is set on the object. If you overwrite a object
instead of overwriting it a new version of the object is uploaded and the original is preserved as a version.

If you list the objects in a bucket it can still says the bucket is empty even though there are objects still stored in the
bucket since there might be older versioning of a object that is not displayed due to DeleteMarkers.

A bucket cannot be permanently deleted until all objects is deleted, with versioning that means deleting all object versions.

Versioning is disabled by default on buckets and needs to be enabled.
          
Using versioning
----------------

This guide uses the :doc:`S3 API <s3>` using the ``aws`` CLI client. See our :doc:`S3 documentation <s3>` to get started.

.. warning:: When enabling versioning on a bucket it can never be disabled again, but it can be suspended on the bucket.

.. note:: Enabling versioning on a bucket only affects new objects after it has been enabled.

- Create a new empty bucket ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api create-bucket --bucket versioning-demo``

- To check versioning configuration on a bucket use ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api get-bucket-versioning --bucket versioning-demo``, this returns nothing for this new empty bucket.

- If we upload a ``test.txt`` object to the bucket now, it won't get any versioning and the delete of that object will be permanent.

  - Upload a ``text.txt`` object from your current directory ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3 cp test.txt s3://versioning-demo/test.txt``

  - Delete the ``test.txt`` object ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3 rm s3://versioning-demo/test.txt``

  - Check that no versioning of the bucket exists ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api list-object-versions --bucket versioning-demo``, this returns nothing.

Now let's enable versioning on the bucket and do the same thing.

- Enable bucket versioning with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api put-bucket-versioning --bucket versioning-demo --versioning-configuration Status=Enabled``

- Upload then delete the ``text.txt`` object the same way as above.

- Now checking again with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api list-object-versions --bucket versioning-demo`` you can see that the
  ``test.txt`` object is still stored in your bucket with a DeleteMarker but still not listed in ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3 ls s3://versioning-demo``

- You can restore the ``test.txt`` by deleting the DeleteMarker, from the above output take the VersionId of the DeleteMarker (not the VersionId of the object version but of the DeleteMarker)
  using ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api delete-object --bucket versioning-demo --key test.txt --version-id [DeleteMarker VersionId]``

- If you now see the ``test.txt`` object again when listing objects with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3 ls s3://versioning-demo``

- To permanently delete the ``test.txt`` object delete all versions, take the VersionId of the object version and delete with
  ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api delete-object --bucket example-bucket --key test.txt --version-id [object VersionId]``

- You can verify it's permanently gone with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api list-object-versions --bucket versioning-demo``, this now returns nothing again.

Please note that a object can have multiple versions if it's overwritten as well so to delete it you would need to list all object
versions and delete them if there was more than one version.

Suspending versioning
---------------------

.. note:: Suspending versioning does not affect objects that already has versioning, only new objects will not be versioned.

If you set versioning to Enabled on a bucket you can never set it back to Disabled again but you can do is set it to Suspended.

To set versioning to Suspended run ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api put-bucket-versioning --bucket versioning-demo --versioning-configuration Status=Suspended``

Swift API and versioning
------------------------

You cannot handle bucket versioning using the :doc:`Swift API <swift>` but the functionality for versioning and DeleteMarkers still apply.

If you upload a object with ``swift upload versioning-demo test.txt`` and then for example delete it with ``swift delete versioning-demo test.txt`` a
DeleteMarker is created and you can view it with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api list-object-versions --bucket versioning-demo``.

..  seealso::
  - :doc:`/storage/object-storage/s3`
  - :doc:`/storage/object-storage/object-locking`
