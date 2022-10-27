variable "ecr_read_only_principals" {
  type        = list(string)
  description = "Read only access for following AWS principals"
}

variable "environment" {
  description = "Environment name"
  default     = "dev"
}
