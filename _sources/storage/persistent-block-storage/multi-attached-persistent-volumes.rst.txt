=================================
Multi-attached persistent volumes
=================================

Standard concept
----------------

A volume normally has a 1:1 connection to an instance. This is akin to a physical hard drive which is cabled to (and normally mounted in) a computer/server. Since volumes in a cloud based system are logical constructs its technically possible to connect a :doc:`volume </storage/persistent-block-storage/index>` to multiple :doc:`instances </compute/index>`, however there are some caveats (see below) in doing so.

In Binero cloud, the ability to connect a volume to more than a single instance is decided by its volume type. The default volume types available are:

- `ssd`
- `hdd`

They both allow a volume to be connected to a single instance (after which it is considered to be "in use"). 

Multi-attach considerations
---------------------------

There are however two more volume types:

- `ssd-multiattach`
- `hdd-multiattach`

These are by default hidden but can be activated on a per customer basis (by :doc:`contacting our support </general/getting-support>`) and will allow a volume to be connection to multiple instances.

.. important:: There are important considerations relating to data integrity in combination with multi-attach. We *strongly* recommend reading the article in full before proceeding.

When assigning multiple instances access to a volume, *each will assume it has exclusive access to the volume*. There is no feature in normal operating systems, that check for other systems accessing a volume. Storage is read and written to directly with nothing in the middle that manage the sharing of the drive.

A read only system (for instance an ISO file or DVD) could easily be shared as reading is a non volatile process. Writes (which change the data) would, however, depend on exclusive access. This is because a drive needs to do things in a serialised manner on the block level. If another process (unbeknownst to the first) writes, blocks can become garbled which would then destroy the filesystem on the volume.

Block vs File storage
---------------------

A commonly used solution for sharing a disk is NFS (Linux) or SMB/CIFS (Windows). These services provides *file storage*, as opposed to *block storage* which is what volumes and multi-attached volumes provide, in a shared manner. File storage happens on a higher level than block storage (which is very close to the hardware). Since they can be mounted on a server, as if they where a local path, its easy to assume they work the same way, which is indeed not the case.

NFS (for example) accepts write requests that reach it over the NFS protocol. This protocol will manages write locking of *files* (basically that a file being written to is read only), thus mitigating the risk of more than a single write to the same blocks on the volume. Further, since the server running the NFS service *alone will write data to its block device*, the risk for corrupting the filesystem is mitigated by a single operating system writing to it (as the actual block-level-write is *local to the NFS server*).

The instance running the NFS service is file-system-aware and will therefore manage writes within the confines of whats acceptable for the filesystem, mitigating the risk of data corruption.

Another example of network attached storage is ISCSI. This protocol, unlike NFS or SMB/CIFS, is presented to the operating system as a pure block device on which the operating system can, for instance, write its file system. SCSI commands will be sent across networking instead of an internal cable in a server. ISCSI is not in and of itself, aware of files or even a filesystem. It will simply write (manipulate blocks) according the SCSI instruction it is given.

The storage system running ISCSI is not file-system-aware and will therefore manage writes in a file-system-agnostic manner (in ISCSIs case, by SCSI commands), thereby not guaranteeing the write integrity of "whatever is above the SCSI layer".

Cluster file systems
--------------------

In a cluster file system, a daemon runs on the members of the cluster that keeps track of the writes that happens on the member. When a write occurs, a signal is sent to the other members that the blocks in question are being written to. The other members will at this point, limit their own writes to the same blocks. By using a cluster aware file system, the risk that the filsystem gets corrupted is mitigated.

Popular cluster filesystems include:

- OCFS2
- GFS2
- VMFS

But there are several others. Some popular non clustered file systems include:

- EXT4 or EXT3
- XFS
- NTFS

These will *NOT* work with similar writes from more than a single instance. 

.. note:: Its entirely possible to setup both multi attach and ISCSI with for example EXT4 and mount the device on several servers, it will mount just fine. The issues will come from writing the the same block, as well as for the file system to be aware that there has been writes. A read only mount on all but a single server will mitigate the risk of corruption but might still present old data on the servers that are mounted read only.

Using multi attach in Binero cloud
----------------------------------

In Binero cloud, the two hidden volume types (see above) can be enabled globally for a customer by request to our support department. **The reason for this is that we want to make sure our customers are aware of the risk for dataloss when using multi-attach improperly.**. 

Once made available, they are usable as *volume type* when :doc:`provisioning volumes </storage/persistent-block-storage/index>`. If you want to change a current volume to be multi-attachable, this can be done by :doc:`retyping it </storage/retype-a-volume>`. 

