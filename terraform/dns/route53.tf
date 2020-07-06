resource "aws_route53_zone" "newskit" {
  name = var.zone_name
  tags = local.tags
}

resource "aws_route53_record" "acme_challenge" {
  for_each = var.acme_challenges
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = each.key == "root" ? "_acme-challenge" : "_acme-challenge.${each.key}"
  type     = "TXT"
  ttl      = "60"
  records  = [each.value]
}

resource "aws_route53_record" "host" {
  for_each = var.subdomains
  zone_id  = aws_route53_zone.newskit.zone_id
  name     = each.value
  type     = "CNAME"
  ttl      = "360"
  records  = ["${each.value}.${var.zone_name}.edgesuite.net"]
}