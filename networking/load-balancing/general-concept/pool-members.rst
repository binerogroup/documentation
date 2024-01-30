============
Pool members
============
A member is a compute instance that runs a service (for instance Apache). When load balancing, a member receives proxied requests from the listener through its membership in the pool. Members are health checked by the pool and included in it, if they are found to be working (and dynamically removed if not). This is an automated process, if a member should be detected to have failed for any reason (by its health checker) it will be disabled in the pool. Checking continues and as soon as the member is (again) working (as detected by health checking), it will be enabled back into the pool automatically. Members can have some configuration: 

- Explicit monitoring IPs and/or ports if you want to do health checking on something other than the members own private IP.
- Backup flag - this means that the member is a fallback server if all the normal members are down. For instance when doing maintenance on an application you'd might like to show a notification that your site is down and will be back later. 
- Weight can be set so that a member receives a disproportionate amount of request. A higher weight means more requests, the maximum number is 256. We recommend keeping all members identical and as such, this should rarely (if ever) be used.

All members should have an IP on a :doc:`private subnet <../../router/private-subnet/index>`. While the private subnet does not have to be the same as the one the listener uses, its recommended for simplicity as well as performance. 

..  seealso::
    - :doc:`../recommendations`


