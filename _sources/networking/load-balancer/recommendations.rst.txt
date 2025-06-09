=============================
Load Balancer recommendations
=============================

On this page, we give som recommendations for achieving the best possible
load balancing setup in the platform (as well as in general).

- Listeners

  - The Layer 7 policy can help you manage more actions in the load balancer. This
    requires the listener to be in either HTTP or HTTPS mode. A common scenario might
    be to setup a redirect from HTTP -> HTTPS for sites that use HTTPs.

  - A single load balancer can have several listeners. This is useful for when you
    want to have several services published. The load balancer can however only have
    one service per TCP or UDP port so if you for some reason need to have more than
    one application that use the same port, then that would require more than a single
    load balancer.

  - Aside from above, if you want to use different backend pools, its possible to create
    a Layer 7 rule that forward traffic from a certain domain to a different pool. That
    way, using domain names you could host several web applications using different
    backends, on the same load balancer.

  - Terminating HTTPS in the load balancer is a good way to simplify down stream (on the
    instances) as certificate management is done in the load balancer only. Please see
    our guide :doc:`ssl-termination` for more information.

- Pools

  - If your application relies on persistence (via for instance sessions that are local
    to the member), you are able to configure this on the pool. We do however recommend
    using some shared storage (for instance by using NFS) or to use a database for
    sessions. This ensures you wont disrupt your users during situations where it would
    be impossible to honour persistence (for instance during maintenance).

  - From a performance perspective, assuming you don't use local caching on the members,
    using the round robin algorithm and not using persistence will likely be the best option.

  - If you use some kind of caching locally on the member, using persistence or ``source_ip``
    as algorithm would be preferable as you would then hit a warm cache on the same member
    on each request.

- Pool-members

  - Setup identical members. From a performance perspective but also ensure that the members
    run identical software (versions, etc). Automation is a good way to achieve this.

  - If the members are not identical, you may end up in situations where issues are present
    one member which may be difficult to diagnose as only a subset of the requests may end up
    on that member.

  - Its generally better to use many less powerful members than fewer with high performance. Finding
    the sweet spot will depend on your exact use case, however two points are usually true:

    - If one out of two really powerful members are removed, 50% of the capacity of the pool
      is lost. This might overwhelm the remaining server causing a complete outage. If one
      out of ten smaller members are lost, the performance difference should be negligible.

    - Software tends to work better with fewer requests (irrespectively of performance of
      the compute instance) than with many.

  - Make sure you have enough free capacity to loose a member (or even better, two) during
    peak load. A common issue with load balancing is that when the load rise and something
    happens with a single member resulting in its removal, the remaining members are
    overwhelmed from picking up its load, resulting in more removals due to high load leading
    to slower responses and the load balancer timing out. This soon spirals out of control
    where servers "pop" in and out of the pool as the member recovers when removed but then
    gets overwhelmed again.

  - Our recommendation is to have a (Linux) load 15 value of less than 1 per CPU core on the
    members (ideally 0,5) during peak with one member offline (two if high availability is
    important).

  - A good idea might be to add a member to each pool with the backup feature enabled. That
    way, it will receive traffic if all other members are down and could inform of a website
    outage (planned or otherwise).

- Health checking

  - Ensure that your monitor(s) are as closely setup (protocol wise) to the listener type as
    possible. If you are for instance using load balancing for an HTTP based service, don't
    do health checking by pinging the members. Its not uncommon for a server that is
    malfunctioning to still reply to ping (or even still listen on a particular port).

  - Never use ping based health checking. The bare minimum should be a TCP check on the
    service port (which is in itself not as useful as a layer 7 aware check like an HTTP 
    status code).

  - Don't use separate health checking (as in separate ports or IP addresses ). Listening to
    the same application as is being load balanced is preferable.

  - Its possible to create scripts that take many underlying considerations into account and
    having the load balancer test these scripts. This might give even better insight into
    the application.

.. note::

   We recommend using the round-robin algorithm and sizing your system with excess performance
   if availability and end-user experience is important to you.

..  seealso::

    - :doc:`general-concept/index`
