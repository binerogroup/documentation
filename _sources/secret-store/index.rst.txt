============
Secret Store
============

General concept
---------------

Using our secret store, you are able to give the platform access to secrets such as certificates and keys in a secure manner. We support various secret formats and also incorporate ACLs (Access Control Lists) so as to be able to give certain :doc:`API-user </getting-started/users>` access to secrets while withholding access to other users.

Here are some examples of secrets that could be saved in our secret store:

- Symmetric Keys - Used to perform reversible encryption of data at rest, typically using the AES algorithm set. This type of key is required to enable features like encrypted Swift containers and Cinder volumes, encrypted Cloud Backups, etc.
- Asymmetric Keys - Asymmetric key pairs (sometimes referred to as public / private keys) are used in many scenarios where communication between untrusted parties is desired. The most common case is with SSL/TLS certificates.
- Raw Secrets - Barbican stores secrets as a base64 encoded block of data (encrypted, naturally).

Some of the services in the platform that consume secrets are:

- Object Storage - To encrypt objects in the object store.
- Load Balancer - To manage Octavia HTTPS enabled LB certificate-key pairs.
- Storage - To encrypt volumes and snapshots.
- Compute - To use encrypt volumes and snapshots to create instances.

Secrets
-------

Secrets represent keys, credentials, and other sensitive data that is stored by the secret store service. Following are operations that can be performed on a secret:

- :doc:`Creating secrets <create-secret>`.
- Listing secrets.
- Controlling access to secrets by setting upp :doc:`ACLs (Access Control List) <acl>`.
- Deletion of secret.
- Decryption of secrets.

.. note:: Secrets are only manageable via the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` and via :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`. There is no integration to OpenStack Horizon.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-secret
  acl
  create-cert-for-loadbalancing
