=========================
OpenStack Terminal Client
=========================

For terminal oriented users, the OpenStack client offer a speedy way (albeit with a steeper
learning curve) to manage your cloud resources. The OpenStack client is in Python.

Installation
------------

How to install the client will vary based on your operating system. On Linux based systems
and Mac, its possible to install via ``pip`` which is the package installer for Python.

Documentation on installing pip is `here <https://pip.pypa.io/en/stable/installation/>`_ but
it's also possible using ``brew`` on Mac or the Linux package manager included in your Linux
distribution (for example ``apt install python3-pip`` on Debian based distributions).

Once you have ``pip`` installed, you are able to install the terminal clients as such: 

::

    pip install python-openstackclient python-designateclient python-barbicanclient python-octaviaclient python-swiftclient

The above command will install the OpenStack client and the extensions needed to manage all
features in the platform.

Configuration
-------------

To configure the client after installation:

- `Create an API user </getting-started/users.html#api-users>`_ (if you don't already have one)

- On the API user, press the small arrow icon, this will download an openrc file

- Source the file in your terminal by running ``source openrc``

- Enter your password

- You are now ready to use the client in the same terminal that you ran the source command in

.. note::

   When running the ``source`` command, you will get a token on your client which is valid for some time
   but refreshed upon usage. If you have not used the client you might need to run the command again.

The terminal client will use your API user. This is not the same as the main user that you would have
used to create your API user (the same one that can login to the cloud management portal).

This in turn means that the OpenStack terminal client will show you the same information that you would
see when login into Horizon, and not the cloud management portal (as it uses the main user,
which is not an API user).

Usage
-----

To for example see the available images in the platform, you can run

::

    openstack image list

The client will run either as a command with arguments or in interactive mode (at which point the
arguments are the commands). A good way to find the right command is to run:

::

    openstack help | grep <INPUT>

where ``<INPUT>`` is what you are looking for. For instance: 

::

    openstack help | grep image

would show you information on the image command used above.

.. note::

   The OpenStack terminal client uses the different OpenStack APIs. If not specifying the API version
   to use the client might default to an older version. This might hinder you from accessing some
   features. You are able to add an option to command for example ``--os-compute-api-version 2.67``
   which will enable you to use newer features.

Generally speaking, there are the following methods in the terminal client:

- **list** - this lists information about resources that are currently in the cloud.
- **show** - this show information about a single resource that is currently in the cloud.
- **create** - this creates a new resource in the cloud.
- **set** - this edits a current resource in the cloud.

See examples of using ``list`` above, using ``-h`` gets you help and provides a good starting
point to understand each command.

.. _mfa-terminal-label:

Multifactor authentication (MFA)
--------------------------------

If you have enabled :ref:`mfa-users-label` you need to use the ``v3multifactor`` auth type and configure
the auth methods to be ``v3password`` and ``v3totp`` or if you are using an
:ref:`Application Credential <application-credentials-label>` you must use ``v3applicationcredential``
and ``v3totp`` as auth methods.

When you've enabled MFA you need to enter a TOTP passcode every time to authenticate to get a token so
instead of authenticating every request we save the token and use that for commands instead.

Configure two clouds in the ``~/.config/openstack/clouds.yaml`` file, one that uses your password and
TOTP and another one that only uses a token.

Use below as an template and replace with correct information. The project name is your customer
number.

When using an :ref:`Application Credential <application-credentials-label>` with MFA you must give
the user ID, you can find your user ID by issuing a token ``openstack token issue -f value -c user_id``

::

  clouds:
    binero-cloud-mfa:
      auth_type: v3multifactor
      auth_methods:
        - v3password
        - v3totp
      auth:
        auth_url: https://auth.binero.cloud:5000
        username: USERNAME_HERE
        password: PASSWORD_HERE
        project_name: PROJECT_NAME_HERE
        user_domain_name: default
        project_domain_name: default
      region: europe-se-1
      interface: public
      identity_api_version: 3
    binero-cloud-mfa-appcred:
      auth_type: v3multifactor
      auth_methods:
        - v3applicationcredential
        - v3totp
      auth:
        auth_url: https://auth.binero.cloud:5000
        user_id: USER_ID_HERE
        application_credential_id: APP_CRED_ID_HERE
        application_credential_secret: APP_CRED_SECRET_HERE
      region: europe-se-1
      interface: public
      identity_api_version: 3
    binero-cloud-token:
      auth_type: v3token
      auth:
        auth_url: https://auth.binero.cloud:5000
        project_name: PROJECT_NAME_HERE
        project_domain_name: default
      region: europe-se-1
      interface: public
      identity_api_version: 3

.. note::

   The below workflow of using a token with the OpenStack Terminal Client does not
   work when using an Application Credential with MFA enabled and you must authenticate
   every request instead.

You can now run the following command to issue a new token, it will prompt you for a TOTP
passcode.

::

    export OS_TOKEN=$(openstack --os-cloud binero-cloud-mfa token issue -c id -f value)

This token is valid for one hour. You can now use it when running commands.

::

    openstack --os-cloud binero-cloud-token server list

..  seealso::

  - :doc:`/getting-started/users`
  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
  - :doc:`/openstack`
  - :doc:`/openstack-api`
