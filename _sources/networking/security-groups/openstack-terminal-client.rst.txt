============================================================
Managing security groups using the OpenStack terminal client
============================================================

Creating a security group
^^^^^^^^^^^^^^^^^^^^^^^^^

To create a :doc:`security group <index>` using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack security group create --description [DESCRIPTION] [NAME]``

.. note::

   The new security group will not have any rules so wont actually do anything. To add
   rules, follow next step.

Adding rules to a security group
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add rules to a :doc:`security group <index>` using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Running the following command will give you a detailed overview of what options are
  available for creating a rule: ``openstack security group rule create -h``

- Define the rule. More info in our :doc:`designing-rules` article. By using the help output
  from above, you are able to match your rule to the needed parameters. 

- An example command to create a security rule that allows SSH using the terminal. Replace the
  items in angle brackets with corresponding data. 

::

    openstack security group rule create \
      --protocol tcp \
      --dst-port 22 \
      --ingress \
      --remote-ip [X.X.X.X/Y] \
      --description [DESCRIPTION] \
      [NAME]

.. note::

   For ease of use, we recommend using the already defined rules. These are project specific so
   you can also tweak them as you see fit. 

Adding a security group to an instance
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add a :doc:`security group <index>` to an instance using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack server add security group [INSTANCE NAME] [GROUP NAME]``, replace
  the items within angle brackets with corresponding data.

- To show what security groups are currently attached to an instance, run this
  command: ``openstack server show --column security_groups [INSTANCE NAME]``, replace
  the items within angle brackets with corresponding data.

Address groups
^^^^^^^^^^^^^^

Address groups enable you to setup a collection of IP addresses and IP ranges that you can then use
to apply to your groups.

The benefit of this, is that you could re-use them in many rules and would not have to maintain several
lists of (the same) addresses. Address groups are only available via the terminal client, below is how
to work with them:

- To create a group, run this command: ``openstack address group create [NAME]``

- To add addresses to the group, run ``openstack address group set --address [x.x.x.x/y] [NAME]``. Address
  could be both a range or a single address.

- To use the address group in a rule, use the ``--remote-address-group [NAME]`` option.

.. note::

   If you instead choose to press "Edit Port Security Groups" (in step 2 above) you are able to set security
   groups on a per interface (port) basis instead.

   This might be useful if you have several networks connected to your instance (which we don't recommend)
   and want to have different settings on them. 

.. note::

   Remember that you need to add your groups to all instances, all rules are evaluated in a
   per instance fashion.

..  seealso::

    - :doc:`../index`
