variable "environment" {
  description = "Environment name"
}

variable "zone_name" {
  description = "Hosted zone name"
}

variable "domain_mapping" {
  type        = map(string)
  description = "Subdomains to set records for"
  default = {
    "www"       = "newskit"
    "storybook" = "newskit-storybook"
  }
}

variable "cluster_domain" {
  description = "Top domain for EKS cluster"
}

variable "acme_challenges" {
  type        = map(string)
  description = "Challenges for ACME validation"
}