=========================================================
Launching load balancer using the Cloud management portal
=========================================================

Preparations
------------

.. note::

   Before launching your first load balancer, we strongly recommend
   reading our :doc:`concepts <../general-concept/index>` guide to
   gain a better understanding of the parts.

We also recommend setting the correct :doc:`security groups </networking/security-groups/index>`
on the instances that should be members in the load balancer pool.

Traffic from the load balancer will not come from the default group
as the load balancer is not an instance - this means that explicit
rules needs to be setup on the members.

Configuration
-------------

To launch a :doc:`load balancer <../index>` from the
:doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

.. note::

   If you want to create a load balancer that terminates SSL/TLS, you need
   to use :doc:`OpenStack Horizon <openstack-horizon>` or
   :doc:`OpenStack Terminal Client <openstack-terminal-client>`. We also
   recommend reading our :doc:`../ssl-termination` guide first.

- Press **Networking** and then **Load balancers** in the sidebar menu.

- Press the **+** (plus) icon in the lower right corner.

- The first step is to configure the general options for the load balancer. 

  - Name your load balancer. We recommend calling it ``[NAME]_lb`` (replace
    the name with something that's relevant for you). Optionally provide a
    description.

  - Leave the IP field empty, as an IP is automatically allocated.

  - Select the :doc:`availability zone </networking/regions-and-availability-zones>`
    or leave empty to use the default europe-se-1a.

  - Select a :doc:`subnet </networking/subnet/index>` to use for hosting the load
    balancer. We recommend using the same as the subnet where you have your instances
    to load balancer but its not a must.

  - Press **Next**

- The second step sets up the *Listener*. More information :doc:`here <../general-concept/listeners>`.

  - Name your listener. We recommend calling it ``[NAME]_listener_[PORTNUMBER]`` to
    differentiate it from the other parts. Replace the name with the name you chose
    for your load balancer and the port to that of the service you want to load
    balance. Optionally provide a description.

  - Select the load balancer protocol. Note you cannot provision HTTPS with SSL/TLS termination
    from the cloud management portal, but will require OpenStack Horizon (even though its available
    in the menu).

  - *Verify the port number* (it might set automatically but depending on protocol
    you might need to set it manually). Without it, creation will fail.

  - Press **Next**

- The third step is to create the *Pool*. More information :doc:`here <../general-concept/pools>`.

  - Name your pool. We recommend calling it ``[NAME]_pool_[PORTNUMBER]`` to differentiate
    it from the other parts. Replace the name with the name you chose for your load
    balancer and the port to that of the service you want to load balance. Optionally
    provide a description.

  - Select your preferred load balancing algorithm.

  - If you want session persistence, select what type (and if applicable, enter a session name).

  - Press **Next**

- The fourth step assigns *members* (instances) to the pool. More
  information :doc:`here <../general-concept/pool-members>`.

  - Either press **Add external node** and then input the data manually or 

  - Press the small down-arrow next to **Expand to see instances** and then press the
    small **+** plus sign next to the instances you want to add.

  - Select what (IP) port on each instance the service listens on. For example for
    a web server, this would be either 80 or 443.

  - When you've added all instances to the pool, press **Next**. 

- In the fifth and final step, *health monitoring* will be setup. More
  information :doc:`here <../general-concept/health-monitors>`.

  - Name your ``health monitor``. We recommend calling it ``[NAME]_monitor_[PORTNUMBER]`` to
    differentiate it from other the parts. Replace the name with the name you chose for
    your load balancer and the port to that of the service you want to load
    balance. Optionally provide a description.

  - Select the type. This value would depend on what kind of listener you created
    (which protocol). We recommend choosing a type that is as granular (go with HTTP
    than TCP port 80 if you want to check a web server) as possible.

  - Choose the options relating to your ``health monitor``, the defaults will likely suffice
    but this is much dependant on the application.

  - Press **Create load balancer**. 

.. note::

   The load balancer will take some time to start as its a complex process to create it.

Verification
------------

To verify that the health checking has added the members to the pool, follow this procedure:

- Press **Networking** and then **Load balancers** in the sidebar menu.

- Verify that the **Provisioning status** says **Active** under its name and then click it.

- Press the **Pools** tab and then press the name of your pool.

- Press the **Nodes** tab.

- In the list, you should now see the members you've added. The column **Operational status**
  should show you if they are online or not.

.. tip::

   If the members are not online, make sure you have the proper :doc:`/networking/security-groups/index`
   configured on the them. Traffic from the load balancer will not come from the default group as the load
   balancer is not part of your instances - this means that explicit rules needs to be setup on the
   members. If you still cant get the members online, verify (by using for example ``tcpdump`` or by
   reading access logs, that the traffic hits the member servers from the load balancers IP.

..  seealso::

    - :doc:`../general-concept/index`
    - :doc:`../recommendations`
    - :doc:`../index`
