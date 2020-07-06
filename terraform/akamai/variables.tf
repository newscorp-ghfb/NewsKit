variable "environment" {
  description = "Environment name"
}

variable "akamai_group" {
  type    = string
  default = "News UK Ion Group - 2-7ZR3M"
}

variable "hostname_map" {
  type    = map(string)
  default = {}
}

variable "contact" {
  type    = list(string)
  default = ["jakub.zelenka@news.co.uk", "borislav.velkov@news.co.uk"]
}