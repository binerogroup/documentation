=====
Redis
=====
`Redis <https://redis.com>`__ is a very versatile in-memory datastore. To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you want to provision in. We recommend *europe-se-1a* if you are unsure. 
- If you want backup, check the "backup" checkbox and select an amount of days you would like your history stored.
- Select your instance :doc:`flavor </compute/flavors>`.
- Under "private_net_name", select the :doc:`network </networking/router/private-network/index>` on which the private subnet (see below) that you want to use is located.
- Under "private_subnet_name", select the :doc:`network </networking/router/private-subnet/index>` on which you want to run the service.
- Press "create". You will get further details on how to connect to the service. 

..  seealso::
  - :doc:`index`
