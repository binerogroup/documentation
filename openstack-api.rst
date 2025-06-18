=============
OpenStack API
=============

The OpenStack API is available for managing or performing actions on the resources
in your cloud account.

This is a powerful feature for users that either want to create infrastructure as
code projects or want to integrate with third-party applications to manage your
infrastructure.

The OpenStack API consists of many individual APIs based on what service it provides.

They have in common that an :doc:`API user </getting-started/users>` needs to be available
for authentication to access the APIs on any of the below endpoints.

We keep updated information about the release of the platform along with links to correct APIs
available in our :doc:`OpenStack <openstack>` documentation.

- Function - what services in the platform the API can manage with a link to its section in
  our documentation.

- Service name - the name of the OpenStack feature. With this you can find the relevant section
  in the official API docks.

- API endpoint - the information on where to connect to consume the APIs.

Version
-------

Some of the OpenStack APIs will support different versions for backwards compatibility.

Generally the recommended version is in the URL (where applicable) below but in certain
cases you need to use a certain microversions (for example v2.1 compared to v2.67 for
Nova) for some functionality.

Keystone
--------

Keystone is the identity service in the OpenStack ecosystem that you use to authenticate
using an :doc:`API user </getting-started/users>`.

A good place to start is available in the official
documentation `here <https://docs.openstack.org/keystone/latest/api_curl_examples.html>`_.

You need to authenticate for all API calls, when authenticating for your token a catalog
with endpoints is also returned in the response, for verbosity it's also included below.

.. _openstack-api-endpoints:

Endpoints
---------

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Function
     - Service name
     - URI

   * - `Compute </compute>`_
     - ``nova``
     - https://api-eu-se-1.binero.cloud:8774/v2.1

   * - `Networking </networking>`_
     - ``neutron``
     - https://api-eu-se-1.binero.cloud:9696

   * - `Block storage </storage/persistent-block-storage>`_
     - ``cinderv3``
     - https://api-eu-se-1.binero.cloud:8776/v3/%(tenant_id)s

   * - `Identity </getting-started/users>`_
     - ``keystone``
     - https://auth.binero.cloud:5000

   * - `DNS </dns>`_
     - ``designate``
     - https://api-eu-se-1.binero.cloud:9001

   * - `Object storage </storage/swift-object-storage>`_
     - ``swift``
     - https://object-eu-se-1a.binero.cloud/swift/v1/AUTH_%(tenant_id)s

   * - `Workflows </platform-automation>`_
     - ``mistral``
     - https://api-eu-se-1.binero.cloud:8989/v2

   * - `Images </images>`_
     - ``glance``
     - https://api-eu-se-1.binero.cloud:9292

   * - Metric
     - ``gnocchi``
     - https://api-eu-se-1.binero.cloud:8041

   * - Alarming
     - ``aodh``
     - https://api-eu-se-1.binero.cloud:8042

   * - `Load Balancer </networking/load-balancer>`_
     - ``octavia``
     - https://api-eu-se-1.binero.cloud:9876

   * - `Orchestration </orchestration>`_
     - ``heat``
     - https://api-eu-se-1.binero.cloud:8004/v1/%(tenant_id)s

   * - `Secret store / Key manager </secret-store>`_
     - ``barbican``
     - https://api-eu-se-1.binero.cloud:9311

..  seealso::

  - :doc:`/getting-started/users`
