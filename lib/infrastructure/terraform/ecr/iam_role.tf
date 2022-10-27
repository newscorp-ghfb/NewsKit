resource "aws_iam_role" "ecr" {
  name        = "ncu-product-platforms-assume-role"
  description = "Role to be consmed by kube2iam"
  tags        = local.tags

  assume_role_policy = data.aws_iam_policy_document.cluster_access.json
}

data "aws_iam_policy_document" "cluster_access" {
  statement {
    sid = "DEVContentClusterRoleAccess"

    actions = ["sts:AssumeRole"]

    effect = "Allow"

    principals {
      type = "AWS"
      identifiers = [
        "arn:aws:iam::940731442544:user/svc-ncu-product-platforms",
        "AROAJQX7CD6B563F5XNHO", # TODO: this was set manually - find out why.
      ]
    }
  }
}
