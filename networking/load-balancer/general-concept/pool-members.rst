============
Pool members
============

A member is a compute instance that runs a service (for example Apache).

When load balancing, a member receives proxied requests from the listener
through its membership in the pool.

Members in a pool have their health monitored and are only included in the
load balancer if their health is up, if the health is down they are not
included and thus get no traffic.

Members can have some configuration:

- Explicit monitoring IP addresses or ports if you want to do health
  monitoring on something other than the members own IP address.

- Backup flag - this means that the member is a fallback server if all
  the normal members are down. For instance when doing maintenance on an
  application you can instead show a notification that your site is down
  for maintenance and will be back later.

- You can set a weight so that a member receives a certain amount of the
  requests. A higher weight means more requests, the max value is 256. We
  recommend keeping all weights on members identical for the best request
  distribution.

All members should have an IP on a :doc:`subnet </networking/subnet/index>`.

While the subnet does not have to be the same as the one the listener
uses, its recommended for simplicity as well as performance.

..  seealso::

    - :doc:`../recommendations`
