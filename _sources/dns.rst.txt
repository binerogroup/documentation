===
DNS
===

General concept
---------------

Using our DNS feature, you can use the platform to control your DNS (domain) zones.

To start using the feature, first add one or more zones, add the records (A, MX and
so on) and finally change the NS records at your DNS registrar for your domain to our
DNS servers.

- ``ns.binero.eu``

- ``ns.binero.se``

- ``ns.binero.com``

The DNS registrar is the company you pay to register and renew your domain name. **Binero
does not have DNS registrar services**.

.. note::

   The DNS name servers provided by Binero (that is, the servers that answer the DNS
   queries) are not hosted with Binero but with `Netnod <https://www.netnod.se/dns/dns-anycast>`__.

   Netnod has been providing anycast DNS services for more than 20 years and also hosts one
   of the worlds DNS root name servers.


Standard anycast
----------------

By default the DNS service provides standard anycast for your DNS zone. This provides you
with anycast DNS in the nordic region and Stockholm.

Premium anycast
---------------

If you want a global DNS service we also provide premium anycast that gives you global anycast
DNS with locations all around the world, if you want to use our premium anycast, contact our
support and we will help you get started.

.. tip::

   By using our premium anycast DNS service you can lower the response time of DNS queries
   to your DNS zones from all around the world. Contact our support to get started.

Create a zone
-------------

To create a zone, see the guide below to the system you want to use.

Cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^

To setup an DNS zone by using the
:doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **DNS** and then **DNS zones** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- Input your domain name in the **Domain** field. 

- Enter your email address in the email field. This is for notifications.

- Optionally enter a description.

- In the IP-address field, add an IP-address that you want your `www.domain.com` to point to (among
  other things). If you are unsure, leave this field blank. 

To edit a DNS zone by using the
:doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **DNS** and then **DNS zones** in the sidebar menu.

- Press the icon / row on the zone you want to edit. 

- To add a record, press the small **+** (plus) symbol at the bottom and edit the row that will appear on the end. 

- To edit a record, press the record name.

- When done, press **Save all changes**

.. note::

   To edit records for the domains origin (for example an MX record), use the domain itself
   followed by a ``.`` (dot) as subdomain.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

To setup an DNS zone by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **DNS** and then **Zones** in the sidebar menu.

- Click **Create zone** in the right upper corner.

- Input your domain name in the **Name** field. 

- Optionally enter a description.

- Enter your email address in the email field. This is for notifications.

- Press **Submit**

To edit a DNS zone by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **DNS** and then **Zones** in the sidebar menu.

- Press the name of the zone you want to edit. 

- Press the **Record sets** tab.

- To add a record, press the **Create record set** button to the top right. 

- To edit a record, press **Update** next to the right on the row of the record.

OpenStack Terminal Client
^^^^^^^^^^^^^^^^^^^^^^^^^

To setup an DNS zone by using
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack zone create --email [EMAIL_ADDRESS] example.com.``, replacing the
  email address with your email and ``example.com.`` with your domain. Note the dot (``.``) at
  the end of the domain name. 

To add a DNS zone record by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack zone list``, save the UUID from the zone that you want to add/list
  records on. 

- Run this command: ``openstack recordset list [ID]``, replacing the ID with the ID from previous step.

- Run this command: ``openstack recordset create --record [TARGET IP] --type [POINTER TYPE] [DOMAIN ID] [SUBDOMAIN]``, replacing
  the items in angle brackets with correct values. Pointer Type is for example ``A`` or ``MX``, target IP might be a CNAME (if relevant). 
