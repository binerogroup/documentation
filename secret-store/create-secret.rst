================
Creating secrets
================

Creating a secret in the cloud management portal
------------------------------------------------
To create a `secret <../index>`_ from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Secret management" and then "Secrets" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- Select a user from the dropdown and enter the password for that user along with other details. Credentials of the User are required so that would make him the owner of the secret. 
- Enter a descriptive name of the secret.
- Select what kind of paylod (file or text) and input it. The Payload Data field stores the secret data which will be encrypted and stored. 
- Press "create". The secret is now stored.

Creating a secret using the openstack terminal client
-----------------------------------------------------
To create a :doc:`secret <../index>` from the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow any of these steps:

An example on adding a certificate in binary format which can be used with the loadbalancer for terminating SSL:

- Run this command: ``$ openstack secret store --name='[SECRET_NAME]' -t 'application/octet-stream' -e 'base64' --payload="$(base64 < lb-cert.p12)"``, replacing the name with whatever name you want to call the certificate.

An example of adding a secret for use with object encryption: 

- Run this command: ``$ openstack secret store --name '[SECRET_NAME]' --payload-content-type='application/octet-stream' --payload-content-encoding='base64' --algorithm 'aes' --bit-length 256 --mode 'ctr' --secret-type 'symmetric' --payload [base64_encoded_root_secret]``, replacing the name with whatever name you want to call the secret.