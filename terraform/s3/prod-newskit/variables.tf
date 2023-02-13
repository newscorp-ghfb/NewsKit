# root a/c and S3 role in nuk-digital-prod-newskit 
variable "s3_write_principals" {
  type        = list(string)
  description = "Bucket write access for following AWS principals"
  default     = ["005057636819", "arn:aws:iam::005057636819:role/circleci-aws-nuk-newskit-docs-prod-assume"]
}

variable "environment" {
  description = "Environment name"
  default     = "prod"
}

variable "tag_name_suffix" {
  description = "S3 tag name"
  default     = "-prod"
}

variable "docs_bucket" {
  description = "First bucket name per account for the documentation site"
  default     = "ncu-newskit-docs-prod"
}

variable "environment2" {
  description = "Second environment name"
  default     = "staging"
}

variable "tag_name_suffix2" {
  description = "Second S3 tag name"
  default     = "-staging"
}

variable "docs_bucket2" {
  description = "Second bucket name per account for the documentation site"
  default     = "ncu-newskit-docs-staging"
}
