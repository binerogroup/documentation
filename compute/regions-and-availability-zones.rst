======================================
Compute regions and availability zones
======================================

Compute is a core service and is available in all Binero clouds
regions and availability zones.

A compute instance is local to a single availability zone with no
way to replicate between zones.

Its however possible to move or copy an instance to another zone by
first creating and :doc:`image </images/index>` and then provisioning
a new instance in the new zone based on that image.

.. note::

   While its possible to use stretched networking and run images in several
   availability zones, make sure that your networking isn't reliant on a
   floating IP that is local to a single zone.

   See the :doc:`/networking/regions-and-availability-zones` documentation.

..  seealso::

    - :doc:`/regions-and-availability-zones`
