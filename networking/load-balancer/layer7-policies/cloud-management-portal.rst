==========================================================
Creating a Layer7 policy using the Cloud management portal
==========================================================

We recommend first reading our :doc:`guide <index>` on layer 7 policies to get
a better understanding of how they work.

To create a layer 7 policy by using the
:doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>`

- Press **Networking** and then **Load balancers** in the sidebar menu.

- Press the load balancer on which you want to add the rule.

- Press the **Listeners** tab and then the name of the listener to which you
  want to add the policy.

- Press the **L7 policies** tab.

- Press the **+** (plus) sign.

- Name your policy and optionally provide a description.

- Select your action and if applicable, provide a value (e.g. what domain
  to redirect to).

- Select a priority (1 is the lowest).

- Check **admin state up** assuming you want the rule to go live at once.

- Press **Create**

Once you've created a policy, you will also want to create a rule which triggers
it.

- Press the newly created policies name. 

- Press the **L7 Rules** tab.

- Press the **+** (plus) sign.

- Choose the type and if applicable, also input the key value. 

- Choose compare type and input value for comparison.

- Check **Admin state up** assuming you want the rule to go live at once.

- Press **Create**

After some time to provision (when the **Operating status** says **ONLINE**), the
rule is live.

..  seealso::

    - :doc:`../index`
