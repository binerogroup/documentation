# Documentation

Welcome to the Binero documentation!

We use the [Sphinx framework](https://www.sphinx-doc.org/en/master/) to create and maintain this documentation.

Contributions is most welcome!

## Contribution guidelines

All documentation is using the [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) format
and is written in English. Open a Pull Request to the main branch.

## Build requirements

You need Python 3 and tox. Install tox with pip or use the package manager of your choice.

## Building the documentation

Run ``tox -e docs`` that will run sphinx-build and the built documentation
will be in the ``build/html`` directory.

## Build and preview documentation locally

Run ``tox -e run`` that will build the documentation and serve it locally
on http://localhost:8000 for preview.
