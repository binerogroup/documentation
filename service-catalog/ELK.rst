==========================================
Elasticsearch Logstash Kibana (ELK)
==========================================

`Elasticsearch <https://www.elastic.co/elasticsearch>`_ a distributed search and analytics engine built upon Apache Lucene, stands as a cornerstone in various log analytics and search applications. Its versatile support for multiple languages, high-performance capabilities, and schema-free JSON document structure render it an ideal choice for diverse use cases.

`Logstash <https://www.elastic.co/logstash>`_ an open-source, lightweight data processing pipeline situated on the server-side. Logstash facilitates the seamless collection of data from disparate sources, real-time transformation, and onward transmission to designated destinations. Predominantly employed as a vital component alongside Elasticsearch, Logstash forms an integral part of many data pipelines.

`Kibana <https://www.elastic.co/kibana>`_ emerges as a pivotal tool for data visualization and exploration. It caters to log and time-series analytics, application monitoring, and operational intelligence with its user-friendly interface and an array of powerful features. From histograms and line graphs to pie charts and heat maps, Kibana boasts comprehensive visualization options alongside built-in geospatial support, ensuring efficient analysis and interpretation of data.

To setup the service, first follow the general instructions on our :doc:`index` page. Then follow these instructions: 

- Give your service a name and optionally a description.
- Select which :doc:`availability zone </compute/regions-and-availability-zones>` you want to provision in. We recommend *europe-se-1a* if you are unsure.
- Select your instance :doc:`flavor </compute/flavors>`. We recommend sticking with the default.
- Select your :doc:`SSH-key </compute/ssh-keys>`. 
- Under "local network", select the :doc:`network </networking/router/private-subnet/index>` on which you want to run the service.
- Press "create". Follow the steps below to configure the ELK Stack.


- **Configuration Steps:**

  Once the ELK service is provisioned, follow these steps to configure the ELK Stack:

  1. Elasticsearch Setup:
      - Refer to the `Elasticsearch guide <https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index.html>`_ for initial setup.
      - Obtain initial passwords from the Elasticsearch server:

        ``cat /var/lib/cloud/scripts/per-instance/passwords.txt``

  2. Logstash Configuration:
      - Configure Logstash to read logs from ``/var/log/*``
      - Refer to the `Logstash Configuration guide <https://www.elastic.co/guide/en/logstash/current/configuration.html>`_
      - For adding beats, follow the `Beats input plugin documentation <https://www.elastic.co/guide/en/logstash/current/input-plugins.html>`_
      - Update Logstash configuration file (``/etc/logstash/conf.d/logstash.conf``) with additional input blocks
      - Update the ``<elasticsearch_ip>`` in ``logstash.conf``
      - Restart Logstash:

        ``systemctl restart logstash``

      - Verify Logstash status:

        ``systemctl status logstash``

  3. Kibana Setup:
      - Refer to the `Kibana guide <https://www.elastic.co/guide/en/kibana/current/setup.html>`_ for initial setup with Elasticsearch.
      - Update ``/etc/kibana/kibana.yml`` with Elasticsearch host and password:

        ``elasticsearch.password: "Get the password from Bootstrap passwords file, this password is Kibana_system password"``

        ``elasticsearch.hosts: "["http://<elasticsearch_ip>:9200"]"``

  4. Restart Kibana service:

     ``sudo systemctl restart kibana``

- **Logging into Kibana:**

  Once Kibana is set up, access it in your web browser using the provided link. Log in using the following credentials:
    - Access Kibana at the provided link (e.g., ``http://<kibana_ip>:5601``).
    - **Username**: elastic
    - **Password**: Obtain the password from the Bootstrap passwords file.

For more information, refer to the respective documentation links provided for each component.