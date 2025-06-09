=================
Known limitations
=================

This documentation tracks any compatibility issues that the :doc:`object storage <index>` service in Binero cloud
exhibits compared to other implementations and interoperability between the :doc:`S3 <s3>` and :doc:`Swift <swift>` APIs.

Browser Uploads and Chunked Uploads in S3 API
---------------------------------------------

The authentication backend used for Binero cloud does not implement all required details from the AWSv4 specification and
therefore the Browser Uploads and Chunked Uploads features in the :doc:`S3 API <s3>` is unsupported.

This is normally not an issue but we've had customers utilizing the official AWS C# SDK encountering the issue
with Chunked Uploads because ``UseChunkEncoding`` in the ``PutObjectRequest`` methods defaults to true, this needs to
be set to false.

Using the Swift API to download a S3 API multipart upload
---------------------------------------------------------

A single upload of a file is limited to 5 GB by design and to upload a larger file than that the multipart upload
features in for example the :doc:`S3 API <s3>` is used. This is usually handled by the client or library that you
use and is not something that you need to thing about, this splits your file into multiple parts and then uploads
them concurrently and the parts is assembled in the platform.

If you upload a large file using the :doc:`S3 API <s3>` and then try to download that using the :doc:`Swift API <swift>` you
will get an error like ``Error downloading [object-name]: md5sum != etag`` indicating the operation failed, but the
object is successfully downloaded. We recommend that you select one API to use for your application and not combining
the usage unless absolutely neccesary.
