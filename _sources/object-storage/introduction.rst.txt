==============================
Introduction to Object Storage
==============================

Object storage works very well for unstructured data sets where data is generally written once
and read once or many times. Static Web content, data backups, archival images, and multimedia
files are best stored as objects.

Our object storage provides you with a S3 and OpenStack Swift compatible API which enables you
to use existing tools in these ecosystems when using our service.

Locations
---------

We provide our object storage service from the **europe-se-1a** availability zone in
our **europe-se-1** region.

We are planning to introduce more availability zones in the near future therefore there
is currently no replication support.

+-------------+-------------------+--------------------------------------+------------------------------------------------------------------+
| Region      | Availability Zone | S3 Endpoint                          | OpenStack Swift Endpoint                                         |
+=============+===================+======================================+==================================================================+
| europe-se-1 | europe-se-1a      | https://object-eu-se-1a.binero.cloud | https://object-eu-se-1a.binero.cloud/swift/v1/AUTH_%(tenant_id)s |
+-------------+-------------------+--------------------------------------+------------------------------------------------------------------+

Use Cases
---------

The below table gives you an overview on what the different storage plans are optimized for.

The default storage plan for new buckets is **gp.recurring** unless other is specified upon creation.

.. note:: Metadata for objects and buckets/containers is always stored on SSD/Flash at no additional cost.

+----------------------+-----------------+------------------+---------------------+-------------------+
|                      | hp.intensive    | gp.recurring     | gp.intermittent     | gp.archive        |
+======================+=================+==================+=====================+===================+
| **Data type**        | Primary         | Primary          | Primary/Secondary   | Secondary/Backups |
+----------------------+-----------------+------------------+---------------------+-------------------+
| **Data set size**    | Small to medium | Small to huge    | Medium to huge      | Large to huge     |
+----------------------+-----------------+------------------+---------------------+-------------------+
| **Data accessed**    | Constantly      | Constantly       | Intermittently      | Seldom            |
+----------------------+-----------------+------------------+---------------------+-------------------+
| **Optimized**        | Fast access and | Recurring access | Intermittent access | Long time storage |
|                      | low latency     |                  |                     |                   |
+----------------------+-----------------+------------------+---------------------+-------------------+
| **Storage medium**   | SSD/Flash       | HDD/Mechanical   | HDD/Mechanical      | HDD/Mechanical    |
+----------------------+-----------------+------------------+---------------------+-------------------+
| **Data reliability** | 99.999%         | 99.999%          | 99.999%             | 99.9%             |
+----------------------+-----------------+------------------+---------------------+-------------------+

hp.intensive
~~~~~~~~~~~~

Applications storing small-to medium-sized objects with a need for consistentently fast access times and lowest latency.

gp.recurring
~~~~~~~~~~~~

*This is the default storage plan for new buckets unless otherwise specified.*

Applications storing medium-to large-sized objects with a need for fast to moderately fast access-times.

gp.intermittent
~~~~~~~~~~~~~~~

General purpose storage for medium-to large-sized objects with a less frequent need for accesses.

gp.archive
~~~~~~~~~~

Archive/Cold storage for medium to large sized objects (backups or long term storage).
Lowest possible price per GB of data stored but higher cost for data access.

Limitations
-----------

S3
~~

Due to a limitation in the authentication backend used we do not support the **Browser Uploads**
and **Chunked Transfers** features when authenticating using AWSv4 signatures.

We do not support bucket names in the DNS hostname instead it must be supplied in the URL,
see the :doc:`s3/public-urls` section.

Getting Started
---------------

S3
~~

The entity containing objects in S3 is called a **Bucket**.

See the :doc:`../managing-your-cloud/openstack-cli` page to get started using the CLI.

Get a access- and secret key with ``openstack ec2 credentials create``.

You can then use these ``s3cmd``, ``aws`` CLI or any other S3 compatible SDK or library.

Example on using the AWS CLI to create a bucket with a specific storage plan.

    aws --endpoint=https://object-eu-se-1a.binero.cloud s3api create-bucket --bucket newbucket --create-bucket-configuration LocationConstraint=europe-se-1:hp.intensive

*Note that the LocationConstraint contains the region name and not availability zone, availability zone is determined by the endpoint used.*


OpenStack Swift
~~~~~~~~~~~~~~~

The entity containing objects in Swift is called a **Container**.

You use your OpenStack credentials to use the OpenStack Swift API.

Containers can be created using the API or from :doc:`../managing-your-cloud/openstack-horizon`.
