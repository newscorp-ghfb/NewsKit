locals {
  cloudfront_source_arns = compact([for arn in split(",", var.cloudfront_distribution_arns) : trimspace(arn)])
}

resource "aws_s3_bucket" "s3_docs" {
  bucket = var.docs_bucket
  acl    = var.lock_public_access ? "private" : "public-read"
  tags   = local.tags

  # Add a CORS configuration, so that we don't have issues with webfont loading
  # http://www.holovaty.com/writing/cors-ie-cloudfront/
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }

  # The website endpoint is only needed while the bucket is read directly
  dynamic "website" {
    for_each = var.lock_public_access ? [] : [1]
    content {
      index_document = "index.html"
      error_document = "404.html"
    }
  }
}

resource "aws_s3_bucket_policy" "s3_docs_policy" {
  bucket = aws_s3_bucket.s3_docs.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = concat(
      var.lock_public_access ? [] : [{
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = ["arn:aws:s3:::${aws_s3_bucket.s3_docs.id}/*"]
      }],
      [{
        Sid       = "ProductPlatformsManage"
        Effect    = "Allow"
        Principal = { AWS = ["arn:aws:iam::005057636819:role/circleci-aws-nuk-newskit-docs-prod-assume"] }
        Action    = ["s3:PutObject"]
        Resource  = ["arn:aws:s3:::${aws_s3_bucket.s3_docs.id}/*"]
      }],
      length(local.cloudfront_source_arns) == 0 ? [] : [{
        Sid       = "CloudFrontOriginAccess"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = ["s3:GetObject"]
        Resource  = ["arn:aws:s3:::${aws_s3_bucket.s3_docs.id}/*"]
        Condition = { StringEquals = { "AWS:SourceArn" = local.cloudfront_source_arns } }
      }],
      length(local.cloudfront_source_arns) == 0 ? [] : [{
        Sid       = "CloudFrontListBucket"
        Effect    = "Allow"
        Principal = { Service = "cloudfront.amazonaws.com" }
        Action    = ["s3:ListBucket"]
        Resource  = ["arn:aws:s3:::${aws_s3_bucket.s3_docs.id}"]
        Condition = { StringEquals = { "AWS:SourceArn" = local.cloudfront_source_arns } }
      }],
    )
  })

  lifecycle {
    precondition {
      condition     = !var.lock_public_access || length(local.cloudfront_source_arns) > 0
      error_message = "cloudfront_distribution_arns must be set before public access is removed."
    }
  }
}

# The bucket ACL is set to private by aws_s3_bucket before ownership is enforced
resource "aws_s3_bucket_ownership_controls" "s3_docs" {
  count  = var.lock_public_access ? 1 : 0
  bucket = aws_s3_bucket.s3_docs.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

# Applied after the policy no longer contains the public statement
resource "aws_s3_bucket_public_access_block" "s3_docs" {
  count  = var.lock_public_access ? 1 : 0
  bucket = aws_s3_bucket.s3_docs.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true

  depends_on = [aws_s3_bucket_policy.s3_docs_policy, aws_s3_bucket_ownership_controls.s3_docs]
}
