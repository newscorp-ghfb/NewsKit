resource "aws_ecr_repository" "ecr_product_platform" {
  name = "ncu-newskit"

  tags = local.tags
}

resource "aws_ecr_repository_policy" "ecr_product_platform_policy" {
  repository = aws_ecr_repository.ecr_product_platform.name
  policy     = data.aws_iam_policy_document.ecr_cross_account.json
}

data "aws_iam_policy_document" "ecr_cross_account" {
  statement {
    sid    = "Cross-AWS-Account-ECR-Read"
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = formatlist("arn:aws:iam::%s:root", var.ecr_read_only_principals)
    }

    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchGetImage",
      "ecr:DescribeImages",
      "ecr:DescribeRepositories",
      "ecr:GetDownloadUrlForLayer",
      "ecr:GetLifecyclePolicy",
      "ecr:GetLifecyclePolicyPreview",
      "ecr:GetRepositoryPolicy",
      "ecr:ListImages",
    ]
  }
}
