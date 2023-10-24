==========================================
Manage OpenStack resources using Terraform
==========================================
Terraform is a very popular tool that automates infrastructure in various platforms. It has an OpenStack module and as such is compatible with Binero.Cloud. In this guide, we will walk through some concepts that enable you to use it with the platform. 

Prepare Terraform
-----------------
The official installation guide is available here: `here <https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli>`__. 

To get Terraform speaking with Binero.Cloud, you will need to configure the OpenStack provider. `Here <https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs>`__ is a good place to get information on how to do that. 

Start by creating an :doc:`API user </getting-started/users>` and download its OpenRC file (by pressing the small arrow next to it). The information in this file is needed to configure the Terraform provider. An example configuration file (called for instance "demo.tf") could look like this: 

:: 

	# Define required providers
	terraform {
	required_version = ">= 0.14.0"
	  required_providers {
	    openstack = {
	      source  = "terraform-provider-openstack/openstack"
	      version = "~> 1.51.1"
	    }
	  }
	}

	# Configure the OpenStack Provider
	provider "openstack" {
	  user_name     = "api-user"
	  tenant_name   = "api-user"
	  password      = "pwd"
	  auth_url      = "https://auth.binero.cloud:5000/v3"
	  region        = "europe-se-1"
	  endpoint_type = "public"
	}
	

Working with Binero.Cloud through Terraform
-------------------------------------------
Covering Terraform in depth is out-of-scope for this guide. Generally speaking, Terraform will support "datasources" (information about whats available in the cloud) and "resources" (objects managed in the cloud). Below is an example of an instance setup in the cloud: 

::

	data "openstack_compute_flavor_v2" "demoflavor" {
   	  name = "gp.1x2"
 	}
	
	data "openstack_images_image_v2" "centos8" {
	  name = "centos-8-x86_64"
	}

	resource "openstack_compute_instance_v2" "demo" {
	  name            = "demo"
	  image_id        = data.openstack_images_image_v2.centos8.id
	  flavor_id       = data.openstack_compute_flavor_v2.demoflavor.id
	  key_pair        = "user-key"
	  security_groups = ["default"]
	  metadata = {
	    this = "that"
	  }
	  network {
	    name = "europe-se-1-1a-net0"
	  }
	}
	

Creating the above example in the same demo.tf file from before and running ``$ terraform apply`` will create the instance. 

More information on what the OpenStack provider can do is available `here <https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs>`__. 

