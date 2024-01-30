===============================
Security settings in client VPN
===============================

The default configuration allows any number of clients to access the VPN service using the same credentials (one user certificate + the TLS key). All required certificates are automatically generated (and are thus unique) for each deployment of the service. Cipher selections and algorithms used for the generated keys follow the guidelines laid out by the `CNSA suite <https://apps.nsa.gov/iaarchive/programs/iad-initiatives/cnsa-suite.cfm>`_ for protecting data at "TOP SECRET" level.

For even higher security, you may choose to add user specific credentials through the pfSense control panel - see :doc:`managing-users` for instructions.
