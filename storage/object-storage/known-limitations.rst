=================
Known limitations
=================

This documentation tracks any compatibility issues that the :doc:`object storage <index>` service in Binero cloud
exhibits compared to other implementations and interoperability between the :doc:`S3 <s3>` and :doc:`Swift <swift>` APIs.

Browser Uploads and Chunked Uploads in S3 API
---------------------------------------------

The authentication backend used for Binero cloud does not support all details from the AWSv4 specification and
features such as Browser Uploads and Chunked Uploads in the :doc:`S3 API <s3>` is not unsupported.

This is normally not an issue but we've had customers utilizing the official AWS C# SDK encountering the issue
with Chunked Uploads because ``UseChunkEncoding`` in the ``PutObjectRequest`` methods defaults to true, this needs
to be false for it to work.

Using the Swift API to download a S3 API multipart upload
---------------------------------------------------------

You can only upload objects of a max size up to 5 GB for a single upload by design and to upload a larger file than that
you must use the multipart upload features in for example the :doc:`S3 API <s3>`.

This gets handled by the client or library that you use and is not something that you need to thing about, this splits
your file into parts and then uploads them concurrently, the parts is then assembled in the platform.

If you upload a large file by using the :doc:`S3 API <s3>` and then try to download that using the :doc:`Swift API <swift>`
you will get an error such as ``Error downloading [object-name]: md5sum != etag`` indicating the operation failed, but the
object is successfully downloaded. We recommend that you select one API to use for your application and not combining
the usage unless absolutely neccesary.
