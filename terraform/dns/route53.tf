resource "aws_route53_zone" "newskit" {
  name = var.zone_name
  tags = local.tags
}

resource "aws_route53_record" "cdn" {
  for_each = var.distribution_domain_name
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = each.key
  type     = "CNAME"
  ttl      = "360"
  records  = [var.distribution_domain_name[each.key]]
}

resource "aws_route53_record" "origin" {
  for_each = var.domain_mapping
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = "origin-${each.key}"
  type     = "CNAME"
  ttl      = "360"
  records  = ["${each.value}.${var.cluster_domain}"]
}

resource "aws_route53_record" "cert" {
  for_each = var.cert
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = "${each.key}"
  type     = "CNAME"
  ttl      = "900"
  records  = ["${each.value}"]
}
