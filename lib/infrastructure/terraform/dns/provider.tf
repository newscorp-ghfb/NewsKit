provider "aws" {
  region = "eu-west-1"
}

terraform {
  backend "s3" {
    bucket = "nu-sun-terraform-state"
    key    = "product-platforms/newskit/dns/dev/terraform.tfstate"
    region = "eu-west-1"
  }
}

locals {
  tags = {
    Name               = "ncu-newskit-dns-${var.environment}"
    Environment        = var.environment
    ServiceOwner       = "product-platforms"
    ServiceName        = "ncu-newskit"
    ServiceCatalogueId = 331
  }
}