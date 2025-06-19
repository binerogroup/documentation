========================================================
Creating a Layer7 policy using OpenStack Terminal Client
========================================================

We recommend first reading our :doc:`guide <index>` on layer 7 policies
to get a better understanding of how they work.

To create a layer 7 policy by using the
:doc:`/getting-started/managing-your-cloud/openstack-terminal-client`

- Run this command: ``openstack loadbalancer listener list``. Save the name of
  the listener to which you want to add the rule.

- Run this command: ``openstack loadbalancer l7policy create --action REDIRECT_TO_URL --redirect-url [http(s)://DOMAIN] --name [POLICY_NAME] [LISTENER_NAME]``, replacing
  the values in angle brackets. This sets up the policy.

- Run this command: ``openstack loadbalancer l7rule create --compare-type STARTS_WITH --type PATH --value / [POLICY_NAME]``. This
  sets up the rule.

- Run this command: ``openstack loadbalancer l7rule show [POLICY_NAME] [RULE_ID]``. Replace the items in
  angle brackets (the RULE_ID is from the previous commands output). Once the ``operating_status`` says
  **ONLINE**, the rule should be live.

.. note::

   Above is an example of a rule which would perform a redirect. You can read more information about the
   available rules in detail `here <https://docs.openstack.org/python-octaviaclient/latest/cli/index.html#l7policy>`__.
