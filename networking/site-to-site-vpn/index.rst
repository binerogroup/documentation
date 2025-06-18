================
Site-to-site VPN
================

A site-to-site VPN is a tunnel that connects two, or more, sites.

A site can consist of one or more :doc:`subnets <../subnet/index>` that all route over the
tunnel but the standard use case is a single subnet on each side that send its traffic to the
other site through the tunnel where the encrypted traffic provides security from third parties
being able to read the traffic in-transit.

In Binero cloud you are able to provision site-to-site VPNs by using the
`IPsec protocol <https://en.wikipedia.org/wiki/IPsec>`__.

This protocol consists of two phases, the first negotiates encryption for itself (phase 1) and
sets up a tunnel that then kicks off the negotiation for the second phase (phase 2) that is for
the agreed encryption of the traffic send over the tunnel.

Routing is inherent in IPsec as traffic flows between subnets. Because of this, tunnels (phase 2 flows)
are always defined as a single source and destination network. There can be many different flows as
they define traffic flow between one or more subnets.

The VPN service will come with its own management interface (web based) that enables you to manage change
security settings, add or remove flows, and so on.

Complete documentation of all the features our VPN solution provides is out of scope for our support pages
but more information is available on https://www.pfsense.org/get-involved/ and the web in general.

Please see the subsections of this section for the most common information relating to the service. Our
support staff can also help you out.

To create a VPN-tunnel between sites, first read through our :doc:`prerequisites` and then follow our
:doc:`setting-up` guide.

Once done, we provide general guidelines for :doc:`setting up the remote end <configure-remote>` of the
tunnel.

..  seealso::

    - :doc:`../client-vpn/index`

.. toctree::
  :caption: Available services
  :maxdepth: 2

  prerequisites
  setting-up
  configure-remote
  adding-routing-for-vpn
  advanced-configuration
