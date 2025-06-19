=================
Schedule Snapshot
=================

Using our service catalog, you can setup a recurring :doc:`snapshot </storage/snapshots/index>` job
for one ore more of your :doc:`block storage volumes </storage/persistent-block-storage/index>`.

The snapshot creation is using our :doc:`/platform-automation/index` tool but using this to setup
recurring snapshots can be a complex task. The service catalog greatly simplifies this.

To setup the service, first follow the general instructions on our :doc:`index` page.

Then follow these instructions: 

- Give your service a name and optionally a description.

- In the **Cron in GMT** field you decide when and how often the job should run. You can use hourly, daily
  or weekly as base. Select the one that is closest to what you want to do. If you for example want to run
  a snapshot job once per night, select **daily** and then set the **Hour(s)** field to the hour you want to run
  the job.

- In the **Age of snapshot deletion in hours** you select how many historical copies you want to keep. If you keep
  the default value of 72, when taking snapshots, previous snapshots that are older than 72 hours would get deleted. 

- In the **volume** field, select the volume that you want to backup.

- Press **Launch** when done. 

..  seealso::

  - :doc:`index`
