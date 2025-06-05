========================
Object storage endpoints
========================

When using the object storage service in Binero cloud you connect to a HTTP based API endpoint using
any of the available APIs (S3 or Swift API).

This is how you interact with the object storage service by sending HTTP API requests to for example
get an object or put an object into the object storage.

The object storage is provided over four different HTTP based endpoints per :doc:`availability zone <../regions-and-availability-zones>`,
two per API (:doc:`S3 API <s3>` and :doc:`Swift API <swift>`), one is standalone (without replication)
and one is with replication, using replication will cause your bucket to be replicated between the availability
zones in the same region.

If you want to use :doc:`replication <replication>`, you would use the replicated endpoints. If you just want
to store objects in one availability zone or are unsure on what to choose, you would use the standalone endpoints.

europe-se-1a
^^^^^^^^^^^^

- S3 standalone: ``https://object-eu-se-1a.binero.cloud``

- S3 replicated: ``https://object-eu-se-1a-rep.binero.cloud``

- Swift standalone: ``https://object-eu-se-1a.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``

- Swift replicated: ``https://object-eu-se-1a-rep.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``

europe-se-1b
^^^^^^^^^^^^

- S3 standalone: ``https://object-eu-se-1b.binero.cloud``

- S3 replicated: ``https://object-eu-se-1b-rep.binero.cloud``

- Swift standalone: ``https://object-eu-se-1b.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``

- Swift replicated: ``https://object-eu-se-1b-rep.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``

..  seealso::

    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
