====================
Resizing an instance
====================

If your instance is not sized correctly, wether it has to little resources or
to much, you are able to resize it.

The typical situation might be that your load has increased (maybe you have added
customers to your service or maybe there is a temporary influx in visitors during
for example a campaign) to a point where your application is behaving
sluggish (or not working at all). 

Methods
-------

Resizing (which is the Binero cloud way to scale up) is changing the :doc:`flavor <../flavors>`
on your instance.

You have four main options for how to resize an instance. Each option has its advantages
and disadvantages:

- :doc:`The cloud management portal <cloud-management-portal>` is recommend and will get a
  user with limited prior knowledge from A to B quickly. The tradeoff is that advanced
  features are not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some
  advanced features might only have a GUI implementation here.

- :doc:`OpenStack terminal client <openstack-terminal-client>` is a command line implementation
  of OpenStack Horizon giving terminal oriented users a quick way to access the cloud. The learning
  curve is steeper than the GUI implementation but the workflow will be efficient.

- :doc:`The API </compute/compute-api>` is the full OpenStack REST API. Its intended for users that
  are either writing infrastructure as code or using a third-party application (for example Terraform)
  that needs to reach the cloud provisioning layer directly.

.. note::

   Storage performance is also important. If you've opted for our HDD based storage (which is more cost
   effective and a good choice for use cases that require storage space that is infrequently accessed)
   and notice that your application is experiencing IO wait (which translates to load and slow
   performance), a :doc:`retype </storage/retype-a-volume>` might be the solution.

Scaling methods
---------------

The two main ways are scaling by increasing performance by increasing resources such as CPU or memory
by resizing instances or scaling by adding parallel performance by creating more instances and spreading
out the workload with for example a load balancer.

Scaling up
^^^^^^^^^^

Scaling up (or vertical scaling) is resizing your instance to instantly add more resources to your
existing infrastructure.

While being quick to perform (as its purely reliant on the infrastructure platform and not the
application design), the downside is that there is an effective performance limit before diminishing
returns on adding more performance would kick in. What the limit is, depends on the use-case. 

Scaling out
^^^^^^^^^^^

The opposite method is adding parallel resources (for example more instances) and
using `load balancing </networking/load-balancers>`_) to distribute load between them, this method
is scaling out (or horizontal scaling).

For systems that expects the need to scale many times their initial size, this method is
likely required.

While there are normally bottlenecks in scale out systems as well, they are generally related to
the specific components that make up the system.

A single application (a monolith) might for example still be able to scale well by using load balanced
web servers as frontends and replicated database servers as backends. The web servers will scale pretty
much indefinitely but the database would bottleneck at some point (depending on solution). 

The same system broken into micro services instead scales by adding more resource for the specific
component in the system that needs it. A single micro service would (likely) not hit a performance
ceiling given the proper limitations in its scope. The performance of the application as a whole
is then dependent on the performance of its micro services. 

While microservices is the modern approach to application design (also providing management upsides),
systems that are not expected to grow to users in the millions, might still work well with only load
balancing or on a single server, that instead scales up.

.. toctree::
  :caption: Available services
  :maxdepth: 1

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
