===============
Layer7 Policies
===============

General concept
---------------
When using either HTTP or HTTPS as :doc:`listener protocol <../general-concept/listeners>`, you can use various features of the HTTP protocol directly in the load balancer. This is enabled via  Layer 7 Policies. A policy can execute some (basic) functionality:

- Reject, will result in HTTP/1.1 403 Forbidden reply.
- Redirect to pool, will send traffic to another listeners pool. This is a good thing if you already have a pool setup (from another listener) of the same servers and just want to add another listener (for instance when adding HTTP protocol to an already configured HTTPS listener). Another really useful use case could be if you want to run a separate pool for your static content. You can then opt to send for instance traffic to "www.domain.com/js" or "/images" to separate backends that are optimised (maybe via caching) for static content.
- Redirect to URL, this will simply redirect (using a header: location) the request to another URL. Usefull when for instance requiring HTTPS.

The policies will only trigged once you setup a corresponding Layer 7 Rule on them. The rule decides when the policy should trigger. Various *types* of triggers are available:

- Hostname (for instance domain.com)
- Patch (for instance /images)
- File type (for instance .jpeg)
- Header (for instance x-forwarded-for)
- Cookie (for instance phpsessid)

The types take keys when relevant (when specifying for instance cookie, you could specify the cookie "auth_token"). The type can be compared by certain methods: 

- REGEX (regular expressions)
- EQUALS_TO (value is exactly compared)
- STARTS_WITH or ENDS_WITH
- CONTAINS (value contains)

Finally, a value is specified, for instance when comparing hostname, "domain.com" could be specified. The entire evaluation can also be negated, for instance when looking for a non logged in user, you might redirect to login when **not** finding a cookie.

If the Layer7 rule is met, the Layer7 policy will trigger.

.. Tip::
	The official OpenStack support pages have some good examples of Layer 7 policies being used. The `CLI documentation <https://docs.openstack.org/python-octaviaclient/latest/cli/index.html#l7policy>`__ is somewhat comprehensive, for some use cases see the `layer 7 cookbook <https://docs.openstack.org/octavia/queens/user/guides/l7-cookbook.html>`__.

Creating policies
-----------------
To create a Layer 7 policy in Binero.cloud, you have three main options as outlined in the links below. Each option have its pros and cons:

- :doc:`The cloud management portal <cloud-management-portal>` is very easy to use and will get a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced features are not always available.
- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some advanced features might only have a GUI implementation here.
- :doc:`The OpenStack terminal client <openstack-terminal-client>` is a command line implementation of OpenStack Horizon giving terminal oriented users a (very) quick way to access the cloud. The learning curve is steeper than the GUI implementation but the workflow will be very efficient.


.. toctree::
  :caption: Available services
  :maxdepth: 2

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client