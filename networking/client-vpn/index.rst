==========
Client VPN
==========
A client VPN is a VPN that connects individual computers to a VPN server and then routes some (or all) network traffic through a tunnel between the computer and the VPN server. The traffic is encrypted so it cannot be read by someone in transit. Generally speaking, a client VPN serves a single client (an end-user) but could be configured to work as a :doc:`../site-to-site-vpn/index` as well or instead, depending on how the client in the other end of the tunnel is setup (the server would work the same way).

In Binero.cloud, you are able to provision a client VPN server to which you could then connect and as such, reach the inside of your network through a tunnel. The service is based on OpenVPN technology, which is an open source based VPN suite that runs on an instance on your cloud. There is no additional cost, other than the actual instance hourly cost, to setup a VPN service in our cloud. 

The VPN service will come with its own management interface (web based) that enables you to manage users, change security settings, add 2fa authentication, etc. Complete documentation of all the features our VPN solution provides is out of scope for our support pages but more information is available on https://www.pfsense.org/get-involved/ as well as the web in general. Please see the subsections of this section for the most common information relating to the service. Our :doc:`support staff </general/getting-support>` can also help you out.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  setting-up
  initial-configuration
  user-modes
  managing-users
  logging-in
  networks
  security-settings
  maintenance
