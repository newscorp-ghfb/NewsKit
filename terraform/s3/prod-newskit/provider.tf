provider "aws" {
  region = "eu-west-1"
}

terraform {
  required_version = ">= 1.2" # eg 1.2.1
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.52.0"
    }
  }
  backend "s3" {
    bucket         = "newskit-docs-prod-terraform-state"
    dynamodb_table = "newskit-docs-prod-terraform-state-lock"
    # Gets changed to "newskit/s3/prod-newskit/staging/terraform.tfstate"
    # or "newskit/s3/prod-newskit/prod/terraform.tfstate"
    # by the Circle step called deploy_terraform_oidc
    key            = "newskit/s3/prod-newskit/terraform.tfstate"
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
}
