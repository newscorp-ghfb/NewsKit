resource "aws_route53_zone" "staging" {
  name = "newskit.staging-news.co.uk"

  tags = {
      Name = "ncu-newskit-staging"
      Environment = "staging"
      ServiceOwner = "product-platforms"
      ServiceName = "ncu-newskit"
  }
}

resource "aws_route53_zone" "dev" {
  name = "newskit.dev-news.co.uk"

  tags = {
      Name = "ncu-newskit-dev"
      Environment = "dev"
      ServiceOwner = "product-platforms"
      ServiceName = "ncu-newskit"
  }
}