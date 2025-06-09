=======
Grafana
=======

`Grafana <https://grafana.com>`__ is an observability platform that enables
visualising and graphing various source data in a powerful way.

You also have the option to install a local (to the instance)
`InfluxDB time series database <https://www.influxdata.com>`__ to
use as source for your Grafana instance. 

To setup the service, first follow the general instructions on our
:doc:`index` page.

- Give your service a name and optionally a description.

- Select which :doc:`availability zone </compute/regions-and-availability-zones>`
  you want to provision in. We recommend the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days
  you want your history stored.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking
  with the default.

- If you want to also install an InfluxDB server, check the **InfluxDB** checkbox.

  - If you don't, you can still use Grafana to visualise data from some already
    existent data source. 

- Select your :doc:`SSH-key </compute/ssh-keys>`.

- Under **Local network**, select the :doc:`network </networking/router/private-subnet/index>`
  on which you want to run the service.

- If you want your service publicly available on the internet, you can assign a floating
  IP (this can also be done later) by checking the **Public access** checkbox.

  - If you don't use a floating IP , you can only access it locally in your network or
    by using some kind of ingress solutions such as a VPN.

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
