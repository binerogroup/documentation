================================================
Managing security groups using OpenStack Horizon
================================================

Creating a security group
^^^^^^^^^^^^^^^^^^^^^^^^^

To create a :doc:`security group <index>` by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Security Groups** in the sidebar menu.

- Click **Create Security Group** in the right upper corner.

- Name your security group and optionally provide a description.

- Press **Create Security Group**

.. note::

   The new security group will not have any rules so wont actually do anything. To add
   rules, follow next step.

Adding rules to a security group
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add rules to a :doc:`security group <index>` by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Network** and then **Security Groups** in the sidebar menu.

- On the line of the security group you want to add a rule to, press **Manage rules**

- Press **+ Add rule** in the top right corner.

- Define the rule. More info in our :doc:`designing-rules` article.

- Press **Add**

.. note::

   For ease of use, we recommend using the already defined rules. These are project specific
   so you can also tweak them as you see fit. 

Adding a security group to an instance
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add a :doc:`security group <index>` to an instance by using
:doc:`/getting-started/managing-your-cloud/openstack-horizon`

- Under **Project**, click **Compute** and then **Instances** in the sidebar menu.

- On the line of the instance you want to add a security group to, press the small arrow
  and select **Edit Security Groups**

- Press the **+** (plus) sign on each security group you want to add to the instance.

- Press **Save**

.. note::

   If you instead choose to press **Edit Port Security Groups** (in step 2 above) you are able to set
   security groups on a per interface (port) basis instead.

   This might be useful if you have many networks connected to your instance (which we don't recommend)
   and want to have different settings on them. 

.. note::

   Remember: you need to add your groups to all instances.

..  seealso::

    - :doc:`../index`
