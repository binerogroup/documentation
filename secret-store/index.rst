============
Secret Store
============

General concept
---------------

Using our secret store, you are able to give the platform access to secrets such as certificates
and keys in a secure manner.

We support different secret formats and also incorporate ACLs (Access Control Lists) allowing you
to give certain :doc:`API-user </getting-started/users>` access to secrets while withholding access
for other users.

Here are some examples of secrets that you can store in our secret store:

- Symmetric Keys - Used to perform reversible encryption of data at rest, typically using the AES
  algorithm set. This is a required type to enable features such as encrypted Swift containers
  and Cinder volumes, encrypted Cloud Backups and so on.

- Asymmetric Keys - Asymmetric key pairs (sometimes referred to as public / private keys) has many
  use-cases, in most scenarios it's used for securing communication between parties. The most common
  case is with SSL/TLS certificates.

- Raw Secrets - Barbican stores secrets as a base64 encoded block of data (that is then stored
  encrypted).

Some of the services in the platform that consume secrets are:

- Object Storage - To encrypt objects in the object store.

- Load Balancer - To manage Octavia HTTPS enabled LB certificate-key pairs.

- Storage - To encrypt volumes and snapshots.

- Compute - To use encrypt volumes and snapshots to create instances.

Secrets
-------

Secrets represent keys, credentials, and other sensitive data stored by the secret
store service. The secret service supports operations such as:

- :doc:`Creating secrets <create-secret>`.

- Listing secrets.

- Controlling access to secrets by setting up :doc:`ACLs (Access Control Lists) <acl>`.

- Deletion of secret.

- Decryption of secrets.

.. note::

   Secrets are only manageable via the :doc:`/getting-started/managing-your-cloud/cloud-management-portal` and
   via :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`. No integration in OpenStack
   Horizon is currently available.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  create-secret
  acl
  create-cert-for-loadbalancing
