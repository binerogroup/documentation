=======
Flavors
=======

Binero cloud provides different flavors of compute instances. A flavor defines the compute, memory,
storage capacity for some flavors (see NVMe flavors below) and other hardware configuration that
allows you to customize for performance or features needed by your application.

We provide different groups of flavors and each group has different performance characteristics
and optimizations for different use-cases.

Each group of flavors has a version number meaning the higher version number the newer the
hardware giving a performance advantage on previous versions, for flavors without an explicit
version number in the name it implies version 1.

A flavor can have specific features such as NVMe storage, GPU, Pinned CPU. We add a CPU vendor
identifier as a suffix to the flavor name, see the CPU vendor identifiers list below.

- ``a`` for AMD (amd64)

- ``i`` for Intel (x86_64) – **Version 1 implies Intel**

- ``r`` for ARM (ARM64/AARCH64)

An overview of the flavor groups and their types looks like below.

- General purpose

  - Version 1 (flavors without a version number) implies Intel, example ``gp.2x4``

    - Pinned CPU for CPU intensive workload (dedicated CPU), example ``gp.4x8-pinned``

  - Version 2 with AMD (CPU vendor identifier is ``a``), example ``gp-v2a.2x4``

- High memory

  - Version 1 (flavors without a version number) implies Intel, example ``hm.2x8``

    - Pinned CPU for CPU intensive workload (dedicated CPU), example ``hm.8x32-pinned``

  - Version 2 with AMD (CPU vendor identifier is ``a``), example ``hm-v2a.2x8``

- High performance

  - Version 1 (flavors without a version number) implies Intel, example ``hp.8x32``

    - GPU, example ``hp.8x24-gpu4`` where the number after GPU means 4 GB vRAM

    - NVMe storage, example ``hp.4x8-nvme50`` where the number after NVMe means 50 GB disk

    - GPU and NVMe, example ``hp.12x64-gpu8-nvme250``

The flavor ``hm.8x48`` is a High memory (hm) version 1 using Intel CPUs with 8 vCPUs
and 48 GB memory.

The ``hp.12x64-gpu8-nvme50`` flavor is High performance (hp) version 1 with 12 vCPUs,
64 GB memory, 8 GB GPU vRAM and 50 GB of local NVMe storage.

The ``gp-v2a.8x16`` flavor is General purpose (gp) version 2 with 8 vCPUs and 16 GB
memory.

See the list of flavors more in detail below, you can also see them in the portals or by listing
them using the OpenStack terminal client with ``openstack flavor list --sort-column Name``

.. note::

   All gigahertz (GHz) specifications for processors is the base clock
   frequency in the product specification and does not take into account that
   your workload can be faster due to Intel Turbo boost or AMD Boost clock
   functionality provided by the processors.

General purpose
---------------

This general purpose flavor group has a well rounded combination of CPU and memory and is suitable
for most general application use-cases that does not have heavy or intensive CPU requirements.

This flavor group provides a good cost for performance and we recommend it for use-cases
with low to medium usage requirements.

Version 1 with Intel CPU
~~~~~~~~~~~~~~~~~~~~~~~~

The version number 1 (implied in the flavor names) is using Intel as CPU vendor
with Intel Xeon Gold 6138 2.0 GHz processors from the Intel Xeon Scalable Processors
product family.

.. tip::

   If you are looking for a larger flavor or more performance, see the General purpose
   version 2 flavors with AMD that is larger and has 1-4x the performance based on your
   use-case.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - gp.1x2
     - 1
     - 2048
     - General purpose
     - Version 1
     - Intel

   * - gp.2x4
     - 2
     - 4096
     - General purpose
     - Version 1
     - Intel

   * - gp.3x6
     - 3
     - 6144
     - General purpose
     - Version 1
     - Intel

   * - gp.4x8
     - 4
     - 8192
     - General purpose
     - Version 1
     - Intel

   * - gp.6x12
     - 6
     - 12288
     - General purpose
     - Version 1
     - Intel

   * - gp.8x16
     - 8
     - 16384
     - General purpose
     - Version 1
     - Intel

   * - gp.12x24
     - 12
     - 24576
     - General purpose
     - Version 1
     - Intel

   * - gp.16x32
     - 16
     - 32768
     - General purpose
     - Version 1
     - Intel

   * - gp.24x48
     - 24
     - 49152
     - General purpose
     - Version 1
     - Intel

Pinned CPU
^^^^^^^^^^

.. note::

   :doc:`windows-instances` is not supported on pinned flavors.

These flavors gives you gives you a pinned CPU, this means that we pin your vCPU to a
dedicated CPU core (pCPU) giving you exclusive access to the computation time on that
core.

In certain use-cases guaranteeing low-latency and fast access to CPU computation time is
critical for time sensitive applications that suffers when scheduling of CPU time to shared
CPU cores takes more time causing the application to experience lag or higher tail latencies
due to for example noisy neighbours.

.. vale off

We also guarantee that your allocation also get the CPU core thread siblings so that you're
never exposed to any transient execution CPU vulnerabilities.

.. vale on

When allocating pinned CPUs we reach across all NUMA nodes to optimize CPU usage but due to
memory being local to a NUMA node we recommend ultra sensitive workloads to not run its workload
on different cores if you need low-latency memory access as that will traverse NUMA nodes to
read memory.

.. tip::

   See the High memory version 1 pinned CPU flavors for the same feature but with
   a higher memory to CPU ratio.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - pCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - gp.4x8-pinned
     - 4
     - 8192
     - General purpose with pinned CPU
     - Version 1
     - Intel

   * - gp.8x16-pinned
     - 8
     - 16384
     - General purpose with pinned CPU
     - Version 1
     - Intel

   * - gp.16x32-pinned
     - 16
     - 32768
     - General purpose with pinned CPU
     - Version 1
     - Intel

Version 2 with AMD CPU
~~~~~~~~~~~~~~~~~~~~~~

The version number 2 is using AMD as CPU vendor with AMD EPYC 7742 2.25 GHz processors from the
EPYC 7002 series.

Performance testing has indicated that General purpose version 2 has 1-4x better performance
than version 1 depending on your use-case.

.. note::

   :doc:`windows-instances` is not supported on version 2 flavors.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - gp-v2a.2x4
     - 2
     - 4096
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.4x8
     - 4
     - 8196
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.6x12
     - 6
     - 12288
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.8x16
     - 8
     - 16384
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.12x24
     - 12
     - 24576
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.16x32
     - 16
     - 32768
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.24x48
     - 24
     - 49152
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.48x96
     - 48
     - 98304
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.64x128
     - 64
     - 131072
     - General purpose
     - Version 2
     - AMD

   * - gp-v2a.96x192
     - 96
     - 196608
     - General purpose
     - Version 2
     - AMD

High memory
-----------

The high memory flavor group has optimizations to provide the best value for applications that
needs a larger amount of memory compared to more CPU cores that as provided by general purpose.

The flavor group targets more memory heavy use-cases such as a database application with heavy
caching of the data set in memory that doesn't have a high or intensive computation need.

Version 1 with Intel
~~~~~~~~~~~~~~~~~~~~

The version number 1 (implied in the flavor names) is using Intel as CPU vendor
with Intel Xeon Gold 6138 2.0 GHz processors from the Intel Xeon Scalable Processors
product family.

.. tip::

   If you are looking for a larger flavor or more performance, see the High memory
   version 2 flavors with AMD that is larger and has 1-4x the performance based on your
   use-case.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPU
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - hm.1x4
     - 1
     - 4096
     - High memory
     - Version 1
     - Intel

   * - hm.2x8
     - 2
     - 8192
     - High memory
     - Version 1
     - Intel

   * - hm.3x12
     - 3
     - 12288
     - High memory
     - Version 1
     - Intel

   * - hm.4x16
     - 4
     - 16384
     - High memory
     - Version 1
     - Intel

   * - hm.6x24
     - 6
     - 24576
     - High memory
     - Version 1
     - Intel

   * - hm.6x32
     - 6
     - 32768
     - High memory
     - Version 1
     - Intel

   * - hm.8x48
     - 8
     - 49152
     - High memory
     - Version 1
     - Intel

   * - hm.8x96
     - 8
     - 98304
     - High memory
     - Version 1
     - Intel

   * - hm.12x64
     - 12
     - 65536
     - High memory
     - Version 1
     - Intel

   * - hm.12x128
     - 12
     - 131072
     - High memory
     - Version 1
     - Intel

   * - hm.16x64
     - 16
     - 65536
     - High memory
     - Version 1
     - Intel

   * - hm.16x128
     - 16
     - 131072
     - High memory
     - Version 1
     - Intel

   * - hm.24x64
     - 24
     - 65536
     - High memory
     - Version 1
     - Intel

   * - hm.24x128
     - 24
     - 131072
     - High memory
     - Version 1
     - Intel

Pinned CPU
^^^^^^^^^^

.. note::

   :doc:`windows-instances` is not supported on pinned flavors.

See the pinned CPU section in General purpose version 1 for a detailed explanation
of these flavors. These are the same but with a higher memory to CPU ratio.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - pCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - hm.4x16-pinned
     - 4
     - 16384
     - High memory with pinned CPU
     - Version 1
     - Intel

   * - hm.8x32-pinned
     - 8
     - 32768
     - High memory with pinned CPU
     - Version 1
     - Intel

   * - hm.16x64-pinned
     - 16
     - 65536
     - High memory with pinned CPU
     - Version 1
     - Intel


Version 2 with AMD CPU
~~~~~~~~~~~~~~~~~~~~~~

The version number 2 is using AMD as CPU vendor with AMD EPYC 7742 2.25 GHz processors from the
EPYC 7002 series.

Performance testing has indicated that High memory version 2 has 1-4x better performance
than version 1 depending on your use-case.

.. note::

   :doc:`windows-instances` is not supported on version 2 flavors.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - hm-v2a.2x8
     - 2
     - 2048
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.4x16
     - 4
     - 4096
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.6x24
     - 6
     - 6144
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.8x32
     - 8
     - 32768
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.8x192
     - 8
     - 196608
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.12x64
     - 12
     - 65536
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.16x96
     - 16
     - 98304
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.16x256
     - 16
     - 262144
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.18x128
     - 18
     - 131072
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.20x192
     - 20
     - 196608
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.22x256
     - 22
     - 262144
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.24x384
     - 24
     - 393216
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.32x512
     - 32
     - 524288
     - High memory
     - Version 2
     - AMD

   * - hm-v2a.64x768
     - 64
     - 786432
     - High memory
     - Version 2
     - AMD

High performance
----------------

The high performance flavor group has optimizations for applications with either or both heavy
and intensive CPU requirements. This results in faster task completion, a faster and more predictable
access to both memory and storage giving you a lower latency.

The flavor group targets more CPU intensive applications causing your workload to run and complete
faster improving serial throughput, use-cases such as caching servers or heavily utilized database
applications or other application that needs more performance and lower latency.

The flavor sizes is more rounded to being equal in CPU and memory.

Version 1 with Intel
~~~~~~~~~~~~~~~~~~~~

The version number 1 (implied in the flavor names) is using Intel as CPU vendor
with Intel Xeon Gold 6154 3.0 GHz processors from the Intel Xeon Scalable Processors
product family.

.. tip::

   The High performance version 1 has a 50% higher base clock frequency than version 1
   of the General purpose and High memory flavor groups and which greatly improves
   performance for CPU heavy or latency sensitive workloads.

.. list-table::
   :widths: 25 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Flavor group
     - Version
     - CPU vendor

   * - hp.2x4
     - 2
     - 4096
     - High performance
     - Version 1
     - Intel

   * - hp.2x6
     - 2
     - 6144
     - High performance
     - Version 1
     - Intel

   * - hp.2x8
     - 2
     - 8192
     - High performance
     - Version 1
     - Intel

   * - hp.4x6
     - 4
     - 6144
     - High performance
     - Version 1
     - Intel

   * - hp.4x8
     - 4
     - 8192
     - High performance
     - Version 1
     - Intel

   * - hp.4x16
     - 4
     - 16384
     - High performance
     - Version 1
     - Intel

   * - hp.6x12
     - 6
     - 12288
     - High performance
     - Version 1
     - Intel

   * - hp.8x24
     - 8
     - 24576
     - High performance
     - Version 1
     - Intel

   * - hp.8x32
     - 8
     - 32768
     - High performance
     - Version 1
     - Intel

   * - hp.8x64
     - 8
     - 65536
     - High performance
     - Version 1
     - Intel

   * - hp.8x128
     - 8
     - 131072
     - High performance
     - Version 1
     - Intel

   * - hp.12x32
     - 12
     - 32768
     - High performance
     - Version 1
     - Intel

   * - hp.12x64
     - 12
     - 65536
     - High performance
     - Version 1
     - Intel

   * - hp.12x128
     - 12
     - 131072
     - High performance
     - Version 1
     - Intel

NVMe storage
^^^^^^^^^^^^

These flavors provides local ephemeral :doc:`NVMe based storage </storage/nvme-storage>` with
high performance and low-latency access times, with the limitation of being local there
is no data redundancy.

.. caution::

   The NVMe based storage is local to the hypervisor that is running your
   instance and is using a single physical disk, though NVMe based enterprise
   solid state drives has an high lifetime expectancy it's important that
   you consider this fact and **backup your data** regularly.

   See :doc:`/storage/nvme-storage` for more information.

This flavor provides the best possible storage performance for IO intensive workloads
that needs to write to disk and is great for ephemeral storage or as disk if you
have an application with data replication or redundancy already built-in.

.. list-table::
   :widths: 25 20 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Local disk (GB)
     - Flavor group
     - Version
     - CPU vendor

   * - hp.4x8-nvme50
     - 4
     - 8192
     - 50
     - High performance with NVMe
     - Version 1
     - Intel

   * - hp.4x8-nvme250
     - 4
     - 8192
     - 250
     - High performance with NVMe
     - Version 1
     - Intel

   * - hp.8x24-nvme50
     - 8
     - 24576
     - 50
     - High performance with NVMe
     - Version 1
     - Intel

   * - hp.8x24-nvme250
     - 8
     - 24576
     - 250
     - High performance with NVMe
     - Version 1
     - Intel

   * - hp.12x64-nvme50
     - 12
     - 65536
     - 50
     - High performance with NVMe
     - Version 1
     - Intel

   * - hp.12x64-nvme250
     - 12
     - 65536
     - 250
     - High performance with NVMe
     - Version 1
     - Intel

GPU
^^^

These flavors provides :doc:`GPU based compute <gpu-instances>` and allows gives you a
GPU allocated to your instance with the specified vRAM / vMEM memory.

This gives you access to a NVIDIA A10 GPU that you can use for rendering, image
processing, AI, ML and inference workloads that can run 50-200x faster on a GPU
than a CPU.

.. tip::

   If you also need local NVMe storage for your GPU workload, see the GPU with NVMe
   flavors further down.

.. list-table::
   :widths: 25 20 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - GPU vRAM/vMEM (GB)
     - Flavor group
     - Version
     - CPU vendor

   * - hp.4x8-gpu4
     - 4
     - 8192
     - 4
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.4x8-gpu8
     - 4
     - 8192
     - 8
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.4x8-gpu24
     - 4
     - 8192
     - 24
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.8x24-gpu4
     - 8
     - 24576
     - 4
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.8x24-gpu8
     - 8
     - 24576
     - 8
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.8x24-gpu24
     - 8
     - 24576
     - 24
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.12x64-gpu4
     - 12
     - 65536
     - 4
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.12x64-gpu8
     - 12
     - 65536
     - 8
     - High performance with GPU
     - Version 1
     - Intel

   * - hp.12x64-gpu24
     - 12
     - 65536
     - 24
     - High performance with GPU
     - Version 1
     - Intel

GPU and NVMe storage
^^^^^^^^^^^^^^^^^^^^

These flavors provides both GPU and NVMe storage and is great when you need
to read or write fast to local NVMe storage for your GPU workload.

.. list-table::
   :widths: 25 20 20 20 20 40 40 20
   :header-rows: 1

   * - Name
     - vCPUs
     - Memory (MB)
     - Disk (GB)
     - GPU vRAM/vMEM
     - Flavor group
     - Version
     - CPU vendor

   * - hp.4x8-gpu4-nvme50
     - 4
     - 8192
     - 50
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.4x8-gpu4-nvme250
     - 4
     - 8192
     - 250
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.4x8-gpu8-nvme250
     - 4
     - 8192
     - 250
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.4x8-gpu8-nvme50
     - 4
     - 8192
     - 50
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.4x8-gpu24-nvme50
     - 4
     - 8192
     - 50
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.4x8-gpu24-nvme250
     - 4
     - 8192
     - 250
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu4-nvme50
     - 8
     - 24576
     - 50
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu4-nvme250
     - 8
     - 24576
     - 250
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu8-nvme50
     - 8
     - 24576
     - 50
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu8-nvme250
     - 8
     - 24576
     - 250
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu24-nvme50
     - 8
     - 24576
     - 50
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.8x24-gpu24-nvme250
     - 8
     - 24576
     - 250
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu4-nvme50
     - 12
     - 65536
     - 50
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu4-nvme250
     - 12
     - 65536
     - 250
     - 4
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu8-nvme50
     - 12
     - 65536
     - 50
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu8-nvme250
     - 12
     - 65536
     - 250
     - 8
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu24-nvme50
     - 12
     - 65536
     - 50
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

   * - hp.12x64-gpu24-nvme250
     - 12
     - 65536
     - 250
     - 24
     - High performance with GPU and NVMe
     - Version 1
     - Intel

..  seealso::

    - :doc:`/compute/gpu-instances`
    - :doc:`/storage/nvme-storage`
