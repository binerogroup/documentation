=================================================
Managing networks using OpenStack terminal client
=================================================

Create a network
----------------

To create a :doc:`network <index>` by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run ``openstack availability zone list --network --long``, this will give you the current availability
  zones for routers and networking. Save this for following step.

- Run ``openstack network create --availability-zone-hint=[AVAILABILITY ZONE] [NETWORK-NAME]``. Replace the
  items within brackets with the values from previous section as well as the name of the router. Remember to
  use the network that corresponds to the availability zone you chose. If you are not sure what availability
  zone to use, we recommend using *europe-se-1a*.

.. note::

   To connect an instance or router to the network, you will also need to create
   a :doc:`subnet </networking/subnet/index>` which you can then attach to an
   interface on a router or an instance.

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
