===
DNS
===

General concept
---------------

Using our DNS feature, you can use the platform to control your DNS (domain) zones.

In order to start using the feature, first add one or more zones, add the pointers (A, MX, etc) and
finally change the NS pointers at your DNS registrar for your domain to our DNS servers.

- ``ns.binero.eu``
- ``ns.binero.se``
- ``ns.binero.com``

The DNS registrar is the company you pay to register and renew your domain name. **Binero does not DNS registrar services**.

.. note::

   The DNS name servers provided by Binero (that is, the servers that answer the DNS queries) are not hosted with Binero but
   with `Netnod <https://www.netnod.se/dns/dns-anycast>`__. By default, the DNS service does not provide anycast capabilities
   but if you need that, please contact our support and we can help enable it for your DNS zone(s).

Create a zone
-------------

To create a zone, please follow the guide below to the system you want to use: 

Cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^

To setup an DNS zone using the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **DNS** and then **DNS zones** in the sidebar menu.

- Press the "+" icon in the bottom right corner.

- Input your domain-name in the "Domain" field. 

- Enter your e-mail address in the e-mail field. This is for notifications.

- Optionally enter a description.

- In the IP-address field, add an IP-address that you want your `www.domain.com` to point to (among other things). If you are
  unsure, please leave this field blank. 

To edit a DNS zone using the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **DNS** and then **DNS zones** in the sidebar menu.

- Press the icon / row on the zone you want to edit. 

- To add a pointer, press the small "+" symbol at the bottom and edit the row that will appear on the end. 

- To edit a pointer, press the pointer name. 

- When done, press **Save all changes**

.. note::

   To edit pointers for the domains origin (for instance an MX record), use the domain itself
   followed by a "." (dot) as subdomain.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

To setup an DNS zone using :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **DNS** and then **Zones** in the sidebar menu.

- Click **Create zone** in the right upper corner.

- Input your domain-name in the "Name" field. 

- Optionally enter a description.

- Enter your e-mail address in the e-mail field. This is for notifications.

- Press **Submit**

To edit a DNS zone using the :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **DNS** and then **Zones** in the sidebar menu.

- Press the name of the zone you want to edit. 

- Press the **Record sets** tab.

- To add a pointer, press the **Create record set** button to the top right. 

- To edit a pointer, press **Update** next to the right on the row of the pointer.

OpenStack Terminal Client
^^^^^^^^^^^^^^^^^^^^^^^^^

To setup an DNS zone using :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack zone create --email [EMAIL_ADDRESS] example.com.``, replacing the
  e-mail address with your e-mail and "example.com." with your domain. Note the dot (".") at the
  end of the domain name. 

To add a DNS zone record using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack zone list``, save the UUID from the zone that you want to add/list
  records on. 

- Run this command: ``openstack recordset list [ID]``, replacing the ID with the ID from previous step.

- Run this command: ``openstack recordset create --record [TARGET IP] --type [POINTER TYPE] [DOMAIN ID] [SUBDOMAIN]``, replacing
  the items in angle brackets with correct values. Pointer Type is for instance "A" or "MX", target IP might be a CNAME (if relevant). 
