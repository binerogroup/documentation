==============================
Designing security group rules
==============================

Recommendations
---------------

Below are some key points to take into consideration when designing security group
rules (firewall rules) in Binero cloud that will lead to a more secure application.

- Its recommended to make the rule as granular as possible. If you for example want to
  give access to a web server, then just add a rule for HTTP (tcp/80) and HTTPS
  (tcp/443), don't also allow access to UDP or any other ports.

- Lock down the source IP when the rule is for management, don't expose services
  that are not needed to be provide as your service. Only leave rules that give
  access to internet facing services from any source.

- Use the custom rules that enables you to add a destination port. Don't use the
  all open security group even if its internal. Its a large gain in security to
  just add access to the services that in fact need to be reached on all hosts as
  vulnerable services are one of the biggest reasons for security breaches. The
  fewer exposed, the better, including on internal networks.

- Since you apply your security groups per instance you wont set a destination when
  creating rules. The destination (or source if its an egress rule) is defined by what
  instances you add your security groups to. Take care to not add a rule to an instance
  that gives to much access. Rather create more security groups with more granular rules
  so that you minimize your instances exposure. 

- Remember egress or ingress (more info on the :doc:`index` page). Generally speaking, the
  security is lessened by adding ingress rules that provide access so design these to have a
  specific purpose. 

- If you still have the `default group <index.html#default-settings>`__ activated on your
  instances, you do not also need to provide access for your internal systems to reach each
  other. For an easier setup, we recommend keeping the default group (as it will emulate a
  traditional network where all local machines will reach each other). For a more secure
  solution, we recommend also adding security groups for internal access and removing the
  default group. **We do not recommending mixing the two options as that will be a less
  predictable (and therefore harder to understand) design**.

- When doing multiple subnets to allow for different security zones (the need for this is
  negated by using proper security groups that replace the default group as that will give
  you security between your instances on the same network as well), remember that the default
  group will leave your internal networks open to each other even though they are traversing
  a router.

- Create security groups based on use cases. A use case might be "web server" and another might
  be database server. The rules for each use case should be designed with the instance type in
  mind. Remember that its possible to add multiple security groups to any instance. Its easier
  (and less clear / more predictable) to have multiple, granular groups instead of a single,
  complex group.

- ``0.0.0.0/0`` means *all of the internet* when using it as a destination. We only recommend using
  this to provide access to a service that should indeed be globally reachable.

- Rules are by default stateful. This means that if a request is sent and accepted, the
  *return traffic* (that is: the traffic that the answering service sends as a reply to the request)
  is also allowed, irrespectively of wether that traffic flow is explicitly defined. This is a standard
  behaviour in a firewall. If you want to create a non stateful (stateless) rule, you can create the
  group using the :doc:`terminal client <openstack-terminal-client>` and the flag ``--stateless``. A
  stateless rule would only work in a single direction (egress or ingress). We generally recommend
  stateful rules but for some use-cases (for instance asymmetrical routing where you would not send the
  return traffic the same path), stateless rules might be required.

.. tip::

   The best way to ensure that you have correctly applied your rules is by testing. This can be done using
   the ``nmap`` command that can perform a port scan.

   For instance ``nmap -T4 1.2.3.4`` would scan the server with IP 1.2.3.4 (the -T4 flag limits the timeout
   per port to 10 ms which speeds up the otherwise slow process). The output will be a list of open ports.

   Remember mind to scan both from the inside (using your various internal instances against their internal
   IP addresses) as well as using for instance your workstation (against the floating IP that expose your
   services) to get the public internet perspective.

   We recommend doing scans after setting up or changing your security groups to make sure the actual result
   was what was expected. Binero protects it's network against abuse, we don't recommend doing excessive
   port scanning as that can trigger our intrusion detection system to block you.

Available parameters
--------------------

The following section shows what parameters you can use to create security groups. Please note that not all
parameters will be available from the GUI, some may require the :doc:`terminal client <openstack-terminal-client>`
to use. The terminal option is added within parentheses.

- Remote IP (--remote-ip) - Remote IP address or IP range (may use :doc:`CIDR notation <../private-subnet/subnet-format>`,
  default for IPv4 rule: 0.0.0.0/0, default for IPv6 rule: ::/0).

- Remote Group (--remote-group) - Remote security group (name or ID). Instead of IP, you could use a remote
  group to decide from where the traffic originates.

- Destination port (--dst-port) - Destination port, may be a single port or a starting and ending port range 137:139. Required
  for IP protocols TCP and UDP.

- Protocol (--protocol) - IP protocol – AH, DCCP, EGP, ESP, GRE, ICMP, IGMP, ipv6-encap, ipv6-frag, ipv6-icmp, ipv6-nonxt,
  ipv6-opts, ipv6-route, PGM, RSVP, SCTP, TCP, UDP, UDP-Lite, VRRP or a integer representations (0-255) or any (-1), default is 
  any (all protocols).

- ICMP typ (--icmp-type) - ICMP type for ICMP IP protocols.

- ICMP code (--icmp-code) - ICMP code for ICMP IP protocols.

- Direction (--ingress / --egress) - Rule applies to incoming or outgoing network traffic (incoming is
  default).

- IP version (--ethertype) - whether to use IPv4 or IPv6; default is based on IP protocol.

..  seealso::

    - :doc:`../index`
