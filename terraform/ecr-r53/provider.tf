provider "aws" {
  region = "eu-west-1"
}

terraform {
  backend "s3" {
    bucket = "nu-sun-terraform-state"
    key    = "product-platforms/poc/terraform.tfstate"
    region = "eu-west-1"
  }
}