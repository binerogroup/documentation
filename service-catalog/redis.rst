=====
Redis
=====

`Redis <https://redis.com>`__ is a versatile in-memory data structure store.

To setup the service, first follow the general instructions on our :doc:`index` page.

- Give your service a name and optionally a description.

- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you
  want to provision in. We recommend using the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days you
  want your history stored.

- Select your instance :doc:`flavor </compute/flavors>`.

- Under ``private_net_name``, select the :doc:`network </networking/router/private-network/index>` on
  which the private subnet (see below) that you want to use is located.

- Under ``private_subnet_name``, select the :doc:`network </networking/router/private-subnet/index>` on
  which you want to run the service.

- Press **Create**. You will get further details on how to connect to
  the service. 

..  seealso::

  - :doc:`index`
