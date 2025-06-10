=========
Listeners
=========

A load balancer can have several listeners, a common setup would be to listen
on both port 80/tcp and port 443/tcp when load balancing connections to a web
application that runs on both HTTP and HTTPS protocols.

Each listener will forward requests to a pool, the members of the pool can be
the same but they are defined on each pool as they might use different health
checkers.

The main option for the listener is what protocol to use. The protocols
available:

- TCP, this is a standard TCP connection (basically a port proxy). Its not
  application aware but will rather just forward traffic.

- UDP, same as above but for UDP.

- HTTP, these are protocol aware and will be able to provide som layer 7 features
  relating to the HTTP protocol.

- HTTPS, same as HTTP but encrypted.

- Terminate HTTPS, same as HTTPS but will take a HTTPS request and forward it to
  members as HTTP (unencrypted), thus terminating the SSL connection and negating
  the need to manage certificates on the members servers. In order to do this, the
  platform will need access to an SSL certificate via out :doc:`secret store </secret-store/index>`.

.. note::

   HTTP and HTTPS are so called Layer7 aware. This means they will also take the HTTP protocol
   into consideration and not just listen on the assigned port. While load balancing using protocol
   TCP and port 80 could work the same way as load balancing using protocol HTTP, the difference is
   that when using HTTP, the load balancer are able to use :doc:`../layer7-policies/index` as well as
   insert headers, features that work on the application layer and not just layer 3 (the ip-protocol layer).

On the listener, you are able to configure various settings:

- Timeouts for the connection to the listener, we do however recommend to leave the default values for this. 

- Layer 7 (mainly HTTP) policies enabling for example redirects or rejections directly on the
  listener, negating the need to send requests to members.

- Allowed CIDR prefixes, meaning who can connect. 0.0.0.0/0 is the default and means "all networks".

- HTTP headers, for example ``x-forwarded-for``.

To the listener, you would normally (unless the service is internal) connect a
floating IP for accessing the service from the internet. The listener then becomes
the service endpoint for your application from the users perspective.

.. important::

   In some circumstances, the listener can be disabled. Verify its status, if you don't have
   connectivity and enable it again by editing it.

..  seealso::

    - :doc:`../recommendations`
