===========================================
Designate as authenticator for Lets Encrypt
===========================================
This guide will help you configuring certbot to work with plugins for OpenStack DNS (Designate) to verify Lets Encrypt certificates using DNS for any domain that is running in the Binero.Cloud :doc:`DNS </dns>`. The guide will assume you are using a recent version of Debian or Ubuntu but would likely be applicable for other Linux distributions.

* Install certbot and python package manager pip by running ``$ sudo apt install certbot python3-designateclient python3-pip``. 
* Using pip, install the dns-openstack authenticator-plugin by running ``sudo pip3 install certbot-dns-openstack``.
* Create an :doc:``application credential </getting-started/users>`` with the roles "reader" and "member". Use the following in the access-rule field:

::

  - service: dns
    method: GET
    path: /v2/zones
  - service: dns
    method: GET
    path: /v2/zones/{zone_id}
  - service: dns
    method: GET
    path: /v2/zones/{zone_id}/recordsets
  - service: dns
    method: POST
    path: /v2/zones/{zone_id}/recordsets
  - service: dns
    method: GET
    path: /v2/zones/{zone_id}/recordsets/{recordset_id}
  - service: dns
    method: PUT
    path: /v2/zones/{zone_id}/recordsets/{recordset_id}
  - service: dns
    method: DELETE
    path: /v2/zones/{zone_id}/recordsets/{recordset_id}

* Download the application credential as YAML and save it on your server to the following path: ``/etc/openstack/clouds.yaml``
* Set the permission on the file by running ``$ sudo chown root:root /etc/openstack/clouds.yaml; chmod 600 /etc/openstack/clouds.yaml``.
* You are now able to issue certificates as you would normally do with the exception of adding ``-a dns-openstack`` to the command line, for instance as such: ``$ sudo certbot -a dns-openstack certonly -d example.domain``.
* To change the authentication of any existing certificates you would edit ``/etc/letsencrypt/renewal/example.domain.conf`` and set the authentication option to ``dns-openstack``.
