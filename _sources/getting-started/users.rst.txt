=====
Users
=====

The Binero cloud platform has four main user types:

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

To instead add a contact which is mainly useful for sending out information from the platform (for example invoices to the
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
:doc:`/getting-started/managing-your-cloud/openstack-horizon`, with
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client` or to connect to any of the
:ref:`OpenStack API endpoints <openstack-api-endpoints>`.

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

.. warning::

   If you enable :ref:`mfa-users-label` all Application Credentials for your API user will be enforced to use MFA.

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

* Under access rules you are able to give even more granular accesses to various API calls. See the information on how
  this works in the dialog. If you don't enter anything here, your user will not be restricted to specific API calls.

* The **Unrestricted** box will allow the Application Credential to create additional users. This is **NOT** recommended.

* Finally, click **Create Application Credential**

.. important::

   Once you've created the Application Credential, you will be given a one-time opportunity to save the credential by
   copying it or downloading it in openrc or YAML format. Once you've pressed close, you will not be able to retrieve
   the secret again.

Credentials
-----------

.. important::

   The credentials feature is not a secret store and is only used for credentials used for authentication
   tied to a user, see the :doc:`/secret-store/index` service for storing secrets or sensitive information.

Using an credential makes it possible to store and exchange credentials in return for a token or access to
a service that has it's own authentication.

For example the :doc:`/storage/object-storage/s3` implementation for the :doc:`/storage/object-storage/index`
service or storing user related credentials such as a TOTP secret for :ref:`MFA <mfa-users-label>`.

Credentials can only be managed using the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`.

.. warning:: When listing credentials they are shown in plain text and contains sensitive information.

You can list all the credentials stored for your API user with ``openstack credential list``.

.. _ec2-credential-label:

EC2 Credential
~~~~~~~~~~~~~~~

.. warning::

   A EC2 credential will continue to work even if :ref:`mfa-users-label` is enabled on the API user. This
   can be used to bypass MFA, make sure that you audit or remove all EC2 credentials if you don't need them
   and have MFA enabled.

A EC2 credential is a credential with type set to ``ec2`` and contains a blob of JSON data with an access
and secret key.

This access and secret key can then be used to obtain a token scoped to the user that created the EC2
credentials or be used to authenticate against the :doc:`/storage/object-storage/s3` service.

You can list existing EC2 credentials using ``openstack credential list --type ec2``. If you want to create
a new EC2 credential you can use ``openstack ec2 credentials create``.

TOTP Credential
~~~~~~~~~~~~~~~

A TOTP credential is a credential with type set to ``totp`` that Keystone will use when you
give it a passcode with the ``totp`` auth method when authenticating with your API user.

We **do not recommend** that you manage or touch anything related to TOTP credentials and instead
rely on the flow as described in the :ref:`mfa-users-label` section.

.. warning::

   If you list TOTP credentials it will show your TOTP secret in plain text, this secret
   key is used to generate valid TOTP passcodes for your API user when doing MFA and must
   be kept safe.

.. _mfa-users-label:

Multifactor authentication (MFA) for API user
---------------------------------------------

.. note::

   Looking for how to use the :doc:`/getting-started/managing-your-cloud/openstack-terminal-client`
   with MFA enabled on your API user? :ref:`Click here to read more <mfa-terminal-label>`.

We support multifactor authentication (MFA) on API users and allow you to self-service
enable it on your API user through :doc:`/getting-started/managing-your-cloud/openstack-horizon`.

Enabling MFA authentication protects your API user by requiring you to present two factors, your
password and a TOTP passcode, for successful authentication.

Before enabling MFA it's important to understand the impact on your API user and any
Application Credentials and EC2 credentials that you've created.

- You will not be able to login to :doc:`/getting-started/managing-your-cloud/openstack-horizon`,
  use the API, terminal client or remove MFA without entering a TOTP passcode.

- If you lose access to your TOTP application or device you will lose access to your API user, we
  recommend that you keep a backup of your TOTP secret.

- All :ref:`application-credentials-label` for this user will be enforced
  to use MFA.

- :ref:`EC2 credentials <ec2-credential-label>` for this user will continue to work
  and MFA will **NOT** be enforced, make sure to audit your EC2 credentials.

- Enabling MFA on your API user will invalidate all existing tokens that has not
  been issued with MFA enabled.

Please make sure to read through the bullet points above carefully and consider the impact
on your cloud account in the platform before continuing.

- Login to :doc:`/getting-started/managing-your-cloud/openstack-horizon` in the top right click on
  your username and in the dropdown go to **Settings**.

- In the menu to the left you will now see a Settings with **User Settings** selected,
  click on **MFA Settings**

- Scan the QR code with your TOTP application (such as Google Authenticator) or device, or click
  **View All Details** to show the TOTP secret in plain text.

- Enter a valid passcode and click **Submit**

  - If you enter an invalid passcode the page will be refreshed and you will get a new TOTP
    secret and need to go through the same procedure again.

  - If you enter a valid passcode, you will be logged out and MFA is now enabled.

If you ever want to remove MFA on your API user you can go back to the **MFA Settings**
page, enter a valid passcode, click **Submit** and MFA will be removed from your API user.

You can read more :ref:`here <mfa-terminal-label>` if you want to use MFA with the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`.

When using :doc:`/getting-started/managing-your-cloud/openstack-horizon` you will get prompted
for a TOTP passcode when you login.

..  seealso::

  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/getting-started/managing-your-cloud/account-management-portal`
