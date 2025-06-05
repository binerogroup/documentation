=============
Orchestration
=============

Binero cloud fully supports orchestration using Heat, by using Heat, you can provision resources
from most parts of the platform via YAML based templates.

Aside from producing a tested and speedy roll out with a predictable result, automating in this
manner gives you the ability to setup identical platforms, either to scale out or to move between
providers that support the same technology.

Using Heat, you leverage the Infrastructure as Code concept in which you can check in and version
manage the templates for your system and manage changes by updating the template of a stack.

While a comprehensive documentation of Heat is outside the scope of this article, please
see `official documentation <https://docs.openstack.org/heat/latest/>`__ for more information
on Heat (from the official documentation).

Binero provides access to a git repository with Heat templates that are known to work with minimal
effort on our cloud (as well as likely on other clouds running OpenStack with Heat).

Please see `our templates on GitHub <https://github.com/binerogroup/heat-templates>`__ for inspiration
on how to work with Heat!

.. toctree::
  :caption: Services available
  :maxdepth: 1

