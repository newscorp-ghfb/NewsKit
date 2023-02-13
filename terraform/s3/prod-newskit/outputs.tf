data "aws_caller_identity" "current" {}

output "caller_user" {
  value = data.aws_caller_identity.current.user_id
}

output "environment" {
   value = "${var.environment}"
}

output "docs_bucket_name" {
  value = "${aws_s3_bucket.s3_docs[count.index].bucket}"
}

output "docs_bucket_arn" {
  value = "${aws_s3_bucket.s3_docs[count.index].arn}"
}

output "docs_bucket_website_endpoint" {
  value = "${aws_s3_bucket.s3_docs[count.index].website_endpoint}"
}

output "environment2" {
   value = "${var.environment2}"
}

output "docs_bucket2_name" {
  value = "${aws_s3_bucket.s3_docs2[count.index].bucket}"
}

output "docs_bucket2_arn" {
  value = "${aws_s3_bucket.s3_docs2[count.index].arn}"
}

output "docs_bucket2_website_endpoint" {
  value = "${aws_s3_bucket.s3_docs2[count.index].website_endpoint}"
}
