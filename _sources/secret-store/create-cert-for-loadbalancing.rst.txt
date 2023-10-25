===========================================================
Creating a certificate for terminating SSL in load balancer
===========================================================
When using the Binero.Cloud platform load balancer to terminate SSL connections directly, you need to have a certificate saved in our :doc:`secret store <index>`. The certificate needs to be created in *pkcs12 format* to work with the load balancer. 

Converting to pkcs12
--------------------
Follow the below steps to create a pkcs12 certificate to use with the load balancing service:

- Gather your certificate *and chain* in a single file. For a letsencrypt certificates there is the file ``/etc/letsencrypt/live/yourdomain.com/fullchain.pem`` that is already prepared for this. If you dont use letsencrypt then you need to make sure you have the full chain of your certificate available and copy it into the same file, for instance like this: ``$ cat /etc/ssl/cert.crt /etc/ssl/chain.crt > new_cert.crt``.
- Make sure you have your key available.
- Run the following command, replacing the items in angle brackets to the correct file names as per previous steps: ``$ openssl pkcs12 -export -in [CERT_FILE_NAME.PEM] -inkey [YOUR_KEY.KEY] -out lb-cert.p12 -passout pass:``
- The new cert (that also includes the key) is stored as "lb-cert.p12".

Uploading the certificate to the secret store
---------------------------------------------
You are able to follow the :doc:`guides for uploading the certificate <create-secret>` to store the certificate, either using the cloud management portal or the terminal client. 

..  seealso::
    - :doc:`/networking/load-balancing/index`