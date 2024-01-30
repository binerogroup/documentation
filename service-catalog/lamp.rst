===================================
Linux Apache MySQL PHP stack (LAMP)
===================================
Using the popular and powerful open source tools `Linux <https://www.linux.org>`__, `Apache <https://httpd.apache.org>`__, MySQL (`MariaDB <https://mariadb.org>`__ will be installed) and `PHP <https://www.php.net>`__, a complete production suite can be provisioned. Popular tools like Wordpress or frameworks like CakePHP or Laravel run on LAMP installations. 

To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- Under SSH Admin IP, add your public IP (this will allow your workstation through the firewall) in :doc:`CIDR notation </networking/router/private-subnet/subnet-format>`. If you need to change this later, this sets up a :doc:`security group </networking/router/security-groups/index>` on the instance. The security group can be changed or updated as you see fit but if you want to login over the floating IP that will be setup, you will need to input your IP here. 
- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you want to provision in. We recommend *europe-se-1a* if you are unsure. 
- If you want backup, check the "backup" checkbox and select an amount of days you would like your history stored.
- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "local_net", select the :doc:`network </networking/router/private-subnet/index>` on which you want to run the service.
- If you want your service publicly available on the internet, you can assign a floating IP (this can also be done later) by checking the "public access" checkbox. If you dont, you can only access it locally in your cloud account or over some kind of VPN.
- Under volume size, select the size (in GB) of the volume of the server. Take into consideration that you will store files as well as a database on the server. We recommend at least 100GB.
- Press "create". You will get further details on how to connect to the service. 



..  seealso::
  - :doc:`index`
