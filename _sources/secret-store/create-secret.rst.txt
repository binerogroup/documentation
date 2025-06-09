================
Creating secrets
================

Creating a secret in the cloud management portal
------------------------------------------------

To create a `secret <../index>`_ from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Secret management** and then **Secrets** in the sidebar menu.

- Press the "+" icon in the bottom right corner.

- Select a user from the dropdown and enter the password for that user along with other details. Credentials of
  the User are required so that would make him the owner of the secret. 

- Enter a descriptive name of the secret.

- Select what kind of payload (file or text) and input it. The Payload Data field stores the secret data which
  will be encrypted and stored. 

- Press **Create**. The secret is now stored.

Creating a secret using the OpenStack terminal client
-----------------------------------------------------

This shows you how to create a secret :doc:`secret <../index>` using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

Uploading a certificate
^^^^^^^^^^^^^^^^^^^^^^^

This is an example of how to upload a certificate in binary format that can be used for TLS when using
our load balancer service.

::

    openstack secret store --name='[SECRET_NAME]' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < lb-cert.p12)"

Encryption key for object storage
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is an example of how to upload a encryption key that can be used with the SSE-KMS specification
in our :doc:`object storage </storage/object-storage/index>` service.

You can use ``openssl rand -base64 32`` to generate a new encryption key that is base64 encoded.

::

    openstack secret store --name '[SECRET_NAME]' --payload-content-type='application/octet-stream' --payload-content-encoding='base64' --algorithm 'aes' --bit-length 256 --mode 'ctr' --secret-type 'symmetric' --payload [base64_encoded_payload]
