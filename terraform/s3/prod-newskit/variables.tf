variable "environment" {
  description = "Environment name"
}

variable "tag_name_suffix" {
  description = "S3 tag name"
  default     = ""
}

variable "docs_bucket" {
  description = "First bucket name per account for the documentation site"
}

variable "environment2" {
  description = "Second environment name"
}

variable "tag_name_suffix2" {
  description = "Second S3 tag name"
}

variable "docs_bucket2" {
  description = "Second bucket name per account for the documentation site"
}
