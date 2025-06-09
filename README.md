# Documentation

Welcome to the Binero documentation!

We use the [Sphinx framework](https://www.sphinx-doc.org/en/master/) to create and maintain this documentation.

Contributions most welcome!

## Contributions

All documentation uses the [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) format
written in English. Open a Pull Request to the main branch.

Need help getting started? See [Contributing to Projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

## Build requirements

You need Python 3 and tox. Install tox with pip or use the package manager of your choice.

## Building the documentation

Run ``tox run -e docs`` to run sphinx-build. The ``build/html`` directory
contains the built documentation.

## Build and preview documentation locally

Run ``tox run -e run`` to build the documentation and serve it locally
on http://localhost:8000 for preview.

## Linting

We use [Vale](https://vale.sh) for linting and styling in our documentation. See the
Vale documentation for installation and usage.

Please run Vale before creating a Pull Request to get suggestions on
your prose.

you can use ``tox run -e vale`` to run Vale on the documentation.
