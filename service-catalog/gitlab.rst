======
Gitlab
======
`Gitlab <https://about.gitlab.com>`__ is a "DevSecOps platform", providing a wide array of features. Running your own installation in your private cloud will increase your security as well as give you control of where your data is stored. 

To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you want to provision in. We recommend *europe-se-1a* if you are unsure. 
- If you want backup, check the "backup" checkbox and select an amount of days you would like your history stored.
- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "local network", select the :doc:`network </networking/virtual-router/private-subnet/index>` on which you want to run the service.
- If you want your service publicly available on the internet, you can assign a floating IP (this can also be done later) by checking the "public access" checkbox. If you dont, you can only access it locally in your cloud account or over some kind of VPN.
- Press "create". You will get further details on how to connect to the service. 

..  seealso::
  - :doc:`index`