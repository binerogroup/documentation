=====
Pools
=====

Pools constitute a group of members (compute instances) that provide the
actual service that is being load balanced. Each listener will normally
forward traffic to a member of the pool.

The pool will provide a common configuration for the members:

- Load balancing algoritm which decides how to distribute the requests
  between the members. There are three algorithms to choose between:

  - Least connections, traffic will end up on the pool members that
    currently has the least connections.

  - Round robin, traffic is spread evenly among pool members. 

  - Source IP, traffic from the same source will end up on the same pool
    member when possible. This is similar to persistence (see below) but
    a more crude implementation with less guarantees. This is generally
    called "affinity".

- Session persistence will try to ensure that requests from the same
  source will end up on the same member instance. Depending on what
  listener protocol you will want to use, there are three variants
  of session persistence:

  - Source IP, this simply uses the source IP of the request, much like
    the source IP algorithm. Since a source IP is (very commonly) shared
    among several (in some cases thousand) users, this is a very crude
    way to do persistence.

  - HTTP cookie, the load balancer will create a standard HTTP cookie on
    the client computer and use that information to send the user to the
    same member. It does not take the applications session management
    into consideration.

  - Application cookie, this will use your applications (for instance PHP)
    session management. You would reference to the cookie name, for instance
    "PHPSESSIONID", "ASP.NET_SessionId" or "JSESSIONID". This is the most
    exact way to do persistence.

The pool utilises health monitors to decide if a members should be active
in the pool or not at any given time.

.. tip::

   We recommend avoiding using session persistence but rather to build your
   application stateless, that is, save any session information in for instance
   a database that will always be accessible no matter on which pool member
   the request ends up on.

..  seealso::
    - :doc:`../recommendations`
