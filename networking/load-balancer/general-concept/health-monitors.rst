===============
Health monitors
===============

Health monitors checks if a service on a member works as intended.

As such, they are protocol aware (for example by checking a website
by using the HTTP protocol).

You can configure monitors in many ways:

- Protocol type (you cannot change it after deployment).

- Maximums and limits before considering the service down and removed
  from the pool.

- Protocol aware settings such as URLs, paths and codes.

You define a ``health monitor`` per listener. We recommend ensuring that the
``health monitor`` closely matches the listener type.

If you are for example by using load balancing for an HTTP based service, don't
do health checking by pinging the members as this will have almost no bearing on
whether the individual members are working or not and will probably cause faulty
members to remain in the pool.

..  seealso::

    - :doc:`../recommendations`
