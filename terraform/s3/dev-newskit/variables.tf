# root a/c and S3 role in nuk-digital-dev-newskit 
variable "s3_write_principals" {
  type        = list(string)
  description = "Bucket write access for following AWS principals"
  default     = ["696065950852", "arn:aws:iam::696065950852:role/circleci-aws-nuk-newskit-docs-dev-assume"]
}

variable "environment" {
  description = "Environment name"
  default     = "pr"
}

variable "tag_name_suffix" {
  description = "S3 tag name"
  default     = "-pr"
}

variable "docs_bucket" {
  description = "First bucket name per account for the documentation site"
  default     = "ncu-newskit-docs-pr" 
}
