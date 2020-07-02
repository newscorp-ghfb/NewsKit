resource "aws_iam_role" "ncu-product-platforms-iam-role" {
  name        = "ncu-product-platforms-assume-role"
  description = "Role to be consmed by kube2iam"

  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "DEVContentClusterRoleAccess",
            "Action": "sts:AssumeRole",
            "Principal": {
                 "AWS": "arn:aws:iam::720262317718:role/devcontent-cluster.kubernetes_worker",
                 "AWS": "arn:aws:iam::940731442544:user/svc-ncu-product-platforms"
            },
            "Effect": "Allow"
        }
    ]
}
EOF
}
