provider "aws" {
  region = "eu-west-1"
}

terraform {
  required_version = ">= 1.2" # eg 1.2.1
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.74.0"
    }
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = "newskit-docs-prod-terraform-state"
     
  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }
}

#resource "aws_s3_bucket_versioning" "terraform_state" {
#    bucket = aws_s3_bucket.terraform_state.id
#
#    versioning_configuration {
#      status = "Enabled"
#    }
#
#    versioning {
#      enabled = true
#    }
#}

resource "aws_dynamodb_table" "terraform_state_lock" {
  name           = "newskit-docs-prod-terraform-state-lock"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}
