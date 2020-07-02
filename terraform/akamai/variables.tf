variable "environment" {
  default = ""
}

variable "name" {}

variable "package_version" {}

variable "akamai_group" {
  type    = string
  default = "News UK Ion Group - 2-7ZR3M"
}

variable "hostname_map" {
  type = map(string)
  default = {}
}