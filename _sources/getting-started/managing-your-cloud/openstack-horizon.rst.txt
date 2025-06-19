=================
OpenStack Horizon
=================

If you have previous experience from working with OpenStack (or are an advanced user), there
is a second portal from which to manage your cloud infrastructure which is the OpenStack Horizon
dashboard, available at https://control.binero.cloud.

You can login here by first `creating an API user </getting-started/users.html#api-users>`_ from
the cloud management portal. An API user is a native OpenStack keystone user.

.. note::

   An API-user is not the same as the user you've logged into the cloud management portal. Please
   see `Users </getting-started/users>`_ for more information on the user concepts in
   Binero cloud.

Unlike `the cloud management portal <cloud-management-portal>`_, Horizon **does** support more than
a single user.

If your use-case calls for personal logins, use the main user only for setting up API users and have
your technical staff login to the Horizon interface instead. 

Some advanced features (as described in this documentation) in the platform will require OpenStack
Horizon, the OpenStack terminal client or the API to complete. 

Binero cloud offers a standard installation of the OpenStack Horizon dashboard to be consistent
with other vendors and private clouds running OpenStack.

It's documented in great detail in the official OpenStack documentation available
`here <https://docs.openstack.org/horizon/latest/user/index.html>`_ and will not be
exhaustively covered in this documentation. 

.. note::

   If you are unfamiliar with OpenStack Horizon and don't explicitly need the more advanced features
   available there, we recommended to use our `cloud management portal <https://portal.binero.cloud>`_
   as it's much easier to use when starting out. 

..  seealso::

  - :doc:`/getting-started/users`
