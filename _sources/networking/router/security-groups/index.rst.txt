===============
Security groups
===============

General concept
---------------

Security groups are used for filtering traffic on ports in the plattform. This is commonly known as "firewalling". Binero cloud will provide a variety of default security groups that could be combined to allow (or by not adding or removing, disallow) traffic to flow through the cloud. One important difference from a traditional network is that security groups are also filtering traffic between instances on the same :doc:`subnet </networking/router/private-subnet/index>`. The default settings (see below) would however allow internal access.

A security group is (as the name implies) a *group* of rules. This makes it easier to setup common use-cases if you have certain access-scenarios (for instance maybe you want to add HTTP, HTTPS and port 8080 from all sources and SSH from a single IP to the majority of servers, this could then be a single group with 4 rules in it).

Managing security groups
------------------------

You are able to manage security groups using either of the below tools. Common tasks involving security groups is creating them (as well as adding rules) and applying them to instances (in order to do traffic filtering).

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to use and will get a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not always available.
- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced features might only have a GUI implementation here.
- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line giving terminal oriented users a (very) quick way to access the cloud. The learning curve is steeper than the GUI implementation but the workflow will be very efficient.

Interface direction
-------------------

As filtering is done on interfaces (ports) on :doc:`instances </compute/index>`, an important concept is the *direction* of the traffic. The direction could either flow **to** the interface on the instance (in which case the traffic is said to be *ingressing* the interface) or **from** the interface on the instance (in which case it is said to be *egressing*). A security group will evaluate traffic in both directions individually. The use-case for this is normally that you would enforce less security on traffic that originates in your instance than traffic that is destined for it (simply because the threats are usually external). A common setup is therefore to allow all outbound (egressing) traffic but filter the inbound (ingressing) traffic to an interface. 

.. note:: There are situations where you might want to filter outbound traffic as well, particularly if your infrastructure is (inadvertently) use for outbound attacks. This is however difficult as returning traffic (the traffic that is sent as an answer to a request to one of the services in your infrastructure) is usually sent to a randomised high port. Outbound filtering is therefore most often used to block something explicitly. Security groups does not support explicit blocking (rather its inferred, if there is not an explicit allow rule, traffic is blocked). 

Default settings
----------------

A newly provisioned instance will have the "Default" security group provisioned. This security group will allow all traffic but only *from other instances that also have the default group* (that is, it also evaluates if the traffic was using this group to **egress** an instance in the cloud). Consequently all traffic within the same network (and also within different networks on the same router) will be allowed but *not* traffic that ingresses via a :doc:`/networking/floating-ips` or from :doc:`another availability zone <../routing-between-networks>` as that traffic will not have originated behind the default group. Removing the default group could potentially remove outbound access to the internet through the router if there are no other security groups available. Thankfully, its easy to restore it again (by just re-adding it). 

.. note:: An instance that does not have a floating IP connected and sits behind a router is not reachable from the internet and is therefore not (as) vulnerable. A floating IP will use :doc:`../nat` to map a public IP to the instance real IP (which is not globally routed). Its good practice to not have floating IPs on instances that does not need to be directly reachable from the internet (because they host internal services - like databases) but this will require a :doc:`a vpn or a bounce server </networking/reaching-your-instances>` to manage the instance.

Allowing access to an instance over floating IP
-----------------------------------------------

A common task relating to security groups is to configure initial access to a new instance with a floating IP. Since a :doc:`floating IP </networking/floating-ips>` is for public access, traffic ingressing via it is not evaluated as coming from the default group. The default group then, becomes invalid as source address meaning you need to explicitly setup access to be able to use a floating IP. To access an instance via a floating IP, you would need to add a security group for the service you want to access. The two main types of access to instance operating systems are SSH (for linux and its derivatives) and RDP (for Windows). Binero cloud comes with security groups for SSH (called bin-ssh) and RDP (called bin-remote-desktop-protocol) pre-configured so you just need to add them to your instances. See above for guides on how to add a security group using the tool you prefer.


Pre-configured security groups
------------------------------

Security groups are local to each project (or customer) in Binero cloud. When signing up, there will be some security groups that are already created in your project. These are intended to simplify to allow traffic to commonly used services (like SSH). A more advanced user might like to create groups based on instance types (so as to add all rules that are needed in a single security group), using the internal groups is however a quick way to get going in the platform. Groups chain, so adding additional groups will provide more rules to the same instance. 

.. important:: The pre-configured groups will all provide an ingress rule as per the groups name but will also provide wide open egress rules from the instance. This is to simplify for users that would just have a single group and then not be able to reach the internet. If your intent is to do outbound filtering, you are able to either remove rules from these groups or create new groups that are similar but without the egress rules. Assuming outbound filtering is not implemented (which would be the most common use case), the egress rules makes no difference. 

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
  designing-rules
