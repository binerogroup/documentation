==========
Versioning
==========

.. note::

   Versioning is a :doc:`S3 API <s3>` feature and is also called Bucket Versioning, the 
   data protection it gives when enabled is still enforced when using the :doc:`Swift API <swift>`.

Versioning concept
------------------

Versioning is a means to keep many variants of an object in the same bucket. You can use it to store many versions of an
object to preserve, retrieve and restore every version of objects stored in your bucket.

This means that you can get you data back from accidental user actions such as a deleted object or application failures.

If you delete an object instead of permanently deleting the object it sets a DeleteMarker on the object. If you overwrite an object
instead of overwriting it a new version of the object gets stored and the original preserved as it's own version.

If you list the objects in a bucket it can still says the bucket is empty even though there are objects still stored in the
bucket since there might be older versioning of an object that is not displayed due to DeleteMarkers.

A bucket cannot be permanently deleted before deleting all objects, with versioning that also means deleting all versions of
all objects.

Versioning is not enabled by default on buckets and thus needs to activated.
          
Using versioning
----------------

This guide uses the :doc:`S3 API <s3>` by using the ``aws`` CLI client. See our :doc:`S3 documentation <s3>` to get started.

.. warning::

   When enabling versioning on a bucket you cannot turned off again, but you can suspended it on the bucket.

.. note::

   Enabling versioning on a bucket only affects new objects after you have enabled it.

- Create a new empty bucket ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api create-bucket --bucket versioning-demo``

- To check versioning configuration on a bucket use ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api get-bucket-versioning --bucket versioning-demo``, this
  returns nothing for this new empty bucket.

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

Please note that an object can have many versions if it's overwritten, so to delete it you would need to list all object
versions and delete them.

Suspending versioning
---------------------

.. note::

   Suspending versioning does not affect objects that already has versioning, it will only suspend versioning on new objects.

If you set versioning to ``Enabled`` on a bucket you can never set it back to ``Disabled`` again but you can set it to ``Suspended``.

To set versioning to Suspended run ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api put-bucket-versioning --bucket versioning-demo --versioning-configuration Status=Suspended``

Swift API and versioning
------------------------

You cannot handle bucket versioning using the :doc:`Swift API <swift>` but the functionality for versioning and DeleteMarkers still apply.

If you upload an object with ``swift upload versioning-demo test.txt`` and then for example delete it with ``swift delete versioning-demo test.txt`` a
DeleteMarker is created and you can view it with ``aws --endpoint=https://object-eu-se-1a.binero.cloud s3api list-object-versions --bucket versioning-demo``.

..  seealso::
  - :doc:`/storage/object-storage/s3`
  - :doc:`/storage/object-storage/object-locking`
