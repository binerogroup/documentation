=======
Console
=======
You are able to get the "monitor output" from your instances using the instance console in either the :doc:`cloud management portal </getting-started/managing-your-cloud/cloud-management-portal>` or :doc:`OpenStack Horizon </getting-started/managing-your-cloud/openstack-horizon>`. This is useful if you need to debug a malfunctioning network or an otherwise un-reachable instance.

.. Note::
	Since you cannot use SSH-keys to login to a console but need to have a password, if you've not set a password (but trusted in the keys from provisioning), you will have to reset the root or administrator password. How to do this will vary by Operating System but for the majority of Linux  systems, booting into "single user mode" will enable a password-less login which can be used to reset the password for the root user.

Cloud management portal console
-------------------------------

- Press "Compute" and then "Instances" in the sidebar menu.
- Press the instance you want to view console output for. 
- Press the console icon (looks like "< >") in the top right. 
- A new window will appear showing the console output. If the image is blank, this might be because the screen is in "power save" mode (OS setting). Press the mouse cursor on the output and press for instance "ctrl" (or some other button that would not inadvertently do something).

OpenStack Horizon console
-------------------------

- Under "project", click "compute" and then "instances" in the sidebar menu.
- In the drop-down menu to the far right of the line corresponding to the instance you want to view console for, press "Console".
- A new window will appear showing the console output. If the image is blank, this might be because the screen is in "power save" mode (OS setting). Press the mouse cursor on the output and press for instance "ctrl" (or some other button that would not inadvertently do something).


..  seealso::
    - :doc:`/getting-started/managing-your-cloud/cloud-management-portal`
    - :doc:`/getting-started/managing-your-cloud/openstack-horizon`
