resource "aws_route53_zone" "newskit" {
  name = var.zone_name
  tags = local.tags
}

resource "aws_route53_record" "akamai" {
  for_each = var.domain_mapping
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = each.key
  type     = "CNAME"
  ttl      = "360"
  records  = ["www.${var.zone_name}.edgesuite.net"]
}

resource "aws_route53_record" "origin" {
  for_each = var.domain_mapping
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = "origin-${each.key}"
  type     = "CNAME"
  ttl      = "360"
  records  = ["${each.value}.${var.cluster_domain}"]
}
