==========================================================
Managing security groups using the Cloud management portal
==========================================================

Creating a security group
^^^^^^^^^^^^^^^^^^^^^^^^^

To create a :doc:`security group <index>` using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Security groups** in the sidebar menu.

- Press the **+** (plus) icon in the bottom right corner.

- Under region, *europe-se-1* should be pre-selected.

- Name your security group and optionally provide a description.

- Press **Create**

.. note::

   The new security group will not have any rules so wont actually do anything. To
   add rules, follow next step.

Adding rules to a security group
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add rules to a :doc:`security group <index>` using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Networking** and then **Security groups** in the sidebar menu.

- On the security group you want to add a rule to, press the small **create rule** icon (looks
  like several rows of text with a small **+** plus sign).

- Define the rule. More info in our :doc:`designing-rules` article.

- Press **Create rule**.

.. note::

   For ease of use, we recommend using the already defined rules. These are project specific
   so you can also tweak them as you see fit. 

Adding a security group to an instance
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To add a :doc:`security group <index>` to an instance using the :doc:`/getting-started/managing-your-cloud/cloud-management-portal`

- Press **Compute** and then **Instances** in the sidebar menu.

- Press the instance that you want to add the security group to.

- In the top tab (under the instance name), security groups menu is available when scrolling to the right. Press it.

- Press **Allocate**

- Select the group you want to add.

- Press **Connect group**

.. note::

   Remember: you need to add your groups to all instances, all rules are evaluated in a
   per instance fashion.

..  seealso::

    - :doc:`../index`
