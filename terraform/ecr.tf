resource "aws_ecr_repository" "ecr_product_platform" {
  name = "ncu-newskit"
}


resource "aws_ecr_repository_policy" "ecr_product_platform_policy" {
  repository = "${aws_ecr_repository.ecr_product_platform.name}"

  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "Cross-AWS-Account-Read",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::720262317718:root"
      },
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:BatchGetImage",
        "ecr:DescribeImages",
        "ecr:DescribeRepositories",
        "ecr:GetDownloadUrlForLayer",
        "ecr:GetLifecyclePolicy",
        "ecr:GetLifecyclePolicyPreview",
        "ecr:GetRepositoryPolicy",
        "ecr:ListImages"
      ]
    }
  ]
}
EOF
}
