===============
Health monitors
===============

Health monitors are configured to check if a service on a member works
as intended.

As such, they can be configured to be protocol aware (for instance by
checking a website using the HTTP protocol).

Monitors can be configured in various ways:

- Protocol type (cannot be changed after deployment).

- Various maximums and limits before the service is considered down and removed from the pool.

- Protocol aware settings like URLs, paths and codes.

A monitor is defined per listener. We recommend ensuring that the monitor is
as closely matched to the listener type as possible.

If you are for instance using load balancing for an HTTP based service, don't
do health checking by pinging the members as this will have almost no bearing on
whether the individual members are working or not and will probably cause faulty
members to remain in the pool.

..  seealso::
    - :doc:`../recommendations`
