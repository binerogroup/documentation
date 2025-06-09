=============
Server groups
=============

Server groups provide a mechanism for indicating the locality of instances relative to
other instances . They allow you to indicate whether instances should run on the same
hardware (affinity) or different hardware (anti-affinity).

Policies
--------

We support four different policies on a server group.

- **affinity**

  - Restricts instances belonging to the server group to the same host, affinity can
    minimize network latency since instances will be on the same hardware but will decrease
    your fault-tolerance in case of hardware failure.

- **anti-affinity**

  - Restricts instances belonging to the server group to separate hosts, anti-affinity can
    improve your load distribution and fault-tolerance in case of hardware failure.

- **soft-affinity**

  - Same as **affinity** but when it's not possible to schedule then together will use as
    few different hardware as possible.

- **soft-anti-affinity** 

  - Same as **anti-affinity** but when it's not possible to schedule then on different
    hardware will use as many as possible.

.. important::

   We **strongly** recommend using **soft-affinity** or **soft-anti-affinity**, this is because
   we do regular maintenance in our platform and when using the hard policies your instance can
   be powered off if the requirement cannot be met during scheduling.

.. note::

   The anti-affinity policies in themselves does not provide high availability but make the platform
   aware on how you want your instance to be placed during scheduling, your application need to handle
   high availability by using multiple instances.

Creating a server group
-----------------------

Server groups can only be create using :doc:`/getting-started/managing-your-cloud/openstack-horizon` or
the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`.

.. note::

   Instances cannot be added to a server group after it has been created. If you have an existing
   instance you can for example :doc:`recreate <recreating-an-instance-from-volume>` it.

OpenStack Horizon
^^^^^^^^^^^^^^^^^

See :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

- Under **Project**, click **Compute** and then **Server groups** in the sidebar menu.

- Press **Create server group** in the top right corner.

- Choose a name for the server group.

- Choose a policy for the server group, see above.

- Press **Submit**.

The server group is now available when :doc:`creating an instance </compute/launching-an-instance/openstack-horizon>`. 

OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^

See :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`.

- Create the server group with ``openstack server group create --policy [POLICY] [NAME]``

- Verify that the server group is listed in ``openstack server group list``, you need the UUID when creating
  a instance using the CLI.

The server group is now available when :doc:`creating an instance </compute/launching-an-instance/openstack-terminal-client>`
using the ``--hint group=[UUID]`` parameter when using the CLI.
