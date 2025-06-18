===============
Schedule Backup
===============

Using our service catalog, you can setup a recurring backup job for one ore more of
your :doc:`block storage volumes </storage/persistent-block-storage/index>`.

The backup will be ran using our :doc:`/platform-automation/index` tool but using this to
setup recurring backups can be a complex task. The service catalog greatly simplified this.

To setup the service, first follow the general instructions on our :doc:`index` page.

Then follow these instructions: 

- Give your service a name and optionally a description.

- In the **Cron in GMT** field you decide when and how often the job should run. You can use
  hourly, daily or weekly as base. Select the one that is closest to what you want to do. If
  you for example want to run a backup job once per night, select **daily** and then set the
  **Hour(s)** field to the hour you want to run the job.

- In **Age of backup deletion in days** you select how many historical backups you want to
  keep. If you keep the default value of 10, when creating backups, previous backups that
  are older than 10 days gets deleted. 

- In the **Volume** field, select the volume that you want to backup.

- Press **Launch** when done. 

..  seealso::

  - :doc:`index`
