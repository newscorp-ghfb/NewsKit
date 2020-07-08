variable "environment" {
  description = "Environment name"
}

variable "akamai_group" {
  default = "News UK Ion Group - 2-7ZR3M"
}

variable "origin_cert_cn" {
  default = "Origin certificate common or server alternative name to accept"
}

variable "hostname_map" {
  type    = map(string)
  default = {}
}

variable "contact" {
  type    = list(string)
  default = ["jakub.zelenka@news.co.uk", "borislav.velkov@news.co.uk"]
}