=================
Reverse DNS (PTR)
=================

General concept
---------------

A PTR (or reverse DNS) record is a DNS record that returns a name from a question containing an IP address.

DNS would normally do the opposite, that is return an IP-address from a domain name. Thus, when having the
IP address but not knowing the name, reverse DNS comes into play. 

The most common use-case for reverse DNS is when setting up an e-mail relay. This is because e-mail servers
normally use their domain name when communicating with each other via the so called HELO (or EHLO) message.

For anti spam purposes, its common on the internet to require that the HELO message (which might be for
example ``smtp.binero.com``) comes from an IP-address that in turn has the same PTR record.

By comparing HELO with the PTR and with a forward lookup (so basically asking what IP-address ``smpt.binero.com``
points to), its less likely that the e-mail is SPAM. 

Aside from this, when doing a traceroute (or other diagnostics involving IP addresses and routing) its good
practice to add a PTR record to understand the routing path by using more human naming.

Using PTR in Binero cloud
-------------------------

PTR is (via the platform) only available on :doc:`floating-ips` (not on :doc:`directly-attached-ips`).

While you would be able to setup a local DNS server on your project to service PTR records for your various
internal IP addresses (as well as directly attached IP addresses), those would not be publicly available on
the internet (since they are on private IP space that many people use). 

TTL
^^^

When adding a PTR record, you will also need to select a TTL (short for *Time To Live*).

This is a value that regulates how long a DNS record should be cached. What this means is that when a PTR record
is looked up by a resolver (which is the server that the end-user would use to lookup DNS names), that resolver
will cache the record for this period of time (in seconds).

This has many advantages, load is distributed and concurrent DNS resolutions of the same domain is done much faster
improving the user experience.

The downside is that when changing a DNS record, it will take this long before you can be sure that the change
is visible worldwide. We recommend an hour (3600 seconds) as a well rounded TTL. 

.. note::

   Setting less than 3600 seconds might appear to work but would be changed to 3600 in the backend as this is
   the smallest number we allow.

Please see below for information on how to setup a PTR record on a floating IP using the various management
tools.

Adding PTR records using the cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a PTR record to a floating IP using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Network** and then ``Floating IPs`` in the sidebar menu.

- On the floating IP that you want to assign the PTR to, press the small "cog" icon "set PTR".

- In the "domain" field, enter the full PTR (for instance ``smtp.binero.com.``). Note the final dot in the example
  which needs to be there (this is the root zone that is most often left out). 

- In the description field, enter an optional description of the IP (for example "external mail relay").

- In the TTL field, enter the TTL (in seconds) you prefer.

- Press **Save**

.. note::

   You are not able to unset a DNS record using the cloud management portal (but you can change it). This can be
   done using either horizon or the terminal client, see below.

Adding PTR records using OpenStack Horizon
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a PTR record to a floating IP using the :doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **DNS** and then **Reverse DNS** in the sidebar menu.

- On the floating IP that you want to assign the PTR to, press the "Set" button.

- In the "domain" field, enter the full PTR (for example ``smtp.binero.com.``). Note the final dot in the
  example which needs to be there (this is the root zone that is most often left out). 

- In the description field, enter an optional description of the IP (for instance "external mail relay").

- In the TTL field, enter the TTL (in seconds) you prefer.

- Press **Save**

- You are also able to unset (as in completely remove) the record using the small arrow next to
  the "Set" button according to above.

Adding PTR records using OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To assign a PTR record to a floating IP using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack floating ip list``. Save the UUID (id column) of the IP you want to set PTR on.

- Run this command: ``openstack ptr record list``. Find the row that matches the UUID from previous command. Save
  the complete id from this command (could look something like this: europe-se-1:2e6a89c0-d8ae-471e-ae28-e858c63c4c6e).

- Run this command: ``openstack ptr record set --description [DESCRIPTION] --ttl 3600 [FLOATING IP ID] [PTR DOMAIN].``. Take
  care to end the PTR name (the domain), with a dot (".") and replace the values within angle brackets with their corresponding
  values. Description is optional.

- You are also able to unset (as in completely remove) the record using the following
  command: ``openstack ptr record unset [FLOATING IP ID]``

.. note::

   To be able to run above terminal client commands, you may need to add support for the designate API to the OpenStack
   terminal client. This could be done on many platforms by running ``pip install python-openstackclient python-designateclient``

..  seealso::

    - :doc:`/dns`
    - :doc:`/networking/floating-ips`
