==========================
Configuring the remote end
==========================

Part of the tunnel runs on Binero cloud but the other part runs on the site that you want to connect to.

It is difficult to write a comprehensive documentation on how to setup the remote part of the tunnel as
the equipment used could vary but normally the options that need editing are the same.

IPsec will only work with identical settings on both ends so take care to setup the remove end point
with **exactly** the same settings (as outlined below). 

Remember that for your tunnel to be able to initiate from both ends, you will need to allow traffic from
the remote endpoint to your firewall.

Either open up from all traffic from the remote endpoint IP (and *protocols* as IPsec uses more than a
single protocol) or do a selective firewall opening for the following:

- Protocol ESP

- Protocol AH

- Port 4500/UDP

- Port 500/UDP

The below steps should provide the information needed to get a tunnel up and running, however we
recommend reading the official documentation from your vendor on how to configure.

- ``Key exchange version``: IKEv2

- ``Remote gateway`` + ``Peer identifier``: The floating IP address of our local pfSense instance (provided
  by the output value ``ipsec_endpoint`` of the IPsec service).

- ``Authentication method`` PSK

- ``Pre-shared key``: The pre-shared key that was either chosen by you or generated while creating the pfSense
  instance (provided by the output value ``ipsec_psk`` of the IPsec service).

.. tip::

   Binero cloud supports (by default) two options for phase 1 encryption. We recommend the first option as it is
   more secure but we provide support for a second option for compatibility with older hardware.

   If you need to change to an even more insecure cipher, please edit the phase 1 configuration in the management
   interface. See :doc:`advanced-configuration` for more information.


- Phase 1 configuration:

  - ``SA lifetime``: 28800 seconds

  - ``Dead peer detection (DPD)``: Enabled

  - ``Algorithms``

  - Alternative 1:

    - ``Cipher``: AES-256-GCM with 128-bit ICV (also known as AES-GCM-16)

    - ``Pseudo-random function (PRF)``: Auto / SHA2_384 (this can often be left as auto, if there is not an option
      for it available, assume its automatically chosen).

    - ``(Integrity) Hash``: SHA2_384 (may not be required by all vendors)

    - ``Diffie-Hellman (DH)-Group``: 20 (NIST ecp384)

  - Alternative 2:

    - ``Cipher``: AES-CBC-256

    - ``Pseudo-random function (PRF)``: Not used (not relevant)

    - ``(Integrity) Hash``: SHA2_384

    - ``Diffie Hellman (DH) Group``: 15 (modp3072)

.. tip::

   Binero cloud supports (by default) two options for phase 2 encryption. We recommend the first option as it is more secure
   but we provide support for a second option for compatibility with older hardware.

   If you need to change to an even more insecure cipher, please edit the phase 2 configuration in the management
   interface. See :doc:`advanced-configuration` for more information.

- Phase 2 configuration:

  - ``Remote network``: Your local network

  - ``Protocol``: ESP

  - ``Lifetime``: 3600 seconds

  - ``Algorithms``:


  - Alterative 1:

    - ``Cipher``: AES-256-GCM with 128-bit ICV (also known as AES-GCM-16)

    - ``(Integrity) Hash``: SHA2_384 (may not be required by all vendors)

    - ``Perfect Forward Secrecy (PFS) key group``: 15 (modp3072)
  
  - Alterative 2:
  
    - ``Cipher``: AES-CBC-256

    - ``(Integrity) Hash``: SHA2_384

    - ``Perfect Forward Secrecy (PFS) key group``: Not used (not relevant)

..  seealso::

    - :doc:`index`
    - :doc:`setting-up`
    - :doc:`advanced-configuration`
