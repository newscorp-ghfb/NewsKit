resource "aws_ssm_parameter" "newskit-docs-bucket-arn" {
  name  = "/ncu-newskit/${var.environment}/docs-bucket/arn"
  type  = "String"
  value = "${aws_s3_bucket.s3_docs.arn}"
  overwrite = true

  tags = {
    environment = var.environment
  }
}

resource "aws_ssm_parameter" "newskit-docs-bucket-name" {
  name  = "/ncu-newskit/${var.environment}/docs-bucket/name"
  type  = "String"
  value = "${aws_s3_bucket.s3_docs.bucket}"
  overwrite = true

  tags = {
    environment = var.environment
  }
}

resource "aws_ssm_parameter" "newskit-docs-bucket-endpoint" {
  name  = "/ncu-newskit/${var.environment}/docs-bucket/endpoint"
  type  = "String"
  value = "${aws_s3_bucket.s3_docs.website_endpoint}"
  overwrite = true

  tags = {
    environment = var.environment
  }
}
