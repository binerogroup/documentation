===================================
Linux Apache MySQL PHP stack (LAMP)
===================================

Using the popular and powerful open source tools `Linux <https://www.linux.org>`__,
`Apache <https://httpd.apache.org>`__, MySQL (`MariaDB <https://mariadb.org>`__)
and `PHP <https://www.php.net>`__, you can provision a complete production suite.

Popular tools such as WordPress or frameworks like CakePHP and Laravel run on
LAMP installations. 

To setup the service, first follow the general instructions on our :doc:`index`
page.

- Give your service a name and optionally a description.

- Under SSH Admin IP, add your public IP (this will allow your workstation through the
  firewall) in :doc:`CIDR notation </networking/subnet/subnet-format>`.

  - If you need to change this later, this sets up a :doc:`security group </networking/security-groups/index>`
    on the instance.

  - You can change or update the security group as you see fit but if you want to login
    over the floating IP that will be setup, you will need to input your IP here. 

- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you
  want to provision in. We recommend the *europe-se-1a* availability zone.

- If you want backup, check the **Backup** checkbox and select an amount of days you
  want your history stored.

- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with
  the default.

- Select your :doc:`SSH-key </compute/ssh-keys>`. 

- Under ``local_net`` select the :doc:`network </networking/network/index>`
  on which you want to run the service.

- If you want your service publicly available on the internet, you can assign a floating
  IP (you can assign one later if you prefer) by checking the **Public access** checkbox.

  - If you don't use a floating IP, you can only access it locally on your network or
    over some kind of ingress solution such as a VPN.

- Under **Volume size**, select the size (in GB) of the volume of the server. Take into
  consideration that you will store files and a database on the server. We recommend
  at least 100 GB.

- Press **Create**. You will get further details on how to connect to the service. 

..  seealso::

  - :doc:`index`
