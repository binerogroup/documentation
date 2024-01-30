=========================================================
Launching load balancer using the Cloud management portal
=========================================================

Preparations
------------
Before launching your first load balancer, we strongly recommend reading our :doc:`concepts <../general-concept/index>` guide so as to gain a better understanding the various parts. We also recommend setting the correct :doc:`security groups <../../router/security-groups/index>` on the instances that should be members in the load balancing. Traffic from the load balancer will not come from the default group as the load balancer is not an instance - this means that explicit rules needs to be setup on the members.

Configuration
-------------
To launch a :doc:`load balancer <../index>` from the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`, follow these steps: 

.. Note::
	If you want to create a load balancer that terminates SSL, you need to use :doc:`OpenStack Horizon <openstack-horizon>` or :doc:`OpenStack Terminal Client <openstack-terminal-client>`. We also recommend reading our :doc:`../ssl-termination` guide first.

- Press "Networking" and then "Load balancers" in the sidebar menu.
- Press the "+" icon in the bottom right corner.
- The first step is to configure the general options for the load balancer. 

  - Name your load balancer. We recommend calling it "[NAME]_lb" (replace the name with something thats relevant for you). Optionally provide a description. 
  - Leave the IP field empty as an IP will be allocated automatically.
  - Leave the :doc:`availability zone </networking/regions-and-availability-zones>` empty as load balancers are only available in eu-se-1a.
  - Select a :doc:`private subnet </networking/router/private-subnet/index>` to use for hosting the load balancer. We recommend using the same as the subnet where you have your instances to load balancer but its not a must. 
  - Press "next".

- The second step sets up the *listener*. More information :doc:`here <../general-concept/listeners>`.

  - Name your listener. We recommend calling it ``[NAME]_listener_[PORTNUMBER]`` to differentiate it from the other parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select the load balancer protocol. Note that https with SSL termination is not able to be provisioned from the cloud management portal, but will require OpenStack Horizon (even though its available in the menu).
  - *Verify the port number* (it may set automatically but depending on protocol you may need to set it manually). Without it, creation will fail.
  - Press "next".

- The third step is to create the *pool*. More information :doc:`here <../general-concept/pools>`.

  - Name your pool. We recommend calling it ``[NAME]_pool_[PORTNUMBER]`` to differentiate it from the other parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select your preferred load balancing algorithm.
  - If you want session persistence, select what type (and if applicable, enter a session name).
  - Press "next".

- The fourth step assigns *members* (instances) to the pool. More information :doc:`here <../general-concept/pool-members>`.

  - Either press "add external node" and then input the data manually or 
  - press the small down-arrow next to "expand to see instances" and then press the small "+" sign next to the instances you want to add.
  - Select what (IP) port on each instance the service listens on. For instance for a web-service, this would be either 80 or 443.
  - When all instances that should be part of the pool are added, press "next". 

- In the fifth and final step, *health monitoring* will be setup. More information :doc:`here <../general-concept/health-monitors>`.

  - Name your health monitor. We recommend calling it ``[NAME]_monitor_[PORTNUMBER]`` to differentiate it from other the parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select the type. This value would depend mostly on what kind of listener you created (which protocol). We recommend choosing a type that is as granular (i.e. rather go with "http" than "tcp port 80" if you want to check a webserver) as possible.
  - Choose the various options relating to your monitor, the defaults will likely suffice but this is very much dependant on the application. 
  - Press "create load balancer". 

.. Note::
	The load balancer will take some time to start as its a complex process to create it. 

Verification
------------
To verify that the health checking has added the members to the pool, follow this procedure:

- Press "Networking" and then "Load balancers" in the sidebar menu.
- Verify that the "provisioning status" says "Active" as well as "Online" under its name and then press it.
- Press the "pools" tab and then press the name of your pool.
- Press the "nodes" tab.
- In the list, you should now see the member(s) you've added. The column "Operational status" should show you if they are online or not. 

.. Tip::
	If the members are not online, make sure you have the proper :doc:`../../router/security-groups/index` configured on the them. Traffic from the load balancer will not come from the default group as the load balancer is not part of your instances - this means that explicit rules needs to be setup on the members. If you still cant get the members online, verify (by using for instance ``$ tcpdump`` or by reading access logs, that the traffic hits the member servers from the load balancers IP. 

..  seealso::
    - :doc:`../general-concept/index`
    - :doc:`../recommendations`
    - :doc:`../index`
