=============
GPU instances
=============

GPU based compute enables you to run computing tasks on a GPU (graphics
processing unit).

Binero cloud uses NVIDIA A10 GPUs in our GPU instance flavors.

The key differences between GPUs and CPUs are:

.. list-table::
   :widths: 50 50
   :header-rows: 1

   * - CPUs
     - GPUs

   * - Generally work in sequence. Many cores and good task switching give
       the impression of parallelism but a CPU is fundamentally designed to run
       one task at a time.
     - Designed to work in parallel. A large amount of cores and threading
       managed in hardware enables GPUs to perform many calculations at once. 

   * - Designed for task parallelism.
     - Designed for data parallelism.

   * - Have a small amount of cores that can complete a single complex tasks at
       a high speed.
     - Have a large amount of cores that work in tandem on computing many tasks
       or calculations in parallel.

   * - Have access to a large amount of (by comparison) slow RAM at a low
       latency. CPUs are latency (operation) optimized.
     - Have access to a (by comparison) small amount of fast RAM at a higher
       latency. GPUs are throughput optimized.

   * - Have a versatile instruction set, allowing it to perform complex tasks
       in fewer cycles but is bad at some other tasks.
     - Have a limited (but highly optimized) instruction set which can perform
       the tasks its designed for efficiently.

   * - Task switching and general use-case decreases performance. 
     - Tasks switching is not used, processes serial data streams in
       parallel from A to B.

   * - Would always work for any given use-case but might not provide good enough
       performance for some tasks.
     - Would only be a valid choice for some use-cases but would in those cases
       provide good performance.

In summary, for applications such as machine learning (ML), artificial intelligence (AI) or
image processing, a GPU would likely provide a 50x to 200x increase in performance over a typical
CPU doing the same work.

Using a GPU, requires adaptation to the APIs available from the GPU manufacturer.

Binero cloud provides GPUs from NVIDIA, supporting among others OpenCL and CUDA running
on our high performance instance types.

Setting up a GPU instance
-------------------------

You :doc:`launch <launching-an-instance/index>` a GPU instance the same way as any other
compute instance with a few things to remember:

- When launching a GPU, select one of the :doc:`flavors` that include GPUs. 

- You have the option to choose a GPU with NVMe backed storage for high performing storage. This
  is not a must for GPU based compute, see :doc:`/storage/nvme-storage` for more information.

- We recommend using Ubuntu 24.04 as :doc:`image </images/index>` for your GPU based instance. This is
  because we have tested the NVIDIA driver with this image with good result. That said, its possible to
  run a multitude of images.

- When the image is up and running, you will only get 10% of the GPUs performance without a license
  installed. See below section on installing license for more information.

Installing the driver
---------------------

To use the GPU functionality, you need to install a driver from NVIDIA on the instance that has
access to the GPU. See the below instructions to install the driver.

The current NVIDIA vGPU Software Version that we are running is: **18.1**

The current latest driver we support is **Linux: 570.133.20** and **Windows: 572.83** 

For full list of supported versions click `here <https://docs.nvidia.com/vgpu/18.0/grid-vgpu-release-notes-red-hat-el-kvm/index.html>`__.

.. important::

   After installing the driver you must reboot your instance. Schedule the upgrade to allow for a
   reboot to take place. 

Linux
^^^^^

Follow the below steps to install the Linux driver in your instance.

.. note::

   The example below is using Ubuntu 24.04 as operating system. For any other Linux based operating system, the
   steps would be equal but some commands might not be identical.

   :doc:`Contact our support </general/getting-support>` if you need help installing the driver on other
   operating systems than the example below.

- Verify that the instance is able to see the graphics adapter by running ``lspci | grep -i nvidia`` which
  would return something like ``00:05.0 VGA compatible controller: NVIDIA Corporation Device 2236 (rev a1)``

- You need to install the dependencies ``g++``, ``make`` and ``dkms`` to installation and build the driver. This
  depends on your operating system, for example ``sudo apt update && sudo apt -y install build-essential dkms``

- Fetch the driver by running: ``curl -O https://binero.com/downloads/nvidia-linux-grid-570_570.133.20_amd64.deb``

- Set executable permission by running ``chmod +x nvidia-linux-grid-570_570.133.20_amd64.deb``

- Install the driver by running ``dpkg -i nvidia-linux-grid-570_570.133.20_amd64.deb``

- Verify a successful installation by reading ``/var/log/nvidia-installer.log``. The command ``nvidia-smi`` would
  give you more useful output.

- At this point, you need a valid license which `our support </general/getting-support>`_ provides you with. Its
  included in the instance cost but not assigned until requested.

- The license should added to file ``/etc/nvidia/ClientConfigToken/client_configuration_token.tok`` making sure
  to not have any extra spaces or newlines.

- Restart ``nvidia-gridd`` by running ``sudo systemctl restart nvidia-gridd``

- The command ``nvidia-smi -q | grep License`` should now return a valid license

- Install CUDA toolkit and CuDNN (optional, note that below instruction is for Ubuntu, other operating systems might
  require different packages)

::

    curl -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-dev-cuda-12_9.10.1.4-1_amd64.deb -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-cuda-12_9.10.1.4-1_amd64.deb -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-headers-cuda-12_9.10.1.4-1_amd64.deb
    dpkg -i libcudnn9-headers-cuda-12_9.10.1.4-1_amd64.deb libcudnn9-cuda-12_9.10.1.4-1_amd64.deb libcudnn9-dev-cuda-12_9.10.1.4-1_amd64.deb

- Install TensorFlow (optional)

::

    curl -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-dev-cuda-12_9.10.1.4-1_amd64.deb -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-cuda-12_9.10.1.4-1_amd64.deb -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/libcudnn9-headers-cuda-12_9.10.1.4-1_amd64.deb
    dpkg -i libcudnn9-headers-cuda-12_9.10.1.4-1_amd64.deb libcudnn9-cuda-12_9.10.1.4-1_amd64.deb libcudnn9-dev-cuda-12_9.10.1.4-1_amd64.deb

You are now able to run GPU based computations on your instance!

Windows
^^^^^^^

- Download the driver `here <https://binero.com/downloads/572.83_grid_win10_win11_server2022_dch_64bit_international.exe>`__.

- Run the file with administrative privileges and click through the installation.

- When the installation finishes, reboot the instance. 

- Open the device manager by running ``devmgmt.msc``.

- Under **Display adapters** the device should now be available.

- At this point, you need a valid license which `our support </general/getting-support>`_ can provide. Its included in the
  instance monthly cost but not assigned until requested.

- The license file should go in this folder: ``%SystemDrive%:\Program Files\NVIDIA Corporation\vGPU Licensing\ClientConfigToken``. More information
  from NVIDIA is available `here <https://docs.nvidia.com/grid/latest/grid-licensing-user-guide/#configuring-nls-licensed-client-on-windows>`_.

- Open services by running ``services.msc`` and restart the service ``NvDisplayContainer``.

You are now able to run GPU based computations on your instance!

Upgrading the driver
--------------------

From time to time, NVIDIA will release (and Binero will provide) and upgraded version of the GPU driver.

This is to correct potential bugs and keep the software secure. When this happens, Binero strongly recommends (and in some cases, you must upgrade
to maintain a working system) that you upgrade the driver on the your instances.

See below instructions to upgrade the driver.

The latest version of the driver that we support is **Linux: 570.133.20** and **Windows: 572.83**

.. important::

   After upgrading the driver you must reboot your instance. Schedule the upgrade to allow for a
   reboot to take place. 

Linux
^^^^^

Follow below steps to upgrade the NVIDIA + CUDA driver on a Linux based platform:

- Download the driver ``curl -O https://binero.com/downloads/nvidia-linux-grid-570_570.133.20_amd64.deb``

- Install the driver by running ``dpkg -i nvidia-linux-grid-570_570.133.20_amd64.deb``

- Reboot the system.

- Verify version by running ``nvidia-smi``.

- To upgrade CUDA, first uninstall it by running ``sudo /usr/local/cuda/bin/cuda-uninstaller`` and checking
  all options.

::

    curl -O https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-keyring_1.1-1_all.deb
    sudo dpkg -i cuda-keyring_1.1-1_all.deb
    sudo apt-get update
    sudo apt-get -y install cuda-toolkit-12-9

Windows
^^^^^^^

Follow below steps to upgrade the NVIDIA driver on a Windows based platform:

- Download the driver `here <https://binero.com/downloads/572.83_grid_win10_win11_server2022_dch_64bit_international.exe>`__.

- Run the file with administrative privileges.

- Follow the installation instructions. 

- Reboot the system.

..  seealso::

    - :doc:`/general/getting-support`
    - :doc:`/images/index`
    - :doc:`/compute/flavors`
