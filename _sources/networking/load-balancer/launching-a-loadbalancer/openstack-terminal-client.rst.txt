===========================================================
Launching load balancer using the OpenStack terminal client
===========================================================

.. note::

   Before launching your first load balancer, we strongly recommend reading
   our :doc:`concepts <../general-concept/index>` guide to gain a better
   understanding of the parts.

We also recommend setting the correct :doc:`security groups </networking/security-groups/index>`
on the instances that should be members in the load balancing.

Traffic from the load balancer will not come from the default group as the load balancer
is not an instance - this means that explicit rules needs to be setup on the members.

Configuration
-------------

To launch a `load balancer <../index>`_ from the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow
the below steps.

We recommend checking OpenStack Horizon for what options are available or using
the ``-h`` option of the terminal client for more information.

More information is also available `here <https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html>`__.

This documentation aims to show how to get going, not display exhaustive information on each available
option. The example below will load balance HTTP (protocol aware) and thus port 80.

.. note::

   If you want to create a load balancer that terminates SSL/TLS, you first need to :doc:`create the requisite
   certificate </secret-store/create-cert-for-loadbalancing>` in our secret store. We recommend reading
   our :doc:`../ssl-termination` guide before proceeding. 

.. note::

   The brackets in below example commands are for demonstrating values that you need to change.

   The suffixes, for example ``_listener_80``, suggested within brackets are for clarity, with
   the ``NAME`` part to symbolise a common name you pick to identify the load balancer.

   You can use any name for each part of the load balancer. That said, each command will reference
   an earlier example names.

- Run this command: ``openstack subnet list``, save the name of the subnet that your members are on. We
  suggest using the same subnet for the load balancer but if you would rather use another subnet (or have
  members in many subnets), then also save the other subnet names.

- Run this command to create the load balancer: ``openstack loadbalancer create --name [NAME_lb] --vip-subnet-id [SUBNET_NAME]`` replacing
  the subnet name with that from previous step, use ``--availability-zone`` to select a available, if not given
  europe-se-1a will be used by default.

- Run this command until it says that the ``operating_status`` is ``ONLINE``: ``openstack loadbalancer show [NAME_OF_LB]``

- Create a :doc:`listener <../general-concept/listeners>`

  - If you want to create a HTTP listener you can use ``openstack loadbalancer listener create --name [NAME_listener_80] --protocol HTTP --protocol-port 80 [NAME_lb]``.

  - If you want to create a HTTP listener with SSL/TLS termination you can use: ``openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name [NAME_listener_80] --default-tls-container=$(openstack secret list | awk '/ [NAME_OF_SECRET] / {print $2}') [NAME_lb]``

- Run this command to setup the :doc:`pool <../general-concept/pools>`: ``openstack loadbalancer pool create --name [NAME_pool_80] --lb-algorithm ROUND_ROBIN --listener [NAME_listener_80] --protocol HTTP``.

- Run this command to setup health checkers: ``openstack loadbalancer healthmonitor create --delay 5 --max-retries 4 --timeout 10 --type HTTP --url-path / [NAME_pool_80]``.

- Run this command: ``openstack server list``, save the IP addresses of the members you want to add.

- Repeat this command to add the members: ``openstack loadbalancer member create --subnet-id [SUBNET_NAME] --address [IP_OF_MEMBER] --protocol-port 80 [NAME_pool_80]``

.. note::

   The load balancer will take some time to start as its a complex process to create it, this particularly
   applies after the second command above.

If you want to assign a :doc:`floating IP <../../floating-ips>` to your load balancer.

- Run this command: ``openstack loadbalancer list``, save the name of the load balancer you want to verify.

- Run this command: ``openstack loadbalancer show [NAME]``. Replace [NAME] with the name from previous step. Save
  the value of the ``vip_port_id`` of the load balancer.

- Run this command: ``openstack floating ip list``, save an unassigned floating IP.

- If you don't have an unassigned floating IP, follow the steps in the :doc:`floating IP addresses <../../floating-ips>`
  article to assign one to the project.

- Run this command: ``openstack floating ip set --port [VIP_PORT_ID] [FLOATING_IP]``, replace the items in angle
  brackets with data from previous steps.

Verification
------------

To verify that the health checking has added the members to the pool, follow this procedure:

- Run this command: ``openstack loadbalancer pool list``, save the name of the pool containing the members
  you want to check.

- Run this command: ``openstack loadbalancer member list [NAME_OF_POOL]`` (replace the name with the name
  of the pool from previous step).

- Members have **Operating status** of ``ONLINE`` when they are online in the pool.

.. tip::

   If the members are not online, make sure you have the proper :doc:`/networking/security-groups/index` configured
   on the them. If you still cant get the members online, verify by using for example ``tcpdump`` or by reading access
   logs, that the traffic hits the member servers from the load balancers IP.

..  seealso::

    - :doc:`../general-concept/index`
    - :doc:`../recommendations`
    - :doc:`../index`
