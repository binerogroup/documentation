=========
Listeners
=========

A load balancer can have many listeners, a common setup would be to listen on
both TCP port 80 and TCP port 443 when load balancing connections to a web
application that runs on both HTTP and HTTPS protocols.

Each listener will forward requests to a pool, the members of the pool can be
the same but defined on each pool as they might use different health monitors.

The main option for the listener is what protocol to use. The protocols
available:

- ``TCP`` – this is a standard TCP connection (port proxy). Its not application
  aware but will rather just forward traffic.

- ``UDP`` – same as above but for UDP.

- ``HTTP`` – these are protocol aware and will be able to provide som layer 7
  features relating to the HTTP protocol.

- ``HTTPS`` – same as HTTP but encrypted.

- ``Terminate HTTPS`` – same as HTTPS but will take a HTTPS request and forward it to
  members as HTTP (unencrypted), thus terminating the SSL/TLS connection and negating
  the need to manage certificates on the members servers. To do this, the platform will
  need access to an SSL/TLS certificate via out :doc:`secret store </secret-store/index>`.

.. note::

   HTTP and HTTPS are so called Layer 7 aware (application aware). This means they will also
   take the HTTP protocol into consideration and not just listen on the assigned port.

   While load balancing using protocol TCP and port 80 could work the same way as load balancing
   using protocol HTTP, the difference is that when using HTTP, the load balancer are able to
   use :doc:`../layer7-policies/index` and insert headers, features that work on the application
   layer.

On the listener, you are able to configure settings such as:

- Timeouts for the connection to the listener, we recommend to leave the default values for this. 

- Layer 7 (mainly HTTP) policies enabling for example redirects or rejections directly on the
  listener, negating the need to send requests to members.

- Allowed CIDR prefixes, meaning who can connect. ``0.0.0.0/0`` is the default and matches all networks.

- HTTP headers, for example ``x-forwarded-for``.

To the listener, you would normally (unless the service is internal) connect a
floating IP for accessing the service from the internet. The listener then becomes
the service endpoint for your application from the users perspective.

..  seealso::

    - :doc:`../recommendations`
