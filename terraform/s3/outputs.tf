data "aws_caller_identity" "current" {}

output "account_id" {
  value = data.aws_caller_identity.current.account_id
}

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

output "environment2" {
   value = "${var.environment2}"
}

output "docs_bucket2_name" {
  value = "${aws_s3_bucket.s3_docs2.bucket}"
}

output "docs_bucket2_arn" {
  value = "${aws_s3_bucket.s3_docs2.arn}"
}

output "docs_bucket2_website_endpoint" {
  value = "${aws_s3_bucket.s3_docs2.website_endpoint}"
}
