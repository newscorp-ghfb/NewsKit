variable "environment" {
  description = "Environment name"
}

variable "zone_name" {
  description = "Hosted zone name"
}

variable "distribution_domain_name" {
  description = "CloudFront Distribution domain name"
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
  description = "Top domain for EKS cluster."
}

variable "cert" {
  type    = map(string)
  default = {}
}