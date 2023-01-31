resource "aws_s3_bucket" "s3_docs" {
  bucket = var.docs_bucket
  acl = "public-read"
  tags = local.tags

  # Add a CORS configuration, so that we don't have issues with webfont loading
  # http://www.holovaty.com/writing/cors-ie-cloudfront/
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket_policy" "s3_docs_policy" {
    depends_on = ["aws_s3_bucket.s3_docs"]
    bucket = var.docs_bucket
    policy = <<POLICY
{
	"Version": "2012-10-17",
	"Statement": [{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": [
				"s3:GetObject"
			],
			"Resource": [
				"arn:aws:s3:::${aws_s3_bucket.s3_docs.id}/*"
			]
		},
		{
			"Sid": "ProductPlatformsManage",
			"Effect": "Allow",
			"Principal": {
				"AWS": [
					"arn:aws:iam::696065950852:*",
					"arn:aws:iam::005057636819:*"
				]
			},
			"Action": [
				"s3:PutObject"
			],
			"Resource": [
				"arn:aws:s3:::${aws_s3_bucket.s3_docs.id}/*"
			]
		}
	]
}
POLICY
}

resource "aws_s3_bucket" "s3_docs2" {
  bucket = var.docs_bucket2
  acl = "public-read"
  tags = local.tags2

  # Add a CORS configuration, so that we don't have issues with webfont loading
  # http://www.holovaty.com/writing/cors-ie-cloudfront/
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket_policy" "s3_docs_policy2" {
    depends_on = ["aws_s3_bucket.s3_docs2"]
    bucket = var.docs_bucket2
    policy = <<POLICY
{
	"Version": "2012-10-17",
	"Statement": [{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": [
				"s3:GetObject"
			],
			"Resource": [
				"arn:aws:s3:::${aws_s3_bucket.s3_docs2.id}/*"
			]
		},
		{
			"Sid": "ProductPlatformsManage",
			"Effect": "Allow",
			"Principal": {
				"AWS": [
					"arn:aws:iam::696065950852:*",
					"arn:aws:iam::005057636819:*"
				]
			},
			"Action": [
				"s3:PutObject"
			],
			"Resource": [
				"arn:aws:s3:::${aws_s3_bucket.s3_docs2.id}/*"
			]
		}
	]
}
POLICY
}
