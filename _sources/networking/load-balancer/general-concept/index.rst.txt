==============================
Load balancing in Binero cloud
==============================

Load balancers consists of the following constructs:

- The **Listener** is the load balanced service as its presented to
  users. It listens for connections on a port, for example TCP port
  80. You can add one or more listeners to a load balancer after its
  created.

- The **Pool** is the a collection of member instances. It also sets
  the *common configuration* for the pool members included in the pool.

- The **Pool members** are also called backend (or real servers). These
  are compute instances that run a service (such as HTTP for web
  application) to which the load balancer sends requests if the
  member is healthy.

- **Health monitors** checks that a member is healthy, if a member is
  healthy the load balancer will send traffic to the member.

You can read more about the different parts of a load balancer in
their own section.

Load balancers in Binero cloud are highly available and redundant.

You are only able to setup configuration for one protocol (meaning
service type or a TCP or UDP port) at a time, so if you for example
want both HTTP and HTTPS setup, you would start with one (probably
HTTPS, maybe using our :doc:`../ssl-termination` guide) and then setup
the other (probably HTTP with HTTPS redirection) as a *separate listener*
with (if applicable) a separate pool (that could well distribute load to
the same pool members).

.. toctree::
  :caption: Available services
  :maxdepth: 2

  listeners
  pools
  pool-members
  health-monitors

..  seealso::

    - :doc:`../recommendations`
