=============
OpenStack API
=============
The OpenStack API is available for managing your resources programatically. This is a very powerful feature for users the either want to create infrastructure as code projects or want to use third party platforms like `Terraform <https://www.terraform.io>`__ to manage their infrastructure. 

The OpenStack API is broken down into smaller parts based on what service is to be manipulated. They have in common that an :doc:`API user </getting-started/users>` is needed to access the API using any of the below endpoints. 

We keep an up-to-date information about the version of the platform along with links to correct APIs available on our :doc:`OpenStack <openstack>` part of this documentation.

- Function - what services in the platform the API can manage with a link to its section in our documentation.
- Service name - the name of the OpenStack feature. With this you can easily find the relevant section in the official API docks.
- API endpoint - where to connect, in order to use the implementation for the eu-se-1 region.

Version
-------
Some of the OpenStack APIs will support multiple versions for backwards compability. Generally the recommended version is included in the URL (where applicable) below but in certain cases microversions might be required (for instance v2.1 vs v2.67 for nova compute) for some functionality.

Keystone
--------
This is the OpenStack authentication mechanism which will enable you to authenticate using an :doc:`API-user </getting-started/users>`. A good place to start is available in the official documentation `here <https://docs.openstack.org/keystone/xena/api_curl_examples.html>`_. Authentication is needed for all API calls. When doing authentication, a catalog of end-points will be provided. For clarity, they current endpoints are also documented below.

Endpoints
---------
.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - Function
     - Service name
     - URI
   * - `compute </compute>`_
     - nova
     - https://api-eu-se-1.binero.cloud:8774/v2.1
   * - `networking </networking>`_
     - neutron
     - https://api-eu-se-1.binero.cloud:9696
   * - `volumes / storage </storage/persistent-block-storage>`_
     - cinderv3
     - https://api-eu-se-1.binero.cloud:8776/v3/%(tenant_id)s
   * - `identity </getting-started/users>`_
     - keystone
     - https://auth.binero.cloud:5000
   * - `dns </dns>`_
     - designate
     - https://api-eu-se-1.binero.cloud:9001
   * - `object-storage </storage/swift-object-storage>`_
     - swift
     - https://object-eu-se-1a.binero.cloud/swift/v1/AUTH_%(tenant_id)s
   * - `workflows </platform-automation>`_
     - mistral
     - https://api-eu-se-1.binero.cloud:8989/v2
   * - `images </images>`_
     - glance
     - https://api-eu-se-1.binero.cloud:9292
   * - metric
     - gnocchi
     - https://api-eu-se-1.binero.cloud:8041
   * - alarming
     - aodh
     - https://api-eu-se-1.binero.cloud:8042
   * - `load-balancing </networking/load-balancers>`_
     - octavia
     - https://api-eu-se-1.binero.cloud:9876
   * - placement
     - placement
     - https://api-eu-se-1.binero.cloud:8778
   * - `orchestration </orchestration>`_
     - heat
     - https://api-eu-se-1.binero.cloud:8004/v1/%(tenant_id)s
   * - `secret store / key manager </secret-store>`_
     - barbican
     - https://api-eu-se-1.binero.cloud:9311



..  seealso::
  - :doc:`/getting-started/users`
