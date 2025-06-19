================================================
Creating a Layer7 policy using OpenStack Horizon
================================================

We recommend first reading our :doc:`guide <index>` on layer 7 policies to get a
better understanding of how they work.

To create a layer 7 policy by using the
:doc:`OpenStack Horizon portal </getting-started/managing-your-cloud/openstack-horizon>`

- Under **Project**, click **Network** and then **Load balancers** in the sidebar menu.

- Press the name of the load balancer on which you want to add the rule.

- Press the **Listeners** tab and then the name of the listener to which you want
  to add the policy.

- Press the **L7 policies** tab.

- Press the **Create L7 Policy** button in the top right. 

- Name your policy and optionally provide a description.

- Select your action and if applicable, provide a value (e.g. what domain to redirect to).

- Select a position (1 is the lowest).

- Press **Create L7 Policy**

Once you've created a policy, you will also want to create a rule which triggers
it.

- Press the newly created policies name. 

- Press the **L7 Rules** tab.

- Press the **+ Create L7 Rule** button.

- Choose the type and if applicable, also input the key value. 

- Choose compare type and input value for comparison.

- Press **Create L7 rule**

After some time to provision (when the **Operating Status** says
**Online**), the rule is live.

..  seealso::

    - :doc:`../index`
