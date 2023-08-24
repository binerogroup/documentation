===============================================
Launching load balancer using OpenStack Horizon
===============================================

Preparations
------------
Before launching your first load balancer, we strongly recommend reading our :doc:`concepts <../general-concept/index>` guide so as to gain a better understanding the various parts. We also recommend setting the correct :doc:`security groups <../../virtual-router/security-groups/index>` on the instances that should be members in the load balancing. Traffic from the load balancer will not come from the default group as the load balancer is not an instance - this means that explicit rules needs to be setup on the members.

Configuration
-------------
To launch a :doc:`load balancer <../index>` from the :doc:`OpenStack Horizon portal </getting-started/managing-your-cloud/openstack-horizon>`, follow these steps: 

.. Note::
	If you want to create a load balancer that terminates SSL, you first need to :doc:`create the requisite certificate </secret-store/create-cert-for-loadbalancing>` in our secret store. We recommend reading our :doc:`../ssl-termination` guide before proceeding.

- Under "project", click "Network" and then "Load balancers" in the sidebar menu.
- Click "Create load balancer" in the right upper corner.
- The first step is to configure the general options for the load balancer. 

  - Name your load balancer. We recommend calling it ``[NAME]_lb`` (replace the name with something thats relevant for you). Optionally provide a description. 
  - Leave the IP field empty as an IP will be allocated automatically.
  - Leave the :doc:`availability zone </networking/regions-and-availability-zones>` empty as load balancers are only available in eu-se-1a.
  - Leave the Flavor field empty as selecting a flavor is not supported (there is standardisation on what flavor is used).
  - Select a :doc:`subnet </networking/virtual-router/private-subnet/index>` to use for hosting the load balancer. We recommend using the same as the subnet where you have your instances to load balancer but its not a must. 
  - Press "next".

- The second step sets up the *listener*. More information :doc:`here <../general-concept/listeners>`.

  - Name your listener. We recommend calling it ``[NAME]_listener_[PORTNUMBER]`` to differentiate it from the other parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select the load balancer protocol. 
  - *Verify the port number* (it may set automatically but depending on protocol you may need to set it manually). Without it, creation will fail.
  - Press "next".

- The third step is to create the *pool*. More information :doc:`here <../general-concept/pools>`.

  - Name your pool. We recommend calling it ``[NAME]_pool_[PORTNUMBER]`` to differentiate it from the other parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select your preferred load balancing algorithm.
  - If you want session persistence, select what type (and if applicable, enter a session name).
  - Press "next".

- The fourth step assigns *members* (instances) to the pool. More information :doc:`here <../general-concept/pool-members>`.

  - Either press "add external member" and then input the data manually or 
  - press the "add" button next to the instances you want to add in the list.
  - Select what (IP) port on each instance the service listens on. For instance for a web-service, this would be either 80 or 443.
  - When all instances that should be part of the pool are added, press "next". 

- In the fifth step, *health monitoring* will be setup. More information :doc:`here <../general-concept/health-monitors>`.

  - Name your health monitor. We recommend calling it ``[NAME]_monitor_[PORTNUMBER]`` to differentiate it from other the parts. Replace the name with the name you chose for your load balancer and the port to that of the service you want to load balance. Optionally provide a description.
  - Select the type. This value would depend mostly on what kind of listener you created (which protocol). We recommend choosing a type that is as granular (i.e. rather go with "http" than "tcp port 80" if you want to check a webserver) as possible.
  - Choose the various options relating to your monitor, the defaults will likely suffice but this is very much dependant on the application. 
  - If you've opted for "TERMINATED SSL" when setting up the listener details, you will need to proceed to next step to add your certificates and should then be able to click "Next". If not, the "Next" option is greyed out and you should instead press "Create Load Balancer".

- The sixth step is only relevant when creating an SSL terminating load balancer. In this step, you would choose the certificate that the load balancer should use to terminate SSL connections. To do this, you first need to have a :doc:`certificate </secret-store/create-cert-for-loadbalancing>` added to the secret store.


.. Note::
	The load balancer will take some time to start as its a complex process to create it. 

Verification
------------
To verify that the health checking has added the members to the pool, follow this procedure:

- Under "project", click "Network" and then "Load balancers" in the sidebar menu.
- Verify that the "operating status" says "Online" as well as "provisioning status" says "Active" on the load balancer and then press its name.
- Press the "pools" tab and then press the name of your pool.
- Press the "members" tab.
- In the list, you should now see the member(s) you've added. The column "Operating status" should show you if they are online or not. 

.. Tip::
	If the members are not online, make sure you have the proper :doc:`../../virtual-router/security-groups/index` configured on the them. If you still cant get the members online, verify (by using for instance ``$ tcpdump`` or by reading access logs, that the traffic hits the member servers from the load balancers IP. 


..  seealso::
    - :doc:`../general-concept/index`
    - :doc:`../recommendations`
    - :doc:`../index`