========================
Object storage endpoints
========================
When working with object storage using Binero.cloud, you connect to an API endpoint. This is a HTTP(s) based interface that enables you to get objects from and put objects onto the storage. There are four APIs available per :doc:`availability zone <../regions-and-availability-zones>`, two per protocol (:doc:`s3` and :doc:`swift`), one of which is replicated and one of which is not. 

If you want to use :doc:`replication <replication>` (that is, storing your data on multiple sites), you would use the replicated endpoints below. If you just want to store objects at a single site (or are unsure), you would use the standard endpoints.

europe-se-1a
^^^^^^^^^^^^
- S3 standard: ``https://object-eu-se-1a.binero.cloud``
- S3 replicated: ``https://object-eu-se-1a-rep.binero.cloud``
- Swift standard: ``https://object-eu-se-1a.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``
- Swift replicated: ``https://object-eu-se-1a-rep.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``


europe-se-1b
^^^^^^^^^^^^
- S3 standard: ``https://object-eu-se-1b.binero.cloud``
- S3 replicated: ``https://object-eu-se-1b-rep.binero.cloud``
- Swift standard: ``https://object-eu-se-1b.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``
- Swift replicated: ``https://object-eu-se-1b-rep.binero.cloud/swift/v1/AUTH_[PROJECT_ID]``

..  seealso::
    - :doc:`index`
    - :doc:`s3`
    - :doc:`swift`
