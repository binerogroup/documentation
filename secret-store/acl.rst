===============
ACLs on secrets
===============
Access Control List (ACL) feature in the secret store provides user level access control for secrets and containers. By default the secret store provides access to its resources (secrets, containers) on a per project level and authorisation is granted based on the roles a user has in that project. ACL Contains three main information which helps in deciding the the level of access which different users have on the secret:

- Project Access Flag - By default, this is set to True. If changed to False, it makes the secret as Private and only the Owner and Users added would be able to perform operations such as Decryption, Deletion.
- Users - This include the user IDs of the users who have access to Decryption of a secret in case of a secret marked as ‘Private’ i.e. Project Access set to False.
- Operation Type: This denotes the read/write operation applicable on a secret. Currently, Barbican only supports the read operation.

Following are the operations associated with ACL on a Secret:

- Get ACL: This helps in retrieving the ACL settings on a secret. It contains information regarding Project Access Flag, Users Array, Operation Type, ACL Set Date and update date.
- Set ACL: This is used to control the ACL settings on a secret. The user can add other users who will have decrypt and delete access for private secret, user can make the secret as public or private using the project access checkbox, specify the Operation Type (currently only read is supported by Barbican).
- Reset ACL: This is used to reset the ACL Settings to default i.e. Mark the secret as Public and accessible for decryption and deletion to every user in the project.

.. Note:: 
	The ACL Operation on a secret can be peformed by any user from the project, irrespective of whether the secret is public or private.