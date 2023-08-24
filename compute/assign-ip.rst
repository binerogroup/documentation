========================
Assigning IP to instance
========================

General concept
---------------
An IP address is normally assigned the instance upon :doc:`creation <launching-an-instance/index>`. This is the recommended approach to assigning an IP address (and thus, access to a network) as it will run cloud-init and (provided you've assigned a :doc:`private subnet </networking/virtual-router/private-subnet/index>`) setup your ip-configuration for you. *This is only done on instance provisioning so any additional* :doc:`ports </networking/ports>` *you assign, will have to be manually configured in the OS*. 

Aside from the single IP that is normally setup during provisioning, two main use-cases for connecting additional IPs to an instance exists;

- If your instances needs to be connected to several different networks, this is possible to do when provisioning a new instance as several networks can be chosen. 
- If your instance needs to have additional IPs from the same network, this is doable when launching an instance using OpenStack Horizon or the OpenStack terminal client by first manually creating one ore more additional :doc:`ports </networking/ports>` and assigning them instead of (or as compliment to) the network (which can only be assigned once). A port is always connected to a network (even when not assigned to an instance) - assigning a port is therefore the same thing as assigning a network or ip, the difference being whether or not the port is also created in process.

There is more information on the overall concepts of networking in our :doc:`networking section </networking/index>`.

.. Tip::
	Adding an additional IP using the platform is analogous to adding a :doc:`port </networking/ports>` and connecting it to the instance. This would be required if you wanted your instance to access more then one network. If, however, you want an additional IP on your instance from a network its *already connected to* and you do manual IP-addressing (as might be required when adding a second port in any case), you could use a virtual interface (or alias) on your instance instead. How to do this depends on your Operating System but the concept means adding an additional IP to an already active interface. This would mean keeping a single port but using several IPs on it (which is an easier network design to maintain).

Assigning an IP after instance creation
---------------------------------------
To add an IP after creating your instance, the process consists of either creating a :doc:`port </networking/ports>` and then assigning it to an instance or, as the below guide will detail, connecting an instance to a network (and by doing so, creating a port in the process).

.. Important::
	When adding additional ports to your instances, its possible that your instance might loose its network connectivity when taking the IP-configuration live in the operating system. Its also possible that floating IPs might need to be re-assigned to the new interface depending on if the default route on the instance is affected. We recommend doing changes to interfaces network configuration during a service window. 

.. Note::
	Below will demonstrate how to add networks which will add a port automatically. If you prefer to create the ports yourself (more information in the :doc:`/networking/ports` article), another option is to assign an already created port. 

Assigning a port using the cloud management portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To assign a port to an instance using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow these steps: 

- Press "Compute" and then "Instances" in the sidebar menu.
- Press the instance you want to assign the port to.
- Press the "Network" tab.
- Press the "add port" button.
- Choose the network and subnet you want to connect to.
- Press "add port".

The port will be added to the instance but may not be active as it may not have operating system configuration on it. 

Assigning a port using the OpenStack Horizon portal
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To assign a port to an instance using the :doc:`/getting-started/managing-your-cloud/openstack-horizon`, follow these steps: 

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to resize, press "Attach Interface".
- Under "Network", select the network (it will also show subnets) you want to connect to.
- Press "Attach interface".

The port will be added to the instance but may not be active as it may not have operating system configuration on it. 

Assigning a port using the OpenStack terminal client
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To assign a port to an instance using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`, follow these steps: 

- Run this command: ``$ openstack server list``. Save the name of the instance you want to assign the port to.
- Run this command: ``£ openstack network list``. Save the name of the network you want to connect to the instance. 
- Run this command: ``$ openstack server add fixed ip [SERVER NAME] [NETWORK NAME]``, replacing the values in angle brackets by the information from the previous steps.

The port will be added to the instance but may not be active as it may not have operating system configuration on it. 

.. Note::
	If you remove a current interface and add a new one, you might have problems with UDEV caching because of new mac addresses. This is dependent on the OS, the interface will have been added but UDEV rules need to be removed before the new interface will work. We would recommend making sure that you have :doc:`console access </compute/console>` to your instance and a password to login with, before proceeding. 

..  seealso::
    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
    - :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
    - :doc:`/networking/ports`
    - :doc:`index`