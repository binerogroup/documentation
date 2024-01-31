=============
GPU instances
=============

GPU based compute enables you to run computing tasks on a GPU (graphics processing unit).

Binero cloud uses NVIDIA A10 GPUs in our GPU instance flavors.

The key differences between GPUs and CPUs are:

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - CPUs
     - GPUs
   * - Work mostly in sequence. Several cores and very good task switching give the impression of parallelism but a CPU is fundamentally designed to run one task at a time.
     - Are designed to work in parallel. A vast amount of cores and threading managed in hardware enables GPUs to many simple calculations at once. 
   * - Are designed for task parallelism.
     - Are designed for data parallelism.
   * - Have a small amount of cores that can complete a single complex tasks at a very high speed.
     - Have a large amount of cores that work in tandem on computing many simple tasks. 
   * - Have access to a large amount of (by comparison) slow RAM at a low latency. CPUs are therefore latency (operation) optimised.
     - Have access to a (by comparison) small amount of very fast RAM at a higher latency. GPUs are therefore throughput optimised.
   * - Have a very versatile instruction set, allowing it to execute complex tasks in fewer cycles but creates overhead in others.
     - Have a limited (but highly optimised) instruction set which can execute the tasks its designed for very efficiently.
   * - Task switching (as a result from running the OS) creates overhead. 
     - Tasks switching is not used, lots of serial data streams are processed in parallel from A to B.
   * - Would always work for any given use case but may not provide good enough performance for some tasks. 
     - Would only be a valid choice for some use cases but would in those cases provide very good performance. 

In summary, for applications such as machine learning (ML), artificial intelligence (AI) or image processing, a GPU would likely provide a 50x to 200x increase in performance over a typical CPU doing the same work. Using a GPU, however, requires and adaptation to the APIs available from the GPU manufacturer. Binero cloud provides GPUs from Nvidia, supporting among others OpenCL and CUDA. 

Binero clouds compute instances are all running on our high performance instance types. While the GPU is generally an *accelerator* (that is, used to speed up certain general compute processes not specifically relating to graphics), its also possible to use it as a graphics processing unit in an instance for actually accelerating 3D or high resolution 2D. 

Setting up a GPU instance
-------------------------

A GPU instance :doc:`is launched <launching-an-instance/index>` the same way as any other compute instance with a few things to keep in mind:

- When launching a GPU, select one of the :doc:`flavors` that include GPUs. 
- You have the option to choose a GPU with NVMe backed storage for very high performing storage. This is however not a requirement for GPU based compute, see :doc:`/storage/nvme-storage` for mor information.
- We recommend using Ubuntu 22.04 as :doc:`image </images/index>` for your GPU based instance. This is because we have tested the Nvidia driver with this image with good result. That said, its possible to run a multitude of images. 
- When the image is up and running, you will get a maximum of 10% of the GPUs performance without a license installed. Please see below section on installing license for more information.

Installing the driver
---------------------

In order to use the GPU functionality, a driver from nVidia needs to be installed on the instance that has access to the virtual GPU. Please follow below instructions to install the driver.

The current version of the driver that we support is: **535.129.03**.

.. important: After installation of the driver, a reboot will be required. Schedule the upgrade so as to allow for a reboot to take place. 

Linux
^^^^^

Follow the below steps to install the Linux driver in your instance.

.. note:: In the below example we are using Ubuntu 22.04 as operating system. For any other Linux OS, the steps would be equal but some commands are not identical. Please ask our support if you need assistance installing the driver on another of the images we provide.

- Verify that the instance is able to see the graphics adapter. This can be done by running ``lspci | grep -i nvidia`` which would return something like ``00:05.0 VGA compatible controller: NVIDIA Corporation Device 2236 (rev a1)``.
- Installation of g++, make, dkms and unzip is required for the installation of the driver. This can be installed by running for instance (depending on OS): ``sudo apt update; sudo apt -y install build-essential dkms unzip``
- Fetch the driver by running: ``wget https://binero.com/downloads/NVIDIA-Linux-x86_64-535.129.03-grid.zip``.
- Unzip the driver by running: ``unzip NVIDIA-Linux-x86_64-535.129.03-grid.zip``.
- Set execute permissions by running ``chmod u+x NVIDIA-Linux-x86_64-535.129.03-grid.run``.
- Install the driver by running ``./NVIDIA-Linux-x86_64-535.129.03-grid.run --dkms --no-cc-version-check --ui=none --no-questions``.
- Verify a successful installation by reading ``/var/log/nvidia-installer.log``. The command ``nvidia-smi`` would give you more useful output.
- At this point, you need a valid license which `our support </general/getting-support>`_ can provide. Its included in the instance monthly cost but not assigned until requested.
- The license should be pasted into ``/etc/nvidia/ClientConfigToken/client_configuration_token.tok``.
- Restart Nvidia gridd by running ``sudo systemctl restart nvidia-gridd``.
- The command ``nvidia-smi -q | grep License`` should now return a valid license.
- Install Cuda toolkit and CudNN (note that below instruction is for Ubuntu, other OSes might require different install packages):

::

    $ wget https://developer.download.nvidia.com/compute/cuda/12.2.0/local_installers/cuda_12.2.0_535.54.03_linux.run
    $ chmod +x cuda_12.2.0_535.54.03_linux.run
    $ sudo ./cuda_12.2.0_535.54.03_linux.run --silent --toolkit --override --no-opengl-libs --no-drm
    $ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/libcudnn8_8.9.6.50-1+cuda12.2_amd64.deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/libcudnn8-dev_8.9.6.50-1+cuda12.2_amd64.deb
    $ dpkg -i libcudnn8-dev_8.9.6.50-1+cuda12.2_amd64.deb libcudnn8_8.9.6.50-1+cuda12.2_amd64.deb


- Install tensor flow (this is optional):

::

    sudo apt install python3-zip
    pip3 install tensorflow==2.6.0

You are now able to run GPU based computations on your instance!

Windows
^^^^^^^
- Download the driver `here <https://binero.com/downloads/537.70_grid_win10_win11_server2019_server2022_dch_64bit_international.exe>`__.
- Execute the file with administrative privileges and click through the installation.
- When the installation finishes, reboot the instance. 
- Open the device manager by running ``devmgmt.msc``.
- Under "display adapters" the device should now be available.
- At this point, you need a valid license which `our support </general/getting-support>`_ can provide. Its included in the instance monthly cost but not assigned until requested.
- The license file should go in this folder: ``%SystemDrive%:\Program Files\NVIDIA Corporation\vGPU Licensing\ClientConfigToken``. More information from Nvidia is available `here <https://docs.nvidia.com/grid/latest/grid-licensing-user-guide/#configuring-nls-licensed-client-on-windows>`_.
- Open services by running ``services.msc`` and restart the service ``NvDisplayContainer``.

You are now able to run GPU based computations on your instance!

Upgrading the driver
--------------------
From time to time, nVidia will release (and Binero will provide) and upgraded version of the GPU driver. This is in order to correct potential bugs and keep the software secure. When this happens, Binero strongly recommends (and in some cases, it will be required to maintain a working system) that the driver be updated on the instances running it. Please follow below instructions to upgrade the driver.

The current version of the driver that we support is: Windows: **537.70** Linux **535.129.03**.

.. important: After installation of the driver, a reboot will be required. Schedule the upgrade so as to allow for a reboot to take place. 

Linux
^^^^^

Follow below steps to upgrade the Nvidia+cuda driver on a Linux based plattform:

- ``wget https://binero.com/downloads/NVIDIA-Linux-x86_64-535.129.03-grid.zip``
- Install (if needed) unzip, for instance by running ``apt-get -y install unzip``
- Unzip the driver, for instance by running ``unzip NVIDIA-Linux-x86_64-535.129.03-grid.zip``
- Set execute permissions by running ``chmod u+x NVIDIA-Linux-x86_64-535.129.03-grid.run``
- Install the driver by running ``./NVIDIA-Linux-x86_64-535.129.03-grid.run --dkms --no-cc-version-check --ui=none --no-questions``
- Reboot the system.
- Verify version by running ``nvidia-smi``.
- To upgrade cuda, first uninstall it by running ``sudo /usr/local/cuda/bin/cuda-uninstaller`` and checking all options.

::

    $ wget https://developer.download.nvidia.com/compute/cuda/12.2.0/local_installers/cuda_12.2.0_535.54.03_linux.run
    $ chmod +x cuda_12.2.0_535.54.03_linux.run
    $ sudo ./cuda_12.2.0_535.54.03_linux.run --silent --toolkit --override --no-opengl-libs --no-drm
    $ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/libcudnn8_8.9.6.50-1+cuda12.2_amd64.deb https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/libcudnn8-dev_8.9.6.50-1+cuda12.2_amd64.deb
    $ dpkg -i libcudnn8-dev_8.9.6.50-1+cuda12.2_amd64.deb libcudnn8_8.9.6.50-1+cuda12.2_amd64.deb

Windows
^^^^^^^

Follow below steps to upgrade the nVidia driver on a Windows based platform:

- Download the driver `here <https://binero.com/downloads/537.70_grid_win10_win11_server2019_server2022_dch_64bit_international.exe>`__.
- Execute the file with administrative privileges.
- Follow the installation instructions. 
- Reboot the system.

..  seealso::
    - :doc:`/general/getting-support`
    - :doc:`/images/index`
    - :doc:`/compute/flavors`
