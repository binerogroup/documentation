# How to add or update a document in customer docs?

We use the [Sphinx framework](https://www.sphinx-doc.org/en/master/) to create and maintain this documentation.

### Prerequisite:

1. Knowledge of reStructuredText. [Read here](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html)
2. [Tox](https://pypi.org/project/tox/) It's required to build it and to do translations.

## How to add a new document?

1. If a document is added for a new topic, a new directory must be created for that topic. That new directory
will act as one of the parent menu items in sidebar of docs. A directory can have sub-directories that will act
as menu sub child items of parent menu.

2. Documentations for that new topic can be added in the same directory in .rst format.

3. Once created directory, subdirectory and files should be registered in [index.rst](https://github.com/binerogroup/customer-docs/blob/main/index.rst).

4. Directories and subdirectories can also have their own index.rst file. In this index.rst file we
can registry this directory .rst files or more nest directories. Then we need to register only this index.rst file
in main [index.rst](https://github.com/binerogroup/customer-docs/blob/main/index.rst).

5. Our default language is English to write documentation.

6. One can create a Pull Request and our team will review and merge the PR.

### Working with GitHub GUI to create a PR

1. Open a file in GitHub in which one wants to make changes.
2. Click on the Edit button on the top right of the file content.
3. Make your changes.
4. Commit changes by giving a meaningful message.
5. Click on the button `Create a new branch for this commit and start a pull request.`
6. Commit Changes.
7. Similarly if we want to add a new file, we can go to a directory in GitHub and click on `Add new file`
8. Repeat steps 3-6.

### Working with git directly to create a PR

1. Fork Binero customer docs [repository](https://github.com/binerogroup/customer-docs.git).
Read more about fork [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

1. Clone your own forked repo.

```bash
git clone <your-own-forked-repo-url>
```

2. Create a new branch.

```bash
git checkout -b <new-branch>

```

3. Add/Edit English documentation.
4. Git add, commit and push. We can skip below steps if we need to work on Swedish translations.

```bash
git add <modified-added-files>
git commit -m <message>
git push origin <your-own-forked-repo>
```

6. Create a PR.

```bash
https://github.com/<cloned-repo-name>/pull/new/<new-branch>
```

Choose base repository as upstream repository and base branch as upstream branch in which you want to merge your changes.
Head repository will be your forked repository and compare has the new branch of your forked repo.

## How to add Swedish translation?

1. This is optional but recommended. If not done, Swedish doc will show English document.
2. Clone your own forked repository of Binero customer docs.

```bash
git clone <your-own-forked-repo-url>
```

3. If there is already a branch present in which we are already working, we can skip this.

```bash
git checkout -b <new-branch>

```

3. Assuming that all work is done for adding or updating English documentation, we can run below:

```bash
tox -e make-sv-i18n
```

4. Above command will create .po files for the same for each .rst file. [Click here](https://github.com/binerogroup/customer-docs/tree/main/locale/sv/LC_MESSAGES) for examples.

5. Translater has to work on .po files to provide Swedish translations of English strings in file.

```bash
git add <modified-added-files>
git commit -m <message>
git push origin <your-own-forked-repo>
```

6. Create a PR.

```bash
https://github.com/<username/groupname>/<cloned-repo-name>/pull/new/<new-branch>
```

Choose base repository as upstream repository and base branch as upstream branch in which you want to merge your changes.
Head repository will be your forked repository and compare has the new branch of your forked repo.

## What is expected in a document?

We mainly focus on the ``What`` and ``How`` of any topic.

1. Add a description of the topic.
2. Add steps of usage with OpenStack Horizon GUI.
3. Add how we can do the same using Binero Cloud Portal GUI.
4. Add how we can do the same using OpenStack CLI.
