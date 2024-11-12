=====
Users
=====

There are four main user types in the Binero cloud platform:

- Main user

- :doc:`/getting-started/managing-your-cloud/account-management-portal` users (same as the main user or a newly create one)

- :doc:`/getting-started/managing-your-cloud/cloud-management-portal` user (the same as the main user)

- API users (created from the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`)

- :ref:`application-credentials-label` (created from :doc:`/getting-started/managing-your-cloud/openstack-horizon` or
  the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` with an API user)

The main user is the user you registered when signing up for the service. It will be an e-mail address, probably of
the person that setup the account.

The main user can be used to login to both the :doc:`/getting-started/managing-your-cloud/account-management-portal` and the
:doc:`/getting-started/managing-your-cloud/cloud-management-portal` but cannot be used for either :doc:`/getting-started/managing-your-cloud/openstack-horizon`,
the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client` or the API which all require an API user. 

For more details, see information on each section below.

Account management portal
-------------------------

To create a user through the :doc:`/getting-started/managing-your-cloud/account-management-portal`, follow these steps:

* From the home screen click **New contact** under the **Contacts** dialog to the right.

* Click **User management**, again to the right.

* Click **Invite new user**. Here you are able to select what permissions the new user
  should have in the account management portal or select all available permissions. 

* Input the users e-mail address.

* Click **Send invite**

The user will receive and e-mail with instructions on how to enroll themselves. 

.. note::

   Users created in the :doc:`/getting-started/managing-your-cloud/account-management-portal` not synced to the
   :doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

To instead add a contact which is mainly useful for sending out information from the platform (for instance invoices to the
billing department) without allowing for logging in to the portal, follow these steps: 

* From the home screen click **New contact** under the **Contacts** dialog to the right.

* Input the contact details.

* Under e-mail settings, choose what types of e-mails the new contact should receive.

* Click **Save changes**

Cloud management portal
-----------------------

The :doc:`/getting-started/managing-your-cloud/cloud-management-portal` has only one user (as opposed to the
:doc:`/getting-started/managing-your-cloud/account-management-portal`) which is the main user.

Users in the :doc:`/getting-started/managing-your-cloud/account-management-portal` can single sign-on directly
to the cloud management portal from the account management portal.

.. tip::

   Because you may want to limit access to your infrastructure, a good first step is to setup additional users in
   the account management portal and reserve the main login for those that need access to the infrastructure in
   the cloud management portal.

.. _api-users-label:

API users
---------

In the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, you are able to setup API users
under **Access and Security** in the main menu.

An API user is a native OpenStack Keystone user that has access to your project, you can use it in the
:doc:`/getting-started/managing-your-cloud/openstack-horizon` or to connect to any of the :ref:`OpenStack API
endpoints <openstack-api-endpoints>`.

An API user cannot login directly to the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`.

To create an API user through the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`, follow
these steps:

* Under **Access and security** in the main menu, click **API users**

* Click the plus sign (+) icon in the lower right corner.

* Select a username (part of the username will be selected for you), password and optionally add a description.

* Click **Create**

The API user will be created with the username style **mainuser@domain.com_choosenusername** (that is, the username
you chose when creating the user will only be part of the total username).

.. tip::

   Provided you want to only use the Horizon interface or work via API, its possible to setup API users as personal
   users for the people managing the infrastructure. The main user should then be limited to the super admin which
   would use it, only to provision API users.

.. _application-credentials-label:

Application Credentials
-----------------------

Using an Application Credentials makes it possible to grant specific access to your application(s) as a user without
sharing the credentials for that user.

The scope of an Application Credential is the same as the user that created it but can be limited by selecting
specific roles or access rules, the resource is owned by the user when created as is tied to it's lifetime.

You can read more about Application Credentials in the official OpenStack documentation
`here <https://docs.openstack.org/keystone/latest/user/application_credentials.html>`_.

Application Credentials can be created using :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
or :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

To create an Application Credential through the :doc:`/getting-started/managing-your-cloud/openstack-horizon`, see steps below:

* Under **Identity** in the main menu, click **Application Credentials**

* Click the **+Create application credentials** button in the top right

* Input a name and optionally a description.

* In the secret field, either input a secret (the "password"). If you don't, one will be generated
  for you (which is recommended)

* Optionally provide an expiration date and time for when to (automatically) deactivate the account

* Under roles, select the appropriate roles. If you don't select a level, the same level as your account will be
  used (member). Creator will allow creation of some objects (secrets) where as reader is read-only.

* Under access rules you are able to give even more granular accesses to various API calls. There is information on how
  this works in the interface. If you don't enter anything here, your user will not be restricted to specific API calls.

* The **Unrestricted** box will allow the Application Credential to create additional users. This is **NOT** recommended.

* Finally, click **Create Application Credential**

.. important::

   Once you've created the Application Credential, you will be given a one-time opportunity to save the credential by
   copying it or downloading it in openrc or YAML format. Once you've pressed close, you will not be able to retrieve
   the secret again.

.. _ec2-credentials-label:

EC2 Credentials
---------------

TODO

..  seealso::
  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/getting-started/managing-your-cloud/account-management-portal`
