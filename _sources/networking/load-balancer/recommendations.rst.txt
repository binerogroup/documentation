=============================
Load Balancer recommendations
=============================

On this page, we give som recommendations for achieving the best possible
load balancing setup in the platform and in general.

- Listeners

  - The Layer 7 policy can help you manage more actions in the load balancer. This
    requires the listener to be in either HTTP or HTTPS mode. A common scenario might
    be to setup a redirect from HTTP -> HTTPS for sites that use HTTPs.

  - A single load balancer can have many listeners. This is useful for when you
    want to have many services published. The load balancer can only have one service
    per TCP or UDP port so if you for some reason need to have more than one application
    that use the same port, then that would require more than a single load balancer.

  - Aside from above, if you want to use different backend pools, it's possible to create
    a Layer 7 rule that forward traffic from a certain domain to a different pool. That
    way, using domain names you could host many web applications using different backends
    on the same load balancer.

  - Terminating HTTPS in the load balancer is a good way to simplify configuration on the
    instances since you do certificate management in the load balancer only. See our guide
    :doc:`ssl-termination` for more information.

- Pools

  - If your application relies on persistence (for example sessions for users) you are able
    to configure this on the pool. We do recommend using shared storage (for example NFS)
    or to use a database for sessions. This ensures you wont disrupt your users during
    for example maintenance on instances in the pool.

  - From a performance perspective, assuming you don't use local caching on the members,
    using the round robin algorithm and not using persistence will likely be the best option.

  - If you use some kind of caching locally on the member, using persistence or ``source_ip``
    as algorithm would be preferable as you would then hit a warm cache on the same member
    on each request.

- Pool-members

  - Setup identical members. From a performance perspective but also ensure that the members
    run identical software (versions and so on). Automation is a good way to achieve this.

  - If the members are not identical, you can end up in situations where issues are present
    one member making it difficult to diagnose as only a subset of the requests end up on that
    member.

  - Its generally better to use many general purpose members than a few with high performance
    but finding the sweet spot will depend on your exact use-case, but remember that:

    - If one out of two high performance members disappear, you lose 50% of the capacity of
      the pool This might overwhelm the remaining server causing a complete outage. If one
      out of ten general purpose members disappear, the performance impact becomes negligible.

    - Software tends to work better with fewer requests (irrespectively of performance of
      the compute instance) than with many.

  - Make sure you have enough free capacity to loose a member (or even better, two) during
    peak load. A common issue with load balancing is that when the load rise and something
    happens with a single member resulting in its removal, the remaining members are
    overwhelmed from picking up its load, resulting in more removals due to high load leading
    to slower responses and the load balancer timing out. This soon spirals out of control
    where servers flaps in and out of the pool as the member recovers when removed but then
    gets overwhelmed again.

  - Our recommendation is to have a (Linux) load 15 value of less than 1 per CPU core on the
    members (ideally 0,5) during peak with one member offline (two if high availability is
    important).

  - A good idea might be to add a member to each pool with the backup feature enabled. That
    way, it will receive traffic if all other members are down and could inform of a website
    outage (planned or otherwise).

- Health checking

  - Ensure that your monitors are as closely setup (protocol wise) to the listener type as
    possible. If you are for example using load balancing for an HTTP based service, don't
    do health checking by pinging the members. Its not uncommon for a server that is
    malfunctioning to still reply to ping (or even still listen on a particular port).

  - Never use ping based health checking. You should at least check the transport protocol
    such as TCP or UDP but it's even better if you check upper layer 7 protocols such as
    the status code return for HTTP.

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
