=====================================================
Launching routers using the OpenStack terminal client
=====================================================

To launch a `router <../index>`_ from the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run ``openstack availability zone list --network --long``, this will give you the current
  availability zones for routers and networking, to create the router we will need to select
  an availability zone for it. Save the name of the availability zone you want to use for
  following step. If you are unsure, use *europe-se-1a*.

- Run ``openstack network list --external``, this will show the available external networks. Save
  this for next step.

- Run ``openstack router create --availability-zone-hint=[AVAILABILITY ZONE] --external-gateway=[NETWORK-NAME] [ROUTER NAME]``. Replace
  the items within brackets with the values from previous sections as well as the name of the router. Remember to use the network that
  corresponds to the availability zone you chose. If you are not sure what availability zone to use, we recommend using *europe-se-1a*.

.. note::

   In order to connect instances to the router, it will also need a :doc:`network </networking/network/index>`
   and a :doc:`subnet </networking/subnet/index>` configured. 

..  seealso::

    - :doc:`/networking/regions-and-availability-zones`
    - :doc:`/networking/router/index`
