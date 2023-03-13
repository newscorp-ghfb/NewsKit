# root a/c and S3 role in nuk-digital-prod-newskit 
variable "s3_write_principals" {
  type        = list(string)
  description = "Bucket write access for following AWS principals"
  default     = ["005057636819", "arn:aws:iam::005057636819:role/circleci-aws-nuk-newskit-docs-prod-assume"]
}

variable "environment" {
  description = "Environment name"
}

variable "tag_name_suffix" {
  description = "S3 tag name"
}

variable "docs_bucket" {
  description = "Bucket name per account for the documentation site"
}
