===================
Managing your cloud
===================
There are five main ways to manage your cloud, each with its unique features and benefits. Which you choose to use depends on what your use case is as well as your preferred workflow and previous experience. We describe them each in detail in their own sections below.

.. Important::
	There will be situations where the cloud management portal and OpenStack Horizon or the OpenStack terminal client shows different things. This is because they use different users. We therefore recommend not altering between tools unless needed.

- `Account management portal <account-management-portal>`_ - Account and billing, intended for the administrator of the account or personell working with invoices and costs.
- `Cloud management portal <cloud-management-portal>`_ - Essential cloud infrastructure, intended for technical personell that want to setup infrastructure with minimum effort.
- `Openstack Horizon <openstack-horizon>`_ - Advanced cloud infrastructure, intended for technical  personell working with more advanced implementation as well as when needing personal accounts.
- `OpenStack terminal client <openstack-terminal-client>`_ - Advanced cloud infrastructure via terminal, same as Horizon but terminal based (not web).
- `OpenStack API </openstack-api>`_ - Infrastructure as code and third party implementations, intended for programmers that want to implement infrastructure as code projects using the platform or when using a third party application like Terraform.

.. Tip:: 
	If you are starting out from scratch, we recommend using `our Cloud management portal <cloud-management-portal>`_ to get going!

.. toctree::
  :caption: Management options
  :maxdepth: 1

  account-management-portal
  cloud-management-portal
  openstack-horizon
  openstack-terminal-client