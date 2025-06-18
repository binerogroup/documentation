===============
Security groups
===============

General concept
---------------

Security groups allows for filtering traffic on :doc:`ports </networking/ports>` in the
platform. This is commonly known as a firewall.

Binero cloud will provide a variety of default security groups that you can combine to allow
(or by not adding or removing, disallow) traffic to flow through the cloud.

One important difference from a traditional network is that security groups are also filtering
traffic between instances on the same :doc:`subnet </networking/subnet/index>`.

The default settings (see below) would allow internal access.

A security group is (as the name implies) a *group* of rules. This makes it easier to setup common
use-cases if you have certain access-scenarios (for example maybe you want to add HTTP, HTTPS and
port 8080 from all sources and SSH from a single IP to the majority of servers, this could then be
a single group with 4 rules in it).

Managing security groups
------------------------

You are able to manage security groups by using either of the below tools.

Common tasks involving security groups is creating them (and adding rules) and applying them
to instances (to filter traffic).

- :doc:`The cloud management portal <cloud-management-portal>` is what we recommended and will get a
  user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are
  not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced
  features might only have a GUI implementation here.

- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line giving terminal oriented
  users a quick way to access the cloud. The learning curve is steeper than the GUI implementation but the
  workflow will be efficient.

Interface direction
-------------------

We perform filtering on interfaces (ports) on :doc:`instances </compute/index>`, an important concept is
the *direction* of the traffic.

The direction could either flow **to** the interface on the instance (*ingress* ) or **from** the interface
on the instance (*egress*).

We filter traffic with security groups in both directions. The use-case for this is normally that you would
enforce less security on traffic that originates (egress) your instance than traffic that ingress because it's
common that threats are external.

A common setup is to allow all outbound (*egress*) traffic but filter the inbound (*ingress*) traffic to an
interface. We still recommend that you also filter outbound as that can protect you from malicious traffic
on your local network if you are ever compromised.

.. note::

   Situations might occur where you might want to filter outbound traffic as well, particularly if your
   infrastructure is inadvertently used for outbound attacks.

   This is difficult as returning traffic (the traffic that's sent as an answer to a request to
   one of the services in your infrastructure) is normally sent to a randomised high port.

   Outbound filtering is most often used to block something explicitly. Security groups does not
   support explicit blocking (rather its inferred, if there is not an explicit allow rule, traffic
   gets dropped). 

Default settings
----------------

A newly provisioned instance will have the ``default`` security group added to its port.

This security group will allow all traffic but only *from other instances that also have the default group* (that
is, it also evaluates if the traffic was using this group to **egress** an instance in the cloud).

This means we allow all traffic within the same network (and also within different networks on the same router)
but **not** traffic that ingresses via a :doc:`/networking/floating-ips` or from
:doc:`another availability zone <../router/routing-between-networks>` as that traffic will not have originated
behind the default group.

Removing the default group could potentially remove outbound access to the internet through the router if there
are no other security groups available. Restoring it in case of any issues is fast, by re-adding it. 

.. note::

   An instance that does not have a floating IP connected and sits behind a router is not reachable from the internet
   and is not as vulnerable.

   A floating IP will use :doc:`../router/nat` to map a public IP to the instance real IP (which is not globally routed).

   Its good practice to not have a floating IP on instances that does not need to be directly reachable from the
   internet (because they host internal services - such as databases) but this will require a
   :doc:`a VPN or a bounce server </networking/reaching-your-instances>` to manage those instances.

Allowing access to an instance over floating IP
-----------------------------------------------

A common task relating to security groups is to configure initial access to a new instance with a floating IP.

Since a :doc:`floating IP </networking/floating-ips>` is for public access, traffic ingress is not evaluated as coming
from the default group and you need to setup explicit security group rules to allow incoming traffic.

To access an instance via a floating IP, you would need to add a security group or security group rules for the service
you want to access.

The two most common types of access to manage operating systems are SSH (for Linux and its derivatives) and RDP (for Windows).

Binero cloud includes security groups for SSH (``bin-ssh``) and RDP (``bin-remote-desktop-protocol``) preconfigured so you just
need to add them to your instances.

See above for guides on how to add a security group by using the tool you prefer.

Pre-configured security groups
------------------------------

Security groups are local to each project (or customer) in Binero cloud.

When signing up, there will be some security groups that are already created in your project. They are there to simplify for
you, making it quick to allow traffic to commonly used services (such as SSH).

A more advanced user might want to create security groups based on instance types (to add all rules that's needed in a single
security group), using the pre-configured security groups is a quick way to get going in the platform.

You can add one or more security groups to ports which combines them together if you don't want to maintain large security
groups.

.. important::

   The pre-configured groups will all provide an ingress rule according to the groups name but will also provide wide open egress
   rules from the instance.

   This is to simplify for users that would just have a single group and then not be able to reach the internet.

   If your intent is to do outbound filtering, you are able to either remove rules from these groups or create new groups that are
   similar but without the egress rules.

   Assuming outbound filtering is not implemented (which would be the most common use case), the egress rules makes no difference. 

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
  designing-rules
