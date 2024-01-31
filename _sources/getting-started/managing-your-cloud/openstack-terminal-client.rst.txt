=========================
OpenStack terminal client
=========================

For terminal oriented users, the OpenStack client offer a very speedy way (albeit with a steeper learning curve) to manage your cloud resources. The client is written in Python. 

Installation
------------

how to install the client will vary based on OS. On Linux based systems as well as Mac OS, its possible to install via ``pip`` which is the packet installer for python. Installation of pip is documented `here <https://pip.pypa.io/en/stable/installation/>`__ but is also possible via for instance ``brew`` on MacOS or the Linux package manager included in your distribution (for instance ``apt install pip`` on Debian based distros). 

Once ``pip`` is installed, you are able to install the terminal client as such: 

``pip install python-openstackclient python-designateclient python-barbicanclient python-octaviaclient python-swiftclient``

The above command will install the base client as well as the extensions needed to run all features of the platform.

Configuration
-------------

To configure the client after installation, follow these steps:
  - `Create an API user </getting-started/users.html#api-users>`_ (if you dont already have one)
  - On the API-user, press the small arrow icon, this will download an openrc file
  - Source the file on your computer by running ``source openrc``. 
  - Enter your password. 
  - You are now ready to use the client in the same terminal that you ran the source command in.

.. note:: When running the ``source`` command, you will get a token on your client which is valid for some time but refreshed upon usage. If you have not used the client you may need to run the command again.

.. note:: The terminal client will use your API-user. This is not the same as the main user that you would have used to create your API user (the same one that can login to the cloud management portal). This in turn means that the OpenStack terminal client will show you the same information that you would see when login into Horizon, and not the cloud management portal (as it uses the main user - which is not an API user).

Usage
-----

To for instance see the available images in the platform, you can run

``openstack image list``

The client will run either as a command with arguments or in interactive mode (at which point the arguments are the commands). A good way to find the right command is is to run:

``openstack help | grep <INPUT>``

where <INPUT> is what you are looking for. For instance: 

``openstack help | grep image``

would show you information on the image command used above.

.. note:: The OpenStack terminal client uses the OpenStack API. If not specifying the API version to use, the client will default to the oldest. This might hinder you from accessing some features and in that case, a warning detailing this would be shown. You are then able to add an option to the API (normally shown in the warning), for instance ``--os-compute-api-version 2.67``, which will enable the feature.

Generally speaking, there are the following methods in the terminal client:

- **list** - this lists information about objects that are currently in the cloud.
- **show** - this show information about a single object that is currently in the cloud.
- **create** - this creates a new object in the cloud. 
- **set** - this edits a current object in the cloud.

Several examples using "list" is available above and using "-h" would provide a good tutorial on how to use each method.

..  seealso::
  - :doc:`/getting-started/users`
  - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
  - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
  - :doc:`/openstack`
  - :doc:`/openstack-api`
