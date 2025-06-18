===============
ACLs on secrets
===============

Access Control List (ACL) feature in the secret store provides user level access control for
secrets and containers.

By default the secret store provides access to its resources (secrets and containers) on a per
project level and authorisation based on the roles a user has in that project.

ACL Contains three main information which helps in deciding the level of access which different
users have on the secret:

- Project Access Flag - By default, project access is True. If changed to False, it makes the secret
  Private and only the Owner and Users added would be able to perform operations such as Decryption
  and Deletion.

- Users - This include the user IDs of the users who have access to Decryption of a secret in case of
  a secret marked as Private, that is with Project Access set to False.

- Operation Type: This denotes the read/write operation applicable on a secret. Currently, Barbican
  only supports the read operation.

Following are the operations associated with ACL on a Secret:

- Get ACL: This helps in retrieving the ACL settings on a secret. It contains information about Project
  Access Flag, Users Array, Operation Type, ACL Set Date and update date.

- Set ACL: Used to control the ACL settings on a secret. The user can add other users who will have decrypt
  and delete access for private secret, user can make the secret as public or private using the project access
  checkbox, specify the Operation Type (Barbican only supports read).

- Reset ACL: Used to reset the ACL Settings to default, Mark the secret as Public in the project and makes it
  accessible for decryption and deletion to all user in the project.

.. note::

   Any user in the project can perform ACL Operation on a secret, irrespective of whether the secret is public
   or private.
