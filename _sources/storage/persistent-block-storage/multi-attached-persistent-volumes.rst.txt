=================================
Multi-attached persistent volumes
=================================

Standard concept
----------------

A volume normally has a one-to-one connection to an instance. This is akin to a physical hard drive
cabled directly to a computer.

In Binero cloud, the volume type determines the ability to connect a volume to one or
more instances. Our ``ssd`` and ``hdd`` volume types supports attachment to one instance.

Since volumes in a cloud based system are logical constructs it's technically possible to connect
a :doc:`volume </storage/persistent-block-storage/index>` to more than one :doc:`instance </compute/index>`,
but there are some disadvantages in doing so, read more about that below.

Multi-attach considerations
---------------------------

Binero cloud also offers two more volume type for multi-attach purposes.

- `ssd-multiattach`

- `hdd-multiattach`

These are not available by default but made available upon activation on a per customer basis (by :doc:`contacting our support </general/getting-support>`)
and will allow a volume to attach to more than one instance.

.. important::

   It's important to consideration data integrity in combination with
   multi-attach. We **strongly** recommend reading the article in full
   before proceeding.

When attaching a volume to more than one instances, **each will assume it has exclusive access to the volume**.

Operating systems include not default support that checks for other systems accessing a volume. Storage operations
will read and write to the volume with an assumption that it has exclusive access to the storage media.

Writes (which change the data) depend on exclusive access. This is because a drive needs to do things in a serialized
manner on the block level. If another process (unbeknownst to the first) writes, blocks can become garbled which would
corrupt the filesystem on the volume.

Block compared to file storage
------------------------------

A commonly used solution for sharing a disk is NFS on Linux and SMB or CIFS on Windows. These services provides *file storage*, as
opposed to *block storage* which is what volumes and multi-attached volumes provide, in a shared manner.

File storage happens on a higher level than block storage as file systems store data on blocks.

NFS accepts write requests that reach it over the NFS protocol. This protocol will manages locking of *files* controlling the
access to a file during operations.

Further, since the server running the NFS service *alone will write data to the block device* this mitigates the risk
for the file system being corrupt.

The instance running the NFS service is file-system-aware and will manage writes within the confines of whats acceptable
for the filesystem, mitigating the risk of the data becoming corrupt.

Another example of network attached storage is ISCSI. This protocol, unlike NFS, SMB and CIFS, presents to the operating system
as a pure block device on which the operating system can, for example, write its file system. SCSI commands gets sent across the
network instead of an internal cable in a server. ISCSI is not in and of itself, aware of files or even a filesystem. It will
write (manipulate blocks) according the SCSI instructions received.

The storage system running ISCSI is not file-system-aware and will manage writes in a file-system-agnostic manner
(in the ISCSI case, by SCSI commands), thereby not guaranteeing the write integrity of what is above the SCSI layer.

Cluster file systems
--------------------

In a cluster file system, the file system itself guarantees that data is not corrupted by locking and fencing methods
between all members of the cluster thus coordinating the operations performed on blocks.

Popular cluster filesystems include:

- OCFS2

- GFS2

- VMFS

Popular non clustered file systems include:

- EXT4 or EXT3

- XFS

- NTFS

These will **NOT** work with similar writes from more than a single instance. 

.. caution::

   Its entirely possible to setup both multi-attach and ISCSI with for example EXT4 and mount the device on servers, it will
   mount just fine.

   The issues will come from writing the same block and for the file system to be aware that there has
   been changes to a block.

   After a while it's most likely your file system will become corrupt if you use a non clustered file system.

Using multi-attach in Binero cloud
----------------------------------

In Binero cloud, the two volume types for multi-attach is available upon activation for a customer by request to
our support department.

**The reason for this is that we want to make sure our customers are aware of the risk for data loss when using
multi-attach improperly.**. 

Once made available, they are usable as *volume type* when
:doc:`provisioning volumes </storage/persistent-block-storage/index>`.

If you want to change a current volume to be multi-attachable, see :doc:`retype a volume</storage/retype-a-volume>`. 
