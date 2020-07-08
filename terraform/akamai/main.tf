provider "akamai" {
  edgerc       = "~/.edgerc"
  papi_section = "papi"
}

terraform {
  backend "s3" {
    bucket = "nu-sun-terraform-state"
    key    = "product-platforms/newskit/akamai/dev/terraform.tfstate"
    region = "eu-west-1"
  }
  required_version = ">= 0.12"
}

resource "akamai_property" "property" {
  name = "${var.environment}.newskit.co.uk"

  contact = var.contact

  product  = "prd_Fresca"
  cp_code  = akamai_cp_code.cp_code.id
  contract = data.akamai_contract.contract.id
  group    = data.akamai_group.group.id

  hostnames = {
    for hostname in var.hostname_map :
    hostname => akamai_edge_hostname.hostname.edge_hostname
  }

  rule_format = "latest"

  rules = data.akamai_property_rules.rules.json
}

data "akamai_contract" "contract" {
  group = var.akamai_group
}

data "akamai_group" "group" {
  name = var.akamai_group
}

resource "akamai_cp_code" "cp_code" {
  name     = "${var.environment}.newskit.co.uk"
  contract = data.akamai_contract.contract.id
  group    = data.akamai_group.group.id
  product  = "prd_Fresca"
}

resource "akamai_edge_hostname" "hostname" {
  product       = "prd_Fresca"
  contract      = data.akamai_contract.contract.id
  group         = data.akamai_group.group.id
  edge_hostname = "${var.hostname_map["newskit"]}.edgesuite.net"
  ipv4          = true
  ipv6          = true
}

data "akamai_property_rules" "rules" {
  rules {
    rule {
      name = "Performance"
      rule {
        name = "Compressible Objects"
        behavior {
          name = "gzipResponse"
          option {
            key   = "behavior"
            value = "ALWAYS"
          }
        }
        criteria {
          name = "contentType"
          option {
            key   = "matchCaseSensitive"
            value = false
          }
          option {
            key   = "matchOperator"
            value = "IS_ONE_OF"
          }
          option {
            key   = "matchWildcard"
            value = true
          }
          option {
            key = "values"
            values = ["text/*",
              "application/javascript",
              "application/x-javascript",
              "application/x-javascript*",
              "application/json",
              "application/x-json",
              "application/*+json",
              "application/*+xml",
              "application/text",
              "application/vnd.microsoft.icon",
              "application/vnd-ms-fontobject",
              "application/x-font-ttf",
              "application/x-font-opentype",
              "application/x-font-truetype",
              "application/xmlfont/eot",
              "application/xml",
              "font/opentype",
              "font/otf",
              "font/eot",
              "image/svg+xml",
              "image/vnd.microsoft.icon"
            ]
          }
        }
        criteria_match = "all"
        comment        = "Compresses content to improve performance of clients with slow connections."
      }
      behavior {
        name = "enhancedAkamaiProtocol"
        option {
          key   = "display"
          value = ""
        }
      }
      behavior {
        name = "http2"
        option {
          key   = "enabled"
          value = ""
        }
      }
      behavior {
        name = "allowTransferEncoding"
        option {
          key   = "enabled"
          value = true
        }
      }
      behavior {
        name = "removeVary"
        option {
          key   = "enabled"
          value = true
        }
      }
      behavior {
        name = "sureRoute"
        option {
          key   = "enabled"
          value = false
        }
        option {
          key   = "srDownloadLinkTitle"
          value = ""
        }
      }
      behavior {
        name = "prefetch"
        option {
          key   = "enabled"
          value = true
        }
      }
      criteria_match = "all"
      comment        = "Improves the performance of delivering objects to end users. Behaviors in this rule are applied to all requests as appropriate."
    }
    rule {
      name = "Redirect to HTTPS"
      behavior {
        name = "redirect"
        option {
          key = "queryString"
          value = "APPEND"
        }
        option {
          key = "responseCode"
          value = "301"
        }
        option {
          key = "destinationHostname"
          value = "SAME_AS_REQUEST"
        }
        option {
          key = "destinationPath"
          value = "SAME_AS_REQUEST"
        }
        option {
          key = "destinationProtocol"
          value = "HTTPS"
        }
        option {
          key = "mobileDefaultChoice"
          value = "DEFAULT"
        }
      }
      criteria {
        name = "requestProtocol"
        option {
          key = "value"
          value = "HTTP"
        }
      }
      criteria_match = "all"
      comment = "Redirect to the same URL on HTTPS protocol, issuing a 301 response code (Moved Permanently)"
    }
    rule {
      name = "Offload"
      rule {
        name = "CSS and JavaScript"
        behavior {
          name = "caching"
          option {
            key   = "behavior"
            value = "MAX_AGE"
          }
          option {
            key   = "mustRevalidate"
            value = false
          }
          option {
            key   = "ttl"
            value = "1d"
          }
        }
        behavior {
          name = "prefreshCache"
          option {
            key   = "enabled"
            value = true
          }
          option {
            key   = "prefreshval"
            value = 90
          }
        }
        behavior {
          name = "prefetchable"
          option {
            key   = "enabled"
            value = true
          }
        }
        criteria {
          name = "fileExtension"
          option {
            key   = "matchCaseSensitive"
            value = false
          }
          option {
            key   = "matchOperator"
            value = "IS_ONE_OF"
          }
          option {
            key = "values"
            values = [
              "css",
              "js"
            ]
          }
        }
        criteria_match = "all"
        comment        = "Overrides the default caching behavior for CSS and JavaScript objects that are cached on the edge server. Because these object types are dynamic, the TTL is brief."
      }
      rule {
        name = "Static Objects"
        behavior {
          name = "caching"
          option {
            key   = "behavior"
            value = "MAX_AGE"
          }
          option {
            key   = "mustRevalidate"
            value = false
          }
          option {
            key   = "ttl"
            value = "7d"
          }
        }
        behavior {
          name = "prefreshCache"
          option {
            key   = "enabled"
            value = true
          }
          option {
            key   = "prefreshval"
            value = 90
          }
        }
        behavior {
          name = "prefetchable"
          option {
            key   = "enabled"
            value = true
          }
        }
        criteria {
          name = "fileExtension"
          option {
            key   = "matchCaseSensitive"
            value = false
          }
          option {
            key   = "matchOperator"
            value = "IS_ONE_OF"
          }
          option {
            key = "values"
            values = [
              "aif",
              "aiff",
              "au",
              "avi",
              "bin",
              "bmp",
              "cab",
              "carb",
              "cct",
              "cdf",
              "class",
              "doc",
              "dcr",
              "dtd",
              "exe",
              "flv",
              "gcf",
              "gff",
              "gif",
              "grv",
              "hdml",
              "hqx",
              "ico",
              "ini",
              "jpeg",
              "jpg",
              "mov",
              "mp3",
              "nc",
              "pct",
              "pdf",
              "png",
              "ppc",
              "pws",
              "swa",
              "swf",
              "txt",
              "vbs",
              "w32",
              "wav",
              "wbmp",
              "wml",
              "wmlc",
              "wmls",
              "wmlsc",
              "xsd",
              "zip",
              "pict",
              "tif",
              "tiff",
              "mid",
              "midi",
              "ttf",
              "eot",
              "woff",
              "woff2",
              "otf",
              "svg",
              "svgz",
              "webp",
              "jxr",
              "jar",
              "jp2"
            ]
          }
        }
        criteria_match = "all"
        comment        = "Overrides the default caching behavior for images, music, and similar objects that are cached on the edge server. Because these object types are static, the TTL is long."
      }
      rule {
        name = "Uncacheable Response"
        behavior {
          name = "downstreamCache"
          option {
            key   = "behavior"
            value = "TUNNEL_ORIGIN"
          }
        }
        criteria {
          name = "cacheability"
          option {
            key   = "matchOperator"
            value = "IS_NOT"
          }
          option {
            key   = "value"
            value = "CACHEABLE"
          }
        }
        criteria_match = "all"
        comment        = "Overrides the default downstream caching behavior for uncacheable object types. Instructs the edge server to pass Cache-Control and/or Expire headers from the origin to the client."
      }
      behavior {
        name = "caching"
        option {
          key   = "behavior"
          value = "NO_STORE"
        }
      }
      behavior {
        name = "cacheError"
        option {
          key   = "enabled"
          value = true
        }
        option {
          key   = "preserveStale"
          value = true
        }
        option {
          key   = "ttl"
          value = "10s"
        }
      }
      behavior {
        name = "downstreamCache"
        option {
          key   = "allowBehavior"
          value = "LESSER"
        }
        option {
          key   = "behavior"
          value = "ALLOW"
        }
        option {
          key   = "sendHeaders"
          value = "CACHE_CONTROL_AND_EXPIRES"
        }
        option {
          key   = "sendPrivate"
          value = false
        }
      }
      behavior {
        name = "tieredDistribution"
        option {
          key   = "enabled"
          value = true
        }
        option {
          key   = "tieredDistributionMap"
          value = "CH2"
        }
      }
      criteria_match = "all"
      comment        = "Controls caching, which offloads traffic away from the origin. Most objects types are not cached. However, the child rules override this behavior for certain subsets of requests."
    }
    behavior {
      name = "origin"
      option {
        key   = "cacheKeyHostname"
        value = "ORIGIN_HOSTNAME"
      }
      option {
        key   = "compress"
        value = "true"
      }
      option {
        key   = "enableTrueClientIp"
        value = "false"
      }
      option {
        key   = "forwardHostHeader"
        value = "ORIGIN_HOSTNAME"
      }
      option {
        key   = "hostname"
        value = "origin-{{builtin.AK_HOST}}"
      }
      option {
        key   = "httpPort"
        value = 80
      }
      option {
        key   = "httpsPort"
        value = 443
      }
      option {
        key   = "originSni"
        value = "true"
      }
      option {
        key   = "originType"
        value = "CUSTOMER"
      }
      option {
        key   = "originCertificate"
        value = ""
      }
      option {
        key   = "ports"
        value = ""
      }
      option {
        key   = "verificationMode"
        value = "CUSTOM"
      }
      option {
        key = "customValidCnValues"
        values = [
          "{{Origin Hostname}}",
          "{{Forward Host Header}}",
          var.origin_cert_cn
        ]
      }
      option {
        key   = "originCertsToHonor"
        value = "STANDARD_CERTIFICATE_AUTHORITIES"
      }
      option {
        key = "standardCertificateAuthorities"
        values = [
          "akamai-permissive",
          "THIRD_PARTY_AMAZON"
        ]
      }
    }
    behavior {
      name = "cpCode"
      option {
        key   = "id"
        value = akamai_cp_code.cp_code.id
      }
      option {
        key   = "name"
        value = akamai_cp_code.cp_code.name
      }
    }
    behavior {
      name = "allowPost"
      option {
        key   = "allowWithoutContentLength"
        value = "false"
      }
      option {
        key   = "enabled"
        value = "true"
      }
    }
    behavior {
      name = "allowDelete"
      option {
        key   = "enabled"
        value = "true"
      }
      option {
        key   = "allowBody"
        value = "false"
      }
    }
    behavior {
      name = "allowPut"
      option {
        key   = "enabled"
        value = "true"
      }
    }
    behavior {
      name = "allowPatch"
      option {
        key   = "enabled"
        value = "true"
      }
    }
    is_secure = false
  }
}

resource "akamai_property_activation" "production" {
  property = akamai_property.property.id
  network  = "PRODUCTION"
  activate = true
  contact  = var.contact
  version  = akamai_property.property.version
}

## Outputs ##
output "rule_tree" {
  value = data.akamai_property_rules.rules.json
}

output "property_id" {
  value = akamai_property.property.id
}

output "activation_status" {
  value = akamai_property_activation.production.status
}
