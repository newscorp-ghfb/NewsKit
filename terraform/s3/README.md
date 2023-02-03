There are various buckets and they should be created/deprecated in this order:

## 1. (New) MANUAL TERRAFORM SETUP FOR NEWSKIT TF STATE BUCKETS

These one-off steps were done using a local terminal.

(1) Set the TF version to match that used by the aws-cli-and-terraform executor in .circleci/config.yml

(If you don't have tfenv installed, use brew to install it.)

```
tfenv install 1.2.1
tfenv use 1.2.1
```

(2) Login to saml2aws for command line access to newscorp AWS.

(If you don't have saml2aws installed and configured, you first need to follow https://nidigitalsolutions.jira.com/wiki/spaces/NCP/pages/2288845143/Saml2Aws+setup+guide, taking note of the clarifications in the comments.)

```
saml2aws login
```
Select from the list of accounts:
```
Account: nuk-digital-dev-newskit (696065950852) / nct-sysadmin
```
OR
```
Account: nuk-digital-prod-newskit (005057636819) / nct-sysadmin
```

(3) Get the AWS temporary credentials in a place that Terraform can read them from.

You would think this would be enough:

```
aws --profile newscorp configure
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials
cat $AWS_SHARED_CREDENTIALS_FILE
```

But, to get it to work, I had to

export AWS_ACCESS_KEY=(aws_access_key_id value)
export AWS_SECRET_ACCESS_KEY=(aws_secret_access_key value)
export AWS_SESSION_TOKEN=(aws_session_token value)

(4) Type in a simple AWS read command to check the credentials are working, eg

```
aws --profile newscorp ec2 describe-instances
```
should bring back an empty array.

(5) Get around the Terraform's [chicken and egg problem](https://github.com/newsuk/nuk-rfcs/blob/main/active/0044-infrastructure-as-code.md#chicken-vs-egg-problem) by going to the appropriate remote-state folder for the env you selected in step 2.

`cd ./dev-newskit/remote-state` OR `cd ./prod-newslit/remote-state`

Then apply the Terraform to create a Terraform state bucket for the future docs buckets.

```
terraform get -update
terraform init -backend=false
terraform plan -out=backend.plan
terraform apply backend.plan
```


## 2. (New) AUTOMATED TERRAFORM SETUP FOR NEWSKIT ACCOUNTS

The Terraform directly under the dev-newskit and prod-newskit folders should NOT be run manually but via CircleCI. See the deploy_to_s3_dev/deploy_to_s3_staging/deploy_to_s3_prod steps in `.circleci/config.yaml`.


## 3. (Deprecated) AUTOMATED TERRAFORM SETUP FOR NGN DEV ACCOUNT

The Terraform directly under the s3 folders should NOT be run manually but via CircleCI. See the deploy_to_s3_pr step in `.circleci/config.yaml`.

It is just used to create and populate the NGN S3 docs buckets that
is full of PR folders. These root-level files will be removed in a future release
as the Newskit dev account has a bucket reserved for PRs.
