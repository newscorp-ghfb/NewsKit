variable "tfstate_bucket" {
  description = "Terraform state bucket name"
  default     = "nu-sun-terraform-state"
}

variable "tfstate_key" {
  description = "Terraform state bucket key"
  default     = "product-platforms/newskit/s3/terraform.tfstate"
}

variable "environment" {
  description = "Environment name"
  default     = "pr"
}

variable "tag_name_suffix" {
  description = "S3 tag name"
  default     = ""
}

variable "docs_bucket" {
  description = "First bucket name per account for the documentation site"
  default     = "ncu-newskit-docs"
}

variable "environment2" {
  description = "Second environment name"
  default     = "dev"
}

variable "tag_name_suffix2" {
  description = "Second S3 tag name"
  default     = "-dev"
}

variable "docs_bucket2" {
  description = "Second bucket name per account for the documentation site"
  default     = "ncu-newskit-docs-dev"
}
