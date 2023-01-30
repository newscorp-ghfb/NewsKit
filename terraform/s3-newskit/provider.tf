provider "aws" {
  region = "eu-west-1"
}

terraform {
  required_version = ">= 0.12" # eg 0.12.28
  backend "s3" {
    bucket = var.tfstate_bucket
    key    = var.tfstate_key
    region = "eu-west-1"
  }
}

locals {
  tags = {
    Name               = "ncu-newskit-s3${var.tag_name_suffix}"
    Environment        = var.environment
    ServiceOwner       = "product-platforms"
    ServiceName        = "ncu-newskit"
    ServiceCatalogueId = 331
  }

  tags2 = {
    Name               = "ncu-newskit-s3${var.tag_name_suffix2}"
    Environment        = var.environment
    ServiceOwner       = "product-platforms"
    ServiceName        = "ncu-newskit"
    ServiceCatalogueId = 331
  }
}