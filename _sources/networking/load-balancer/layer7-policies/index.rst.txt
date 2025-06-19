===============
Layer7 Policies
===============

General concept
---------------

When using either HTTP or HTTPS as :doc:`listener protocol <../general-concept/listeners>`, you
can use features of the HTTP protocol directly in the load balancer.

You can configure Layer 7 policies, below is a couple of examples on what you can
configure a policy to perform.

- ``Reject`` – will result in HTTP/1.1 403 Forbidden reply.

- ``Redirect to pool`` – will send traffic to another listeners pool. This is a good thing if you
  already have a pool setup (from another listener) of the same servers and just want to add
  another listener (for example when adding HTTP protocol to an already configured HTTPS
  listener). Another really useful use case could be if you want to run a separate pool for
  your static content. You can then opt to send for example traffic to ``www.example.com/js``
  or ``/images`` to separate backends that's optimised (maybe via caching) for static content.

- ``Redirect to URL`` – this will redirect (using a header: location) the request to another
  URL. Useful when for example requiring HTTPS.

The policies will only triggered once you setup a corresponding Layer 7 Rule on them. The rule
decides when the policy should trigger. You can select different *types* of triggers:

- ``HOST_NAME`` (for example ``example.com``)

- ``PATH`` (for example ``/images``)

- ``FILE_TYPE`` (for example ``.jpeg``)

- ``HEADER`` (for example ``x-forwarded-for``)

- ``COOKIE`` (for example ``phpsessid``)

Each type has different configurable parameters. You can then select a comparison method such as:

- ``REGEX`` (regular expressions)

- ``EQUALS_TO`` (value is exactly compared)

- ``STARTS_WITH`` or ``ENDS_WITH``

- ``CONTAINS`` (value contains)

Finally, you specify a value that should match in the request, for example when comparing hostname
you could specify ``example.com``.

You can also negate the evaluation, for example when looking for a non logged in
user, you might redirect to login when **not** finding a cookie.

If the Layer7 rule matches, the Layer7 policy will trigger.

.. tip::

   We recommend that you read the `Layer 7 Cookbook <https://docs.openstack.org/octavia/latest/user/guides/l7-cookbook.html>`__
   in the OpenStack documentation.

   See the OpenStack `CLI documentation <https://docs.openstack.org/python-octaviaclient/latest/cli/index.html#l7policy>`__
   for more information about the parameters available.

Creating policies
-----------------

To create a Layer 7 policy in Binero cloud, you have three main options as outlined in the links
below. Each option have its advantages and disadvantages:

- :doc:`The cloud management portal <cloud-management-portal>` is what we recommend and will get
  a user with limited prior knowledge from A to B quickly. The tradeoff is that advanced
  features are not always available.

- :doc:`OpenStack Horizon <openstack-horizon>` is the web interface included in OpenStack. Some
  advanced features might only have a GUI implementation here.

- :doc:`The OpenStack terminal client <openstack-terminal-client>` is a command line implementation
  giving terminal oriented users a quick way to access the cloud. The learning curve is steeper than
  the GUI implementation but the workflow will be efficient.

.. toctree::
  :caption: Available services
  :maxdepth: 2

  cloud-management-portal
  openstack-horizon
  openstack-terminal-client
