data "aws_caller_identity" "current" {}

output "caller_user" {
  value = data.aws_caller_identity.current.user_id
}

output "environment" {
   value = "${var.environment}"
}

output "docs_bucket_name" {
  value = "${aws_s3_bucket.s3_docs.bucket}"
}

output "docs_bucket_arn" {
  value = "${aws_s3_bucket.s3_docs.arn}"
}

output "docs_bucket_website_endpoint" {
  value = "${aws_s3_bucket.s3_docs.website_endpoint}"
}
