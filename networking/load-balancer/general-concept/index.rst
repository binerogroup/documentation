==============================
Load balancing in Binero cloud
==============================

Load balancers consists of the following constructs:

- The **Listener** is the load balanced service as its presented to users. It listens
  for connections on a port, for example port 80/tcp (additional listeners can be added
  to a load balancer after creation and thus allow for more than a single port). The listener
  gets its own IP on a subnet onto which is normally attached a :doc:`floating IP <../../floating-ips>`
  so as to enable it to be reached from the internet. 

- The **Pool** is the active collection of member instances. It also sets the *common configuration*
  for the pool members that are included in the pool.

- The **Pool members** are also called "real servers". These are compute instances that run a particular
  service (for example HTTPS to serve a web application) to which the load balancer redirects
  its requests. Members are defined statically in the load balancer but it will then add and remove them
  based on their current status.

- **Health monitors** decide dynamically if a member should be included in the pool or not by continuously
  assessing their functionality and removing or adding them automatically based on the result.

The various constructs are discussed in detail in their own sections.

Load balancers are highly available, this means that they are made up from two individually running processes
which work in parallel, one active and one passive. Mostly this is important during maintenance but it could
also help with issues where one load balancer for one reason or another, goes offline. 

You are only able to setup configuration for one protocol (meaning service type or TCP/UDP-port) at a time, so if
you for example want both HTTP and HTTPS setup, you would start with one (probably HTTPS, maybe using our
:doc:`../ssl-termination` guide) and then setup the other (probably HTTP with HTTPS redirection) as a *separate listener*
with (if applicable) a separate pool (that could well distribute load to the same pool members), a load balancer will
support multiple protocols but they are configured one at a time.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  listeners
  pools
  pool-members
  health-monitors

..  seealso::

    - :doc:`../recommendations`
