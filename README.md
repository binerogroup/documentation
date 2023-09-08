# Documentation

Welcome to the Binero documentation!

We use the [Sphinx framework](https://www.sphinx-doc.org/en/master/) to create and maintain this documentation.

Contributions are most welcome!

## Contributions

All documentation is using the [reStructuredText](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) format
and is written in English. Open a Pull Request to the main branch.

Need help getting started? See [Contributing to Projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects)

## Build requirements

You need Python 3 and tox 3. Install tox 3.27.1 or earlier with pip or use the package manager of your choice.

## Building the documentation

Run ``tox -e docs`` to run sphinx-build. The built documentation
will be in the ``build/html`` directory.

## Build and preview documentation locally

Run ``tox -e run`` to build the documentation and serve it locally
on http://localhost:8000 for preview.
