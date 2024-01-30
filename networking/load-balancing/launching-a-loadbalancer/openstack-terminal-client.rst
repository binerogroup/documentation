===========================================================
Launching load balancer using the OpenStack terminal client
===========================================================

Preparations
------------
Before launching your first load balancer, we strongly recommend reading our :doc:`concepts <../general-concept/index>` guide so as to gain a better understanding the various parts. We also recommend setting the correct :doc:`security groups <../../router/security-groups/index>` on the instances that should be members in the load balancing. Traffic from the load balancer will not come from the default group as the load balancer is not an instance - this means that explicit rules needs to be setup on the members.

Configuration
-------------
To launch a `load balancer <../index>`_ from the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow the below steps. We recommend checking OpenStack Horizon for what additional options are available or using the "-h" option of the terminal client for more information. Lots of more information is also available here https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html. This documentation aims to show how to get going, not display exhaustive information on each available option. The example below will load balance HTTP (protocol aware) and thus port 80, this can be adapted.

.. Note::
	If you want to create a load balancer that terminates SSL, you first need to :doc:`create the requisite certificate </secret-store/create-cert-for-loadbalancing>` in our secret store. We recommend reading our :doc:`../ssl-termination` guide before proceeding. Step 4 below could thereafter be replaced by this command: ``$ openstack loadbalancer listener create --protocol-port 443 --protocol TERMINATED_HTTPS --name [NAME_listener_80] --default-tls-container=$(openstack secret list | awk '/ [NAME_OF_SECRET] / {print $2}') [NAME_lb]``

*The brackets are for demonstrating values that need to be customised and should be removed. The suffixes (i.e. "_listener_80") suggested within brackets are for future clarity (with the "NAME" part to symbolise a common name you pick to identify the load balancer), any name could however be chosen for each part of the load balancer. That said, each command will reference an earlier names chosen.*

- Run this command: ``$ openstack subnet list``, save the name of the subnet that your members are on. We suggest using the same subnet for the load balancer but if you would rather use another subnet (or have members in several), then also save the other subnet names.
- Run this command to create the load balancer: ``openstack loadbalancer create --name [NAME_lb] --vip-subnet-id [SUBNET_NAME]`` replacing the subnet name with that from previous step.
- Run this command until it says that the operating_status is "ONLINE": ``$ openstack loadbalancer show [NAME_OF_LB]``
- Run this command to setup the :doc:`listener <../general-concept/listeners>`: ``$ openstack loadbalancer listener create --name [NAME_listener_80] --protocol HTTP --protocol-port 80 [NAME_lb]``.
- Run this command to setup the :doc:`pool <../general-concept/pools>`: ``$ openstack loadbalancer pool create --name [NAME_pool_80] --lb-algorithm ROUND_ROBIN --listener [NAME_listener_80] --protocol HTTP``.
- Run this command to setup health checkers: ``$ openstack loadbalancer healthmonitor create --delay 5 --max-retries 4 --timeout 10 --type HTTP --url-path / [NAME_pool_80]``.
- Run this command: ``$ openstack server list``, save the IPs of the members you want to add. 
- Repeat this command to add the members: ``$ openstack loadbalancer member create --subnet-id [SUBNET_NAME] --address [IP_OF_MEMBER] --protocol-port 80 [NAME_pool_80]``

.. Note::
	The load balancer will take some time to start as its a complex process to create it, this particularly applies after the second command above. 

If you want to assign a :doc:`floating IP <../../floating-ips>` (which is likely), this can be done by following these steps:

- Run this command: ``$ openstack loadbalancer list``, save the name of the load balancer you want to verify.
- Run this command: ``$ openstack loadbalancer show [NAME]``. Replace [NAME] with the name from previous step. Save the value of the "vip_port_id" of the load balancer.
- Run this command: ``$ openstack floating ip list``, save an un-assigned floating IP.
- If you don't have an un-assigned floating IP, follow the steps in the :doc:`floating IPs <../../floating-ips>` article to assign one to the project.
- Run this command: ``$ openstack floating ip set --port [VIP_PORT_ID] [FLOATING_IP]``, replace the items in angle brackets with data from previous steps.

Verification
------------
To verify that the health checking has added the members to the pool, follow this procedure:

- Run this command: ``$ openstack loadbalancer pool list``, save the name of the pool containing the members you want to check.
- Run this command: ``$ openstack loadbalancer member list [NAME_OF_POOL]`` (replace the name with the name of the pool from previous step).
- Members should have "operating status" of "ONLINE" if they are accepted into the pool.

.. Tip::
	If the members are not online, make sure you have the proper :doc:`../../router/security-groups/index` configured on the them. If you still cant get the members online, verify (by using for instance ``$ tcpdump`` or by reading access logs, that the traffic hits the member servers from the load balancers IP. 

..  seealso::
    - :doc:`../general-concept/index`
    - :doc:`../recommendations`
    - :doc:`../index`
