=======
Flavors
=======

Binero cloud provides various "flavors" of compute instances. A flavor is a pre-packaged combination of components providing certain performance and / or features. In the platform, we have flavors for the following use cases:

- General purpose
- High memory
- High performance
- Latency sensitive (pinned CPU)
- GPU based compute
- NVMe based storage
- GPU based compute with NVMe based storage

Each flavor type has its intended audience. The flavors are presented below but you can also see them in the various portals as well as by running the following OpenStack command line: ``openstack flavor list --sort-column Name``

Its easy to understand what each flavor includes based on its name. For example the flavor "hm.8x48" is a High memory flavor (hm) with 8 CPUs and 48 GB ram (8x48). Another example might be the "hp.12x64-gpu8-nvme50" flavor which is a high performance (hp) flavor with 12 cpus, 64GB ram (12x64), 8 GPU cores (gpu8) and 50 GB of NVMe storage (nvme50).


General purpose
---------------

This flavor type type has a well rounded combination of amount of CPUs and the amount of RAM. The CPUs running this flavor type are Intel Xeon Gold 6138 running at 2GHz. For general usage with no need for a higher clock frequency, this flavor type provides very good value for money. A recommended use case for this flavor type might be a LAMP stack server or servers with low to medium overall load. 

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type
   * - gp.1x2
     - 2048
     - 1
     - General purpose
   * - gp.2x4
     - 4096
     - 2
     - General purpose
   * - gp.3x6
     - 6144
     - 3
     - General purpose
   * - gp.4x8
     - 8192
     - 4
     - General purpose
   * - gp.6x12
     - 12288
     - 6
     - General purpose
   * - gp.8x16
     - 16384
     - 8
     - General purpose
   * - gp.12x24
     - 24576
     - 12
     - General purpose
   * - gp.16x32
     - 32768
     - 16
     - General purpose
   * - gp.24x48
     - 49152
     - 24
     - General purpose

High memory
-----------

This flavor type is optimised to provide the best value for applications needing a larger amount of RAM as compared to amount of CPU cores from the general purpose type. A typical example might be a database with heavy RAM caching. Like the general purpose flavor type, the CPUs in this flavor type are Intel Xeon Gold 6138 running at 2GHz.

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type

   * - hm.1x4
     - 4096
     - 1
     - High memory
   * - hm.2x8
     - 8192
     - 2
     - High memory
   * - hm.3x12
     - 12288
     - 3
     - High memory
   * - hm.4x16
     - 16384
     - 4
     - High memory
   * - hm.6x24
     - 24576
     - 6
     - High memory
   * - hm.6x32
     - 32768
     - 6
     - High memory
   * - hm.8x48
     - 49152
     - 8
     - High memory
   * - hm.8x96
     - 98304
     - 8
     - High memory
   * - hm.12x64
     - 65536
     - 12
     - High memory
   * - hm.12x128
     - 131072
     - 12
     - High memory
   * - hm.16x64
     - 65536
     - 16
     - High memory
   * - hm.16x128
     - 131072
     - 16
     - High memory
   * - hm.24x64
     - 65536
     - 24
     - High memory
   * - hm.24x128
     - 131072
     - 24
     - High memory

High performance
----------------

For heavily loaded applications or applications which are single threaded (and therefore serial by nature - therefore gaining only by a faster clock), the high performance flavor type provides a higher base clock frequency than the other flavor types. The CPUs in this type are Intel Xeon Gold 6154 running at 3GHz. At a 50% higher clock frequency, serial tasks will complete faster, storage and RAM access is faster with consistently lower latency and performance is more predictable. A typical use case might be caching servers, heavily utilised database servers or really anything with a need for very good performance. Like the general purpose type, this flavor has a well rounded relation between amount of CPU cores and RAM. 

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type

   * - hp.2x4
     - 4096
     - 2
     - High performance
   * - hp.2x6
     - 6144
     - 2
     - High performance
   * - hp.2x8
     - 8192
     - 2
     - High performance
   * - hp.4x6
     - 6144
     - 4
     - High performance
   * - hp.4x8
     - 8192
     - 4
     - High performance
   * - hp.4x16
     - 16384
     - 4
     - High performance
   * - hp.6x12
     - 12288
     - 6
     - High performance
   * - hp.8x24
     - 24576
     - 8
     - High performance
   * - hp.8x32
     - 32768
     - 8
     - High performance
   * - hp.8x64
     - 65536
     - 8
     - High performance
   * - hp.8x128
     - 131072
     - 8
     - High performance
   * - hp.12x32
     - 32768
     - 12
     - High performance
   * - hp.12x64
     - 65536
     - 12
     - High performance
   * - hp.12x128
     - 131072
     - 12
     - High performance

Pinned CPU
----------

In certain use-cases, guaranteeing allotted CPU time is critical (for instance in real time communication where a brief lapse in CPU time would mean that a call might lag or hang). In a cloud environment, this can sometimes be difficult because access to physical CPUs from virtual instances is shared between the various occupants of the same hypervisor host. 

While Binero cloud generally provides very good access CPU-time (through very granular monitoring and recurring optimisation of the load on our hypervisors), for those cases where its essential to guarantee the lowest possible tail latency, the pinned instances are available. These instances provides exclusive access to a physical thread, meaning 100% of the threads capacity is reserved to the instance. This way, the user can be assured that "noisy neighbours" are completely eliminated as a problem and from a performance perspective, the experience is very much like running on a physical server. 

We also allot threads from the same physical core exclusively to the same instance (no sharing), meaning complete access to the performance of the core as well as zero risk for future so called Transient execution CPU vulnerabilities (aside from this flavor type, generally Binero cloud run on hypervisors with hyper-threading disabled for this reason). All thread allotments are further divided on both NUMA zones in the hypervisor, in order to give the same access to IO as well as to split the load on the physical processors evenly on the hypervisor, all to guarantee predictable performance.

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type
   * - gp.4x8-pinned
     - 8192
     - 4
     - General purpose with pinned CPU
   * - gp.8x16-pinned
     - 16384
     - 8
     - General purpose with pinned CPU
   * - gp.16x32-pinned
     - 32768
     - 16
     - General purpose with pinned CPU
   * - hm.4x16-pinned
     - 16384
     - 4
     - High memory with pinned CPU
   * - hm.8x32-pinned
     - 32768
     - 8
     - High memory with pinned CPU
   * - hm.16x64-pinned
     - 65536
     - 16
     - High memory with pinned CPU

High performance with NVMe
--------------------------

This flavor type is identical to the high performance type except for using :doc:`NVMe based storage </storage/nvme-storage>`. This storage has some limitations as far as redundancy goes however from a performance perspective its close to the speed of RAM. If you are looking for the best possible performance for doing scratch disk operations or if you are building an application with built-in redundancy (like a replicated database), and need the best storage performance, this flavor type will deliver it.

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type

   * - hp.4x8-nvme50
     - 8192
     - 4
     - High performance with NVMe
   * - hp.4x8-nvme250
     - 8192
     - 4
     - High performance with NVMe
   * - hp.8x24-nvme50
     - 24576
     - 8
     - High performance with NVMe
   * - hp.8x24-nvme250
     - 24576
     - 8
     - High performance with NVMe
   * - hp.12x64-nvme50
     - 65536
     - 12
     - High performance with NVMe
   * - hp.12x64-nvme250
     - 65536
     - 12
     - High performance with NVMe

High performance with GPU
-------------------------

:doc:`GPU based compute <gpu-instances>` enables you to run tasks on a GPU (graphics processing unit). Aside from providing access to a GPU (with number of GB vMEM/RAM, as stated in the instance name), this instance is identical with the high performance flavor type. Recommended for doing various types of image processing or for AI / ML implementations that will typically run 50-200x faster on GPUs.

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type
   * - hp.4x8-gpu4
     - 8192
     - 4
     - High performance with GPU
   * - hp.4x8-gpu8
     - 8192
     - 4
     - High performance with GPU
   * - hp.4x8-gpu24
     - 8192
     - 4
     - High performance with GPU
   * - hp.8x24-gpu4
     - 24576
     - 8
     - High performance with GPU
   * - hp.8x24-gpu8
     - 24576
     - 8
     - High performance with GPU
   * - hp.8x24-gpu24
     - 24576
     - 8
     - High performance with GPU
   * - hp.12x64-gpu4
     - 65536
     - 12
     - High performance with GPU
   * - hp.12x64-gpu8
     - 65536
     - 12
     - High performance with GPU
   * - hp.12x64-gpu24
     - 65536
     - 12
     - High performance with GPU

High performance with GPU and NVMe
----------------------------------

A flavor type which combines the high performance with GPU and NVMe based storage. For situations where you need GPU but also really fast storage to read and write to.

.. list-table::
   :widths: 20 20 20 40
   :header-rows: 1

   * - Name
     - RAM (MB)
     - CPU cores
     - Flavor type

   * - hp.4x8-gpu4-nvme50
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.4x8-gpu4-nvme250
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.4x8-gpu8-nvme250
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.4x8-gpu8-nvme50
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.4x8-gpu24-nvme50
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.4x8-gpu24-nvme250
     - 8192
     - 4
     - High performance with GPU and NVMe
   * - hp.8x24-gpu4-nvme50
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.8x24-gpu4-nvme250
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.8x24-gpu8-nvme50
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.8x24-gpu8-nvme250
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.8x24-gpu24-nvme50
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.8x24-gpu24-nvme250
     - 24576
     - 8
     - High performance with GPU and NVMe
   * - hp.12x64-gpu4-nvme50
     - 65536
     - 12
     - High performance with GPU and NVMe
   * - hp.12x64-gpu4-nvme250
     - 65536
     - 12
     - High performance with GPU and NVMe
   * - hp.12x64-gpu8-nvme50
     - 65536
     - 12
     - High performance with GPU and NVMe
   * - hp.12x64-gpu8-nvme250
     - 65536
     - 12
     - High performance with GPU and NVMe
   * - hp.12x64-gpu24-nvme50
     - 65536
     - 12
     - High performance with GPU and NVMe
   * - hp.12x64-gpu24-nvme250
     - 65536
     - 12
     - High performance with GPU and NVMe


..  seealso::
    - :doc:`/compute/gpu-instances`
    - :doc:`/storage/nvme-storage`
