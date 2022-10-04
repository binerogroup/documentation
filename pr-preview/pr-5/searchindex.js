Search.setIndex({"docnames": ["block-storage/introduction", "cloud-concepts/availability-zones", "cloud-concepts/regions", "compute/introduction", "container-engines/kubernetes", "index", "managing-your-cloud/control-panel", "managing-your-cloud/openstack-api", "managing-your-cloud/openstack-cli", "managing-your-cloud/openstack-horizon", "networking/introduction", "object-storage/introduction", "object-storage/s3/bucket-notifications", "object-storage/s3/bucket-website", "object-storage/s3/encryption-sse-c", "object-storage/s3/index", "object-storage/s3/lifecycling", "object-storage/s3/object-lock", "object-storage/s3/object-versioning", "object-storage/s3/presigned-urls", "object-storage/s3/public-urls", "object-storage/s3/requester-pays", "object-storage/s3/storage-classes", "object-storage/swift/index", "object-storage/swift/something"], "filenames": ["block-storage/introduction.rst", "cloud-concepts/availability-zones.rst", "cloud-concepts/regions.rst", "compute/introduction.rst", "container-engines/kubernetes.rst", "index.rst", "managing-your-cloud/control-panel.rst", "managing-your-cloud/openstack-api.rst", "managing-your-cloud/openstack-cli.rst", "managing-your-cloud/openstack-horizon.rst", "networking/introduction.rst", "object-storage/introduction.rst", "object-storage/s3/bucket-notifications.rst", "object-storage/s3/bucket-website.rst", "object-storage/s3/encryption-sse-c.rst", "object-storage/s3/index.rst", "object-storage/s3/lifecycling.rst", "object-storage/s3/object-lock.rst", "object-storage/s3/object-versioning.rst", "object-storage/s3/presigned-urls.rst", "object-storage/s3/public-urls.rst", "object-storage/s3/requester-pays.rst", "object-storage/s3/storage-classes.rst", "object-storage/swift/index.rst", "object-storage/swift/something.rst"], "titles": ["Introduction to Block Storage", "Availability Zones", "Regions", "Introduction to Compute", "Kubernetes", "Welcome to Binero.Cloud!", "Control panel", "OpenStack REST API", "OpenStack CLI", "OpenStack Horizon", "Introduction to Networking", "Introduction to Object Storage", "Bucket Notifications", "Bucket Website", "Encryption with Customer Provided Keys (SSE-C)", "S3", "Lifecycling", "Object Lock", "Object Versioning", "Presigned URLs", "Public URLs", "Requester Pays Buckets", "Storage Classes", "OpenStack Swift", "Something"], "terms": {"intro": 0, "here": 0, "what": [1, 2, 11], "i": [1, 2, 11, 22], "az": 1, "asdasd": [3, 4, 6, 10, 14, 16, 18, 20], "own": 5, "virtual": 5, "datacent": 5, "you": [5, 11], "can": [5, 11], "account": 5, "u": 5, "portal": 5, "com": 5, "control": 5, "us": [5, 7, 8, 9], "either": 5, "openstack": 5, "horizon": [5, 11], "dashboard": 5, "api": [5, 11], "user": 5, "also": 5, "cli": [5, 11], "ani": [5, 11], "offici": 5, "rest": 5, "panel": 5, "region": [5, 11], "avail": [5, 11], "zone": [5, 11], "introduct": 5, "router": 5, "float": 5, "ip": 5, "address": 5, "load": 5, "balanc": 5, "case": 5, "s3": 5, "swift": 5, "kubernet": 5, "how": [7, 8, 9], "asdad": 10, "work": 11, "veri": 11, "well": 11, "unstructur": 11, "data": 11, "set": 11, "where": 11, "gener": 11, "written": 11, "onc": 11, "read": 11, "mani": 11, "time": 11, "static": 11, "web": 11, "content": 11, "backup": 11, "imag": 11, "multimedia": 11, "file": 11, "ar": 11, "best": 11, "store": 11, "our": 11, "provid": [11, 15, 22], "compat": 11, "which": 11, "enabl": [11, 18], "exist": 11, "tool": 11, "ecosystem": 11, "when": [11, 18], "servic": 11, "we": [11, 13, 17, 22], "from": 11, "europ": 11, "se": 11, "1a": 11, "1": 11, "plan": [11, 22], "introduc": 11, "more": 11, "futur": 11, "therefor": 11, "current": [11, 22], "replic": 11, "support": [11, 13, 17, 22], "endpoint": 11, "http": 11, "eu": 11, "binero": 11, "cloud": 11, "v1": 11, "auth_": 11, "tenant_id": 11, "": 11, "The": 11, "below": 11, "tabl": 11, "give": 11, "an": 11, "overview": 11, "differ": [11, 22], "optim": 11, "default": [11, 22], "new": 11, "bucket": [11, 15, 18, 22], "unless": 11, "other": 11, "specifi": 11, "upon": 11, "creation": 11, "metadata": 11, "contain": 11, "alwai": 11, "ssd": 11, "flash": 11, "addit": 11, "cost": 11, "type": 11, "primari": 11, "secondari": 11, "size": 11, "small": 11, "medium": [11, 22], "huge": 11, "larg": 11, "access": 11, "constantli": 11, "seldom": 11, "fast": 11, "low": 11, "latenc": 11, "long": 11, "hdd": 11, "mechan": 11, "reliabl": 11, "99": 11, "999": 11, "9": 11, "applic": 11, "need": 11, "consistent": 11, "lowest": 11, "thi": [11, 13, 17], "otherwis": 11, "moder": 11, "purpos": 11, "less": 11, "frequent": 11, "cold": 11, "term": 11, "possibl": 11, "price": 11, "per": 11, "gb": 11, "higher": 11, "due": 11, "authent": 11, "backend": 11, "do": [11, 13, 17, 22], "browser": 11, "upload": 11, "chunk": 11, "transfer": 11, "featur": [11, 13, 17], "awsv4": 11, "signatur": 11, "name": 11, "dn": 11, "hostnam": 11, "instead": 11, "must": 11, "suppli": 11, "url": [11, 15], "see": 11, "public": [11, 15], "section": 11, "entiti": 11, "call": 11, "page": 11, "secret": 11, "kei": [11, 15], "ec2": 11, "credenti": 11, "creat": [11, 22], "s3cmd": 11, "aw": 11, "sdk": 11, "librari": 11, "exampl": 11, "specif": [11, 22], "s3api": 11, "newbucket": 11, "configur": 11, "locationconstraint": 11, "note": 11, "determin": 11, "your": 11, "asd": [12, 24], "yet": [13, 17], "storag": 15, "class": 15, "presign": 15, "encrypt": 15, "custom": 15, "sse": 15, "c": 15, "object": [15, 22], "version": 15, "lock": 15, "lifecycl": [15, 22], "request": 15, "pai": 15, "notif": 15, "websit": 15, "ha": 18, "been": 18, "cannot": 18, "disabl": 18, "onli": [18, 22], "suspend": 18, "asda": 21, "sinc": 22, "exclud": 22, "standard": 22, "between": 22, "someth": 23}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": [0, 3, 10, 11], "block": [0, 5], "storag": [0, 5, 11, 22], "us": [0, 11], "case": [0, 11], "avail": 1, "zone": 1, "region": 2, "comput": [3, 5], "tabl": 3, "content": 3, "instanc": 3, "flavor": 3, "kubernet": 4, "welcom": 5, "binero": 5, "cloud": 5, "get": [5, 11], "start": [5, 11], "index": 5, "manag": 5, "your": 5, "resourc": 5, "concept": 5, "network": [5, 10], "object": [5, 11, 17, 18], "contain": 5, "engin": 5, "control": 6, "panel": 6, "openstack": [7, 8, 9, 11, 23], "rest": 7, "api": 7, "cli": 8, "horizon": 9, "router": 10, "float": 10, "ip": 10, "address": 10, "load": 10, "balanc": 10, "locat": 11, "hp": 11, "intens": 11, "gp": 11, "recur": 11, "intermitt": 11, "archiv": 11, "limit": 11, "s3": [11, 15], "swift": [11, 23], "bucket": [12, 13, 21], "notif": 12, "websit": 13, "encrypt": 14, "custom": 14, "provid": 14, "kei": 14, "sse": 14, "c": 14, "lifecycl": 16, "lock": 17, "version": 18, "presign": 19, "url": [19, 20], "public": 20, "request": 21, "pai": 21, "class": 22, "someth": 24}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Introduction to Block Storage": [[0, "introduction-to-block-storage"]], "Use Cases": [[0, "use-cases"], [11, "use-cases"]], "Availability Zones": [[1, "availability-zones"]], "Regions": [[2, "regions"]], "Introduction to Compute": [[3, "introduction-to-compute"]], "Table of Contents": [[3, "table-of-contents"]], "Instances": [[3, "instances"]], "Flavors": [[3, "flavors"]], "Kubernetes": [[4, "kubernetes"]], "Welcome to Binero.Cloud!": [[5, "welcome-to-binero-cloud"]], "Getting Started": [[5, "getting-started"], [11, "getting-started"]], "Index": [[5, "index"]], "Managing your cloud resources": [[5, null]], "Cloud Concepts": [[5, null]], "Compute": [[5, null]], "Networking": [[5, null]], "Block Storage": [[5, null]], "Object Storage": [[5, null]], "Container Engines": [[5, null]], "Control panel": [[6, "control-panel"]], "OpenStack REST API": [[7, "openstack-rest-api"]], "OpenStack CLI": [[8, "openstack-cli"]], "OpenStack Horizon": [[9, "openstack-horizon"]], "Introduction to Networking": [[10, "introduction-to-networking"]], "Network": [[10, "network"]], "Routers": [[10, "routers"]], "Floating IP addresses": [[10, "floating-ip-addresses"]], "Load Balancers": [[10, "load-balancers"]], "Introduction to Object Storage": [[11, "introduction-to-object-storage"]], "Locations": [[11, "locations"]], "hp.intensive": [[11, "hp-intensive"]], "gp.recurring": [[11, "gp-recurring"]], "gp.intermittent": [[11, "gp-intermittent"]], "gp.archive": [[11, "gp-archive"]], "Limitations": [[11, "limitations"]], "S3": [[11, "s3"], [11, "id1"], [15, "s3"]], "OpenStack Swift": [[11, "openstack-swift"], [23, "openstack-swift"]], "Bucket Notifications": [[12, "bucket-notifications"]], "Bucket Website": [[13, "bucket-website"]], "Encryption with Customer Provided Keys (SSE-C)": [[14, "encryption-with-customer-provided-keys-sse-c"]], "Lifecycling": [[16, "lifecycling"]], "Object Lock": [[17, "object-lock"]], "Object Versioning": [[18, "object-versioning"]], "Presigned URLs": [[19, "presigned-urls"]], "Public URLs": [[20, "public-urls"]], "Requester Pays Buckets": [[21, "requester-pays-buckets"]], "Storage Classes": [[22, "storage-classes"]], "Something": [[24, "something"]]}, "indexentries": {}})