variable "environment" {
  description = "Environment name"
}

variable "zone_name" {
  description = "Hosted zone name"
}

variable "subdomains" {
  type        = set(string)
  description = "Subdomains to set records for"
  default     = ["www", "storybook"]
}

variable "acme_challenges" {
  type        = map(string)
  description = "Challenges for ACME validation"
}