** MANUAL TERRAFORM SETUP **

Inside a shell:

(1) Set the TF version to match that used by the aws-cli-and-terraform executor in .circleci/config.yml

```
tfenv use 1.2.1
```

(2) Login to saml2aws for command line access to newscorp AWS

```
saml2aws login
```
Select from the list of accounts:AWS_ACCESS_KEYho
```
Account: nuk-digital-dev-newskit (696065950852) / nct-sysadmin
```
OR
```
Account: nuk-digital-prod-newskit (005057636819) / nct-sysadmin
```

(3)
aws --profile newscorp configure

AWS Access Key ID [****************D7OP]: 
AWS Secret Access Key [****************W9wq]: 
Default region name [eu-west-1]: 
Default output format [None]:

export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials

aws --profile newscorp ec2 describe-instances

```

(assuming you have followed these installation and setup instructions: _)

(4) Leverage TF module https://github.com/samstav/terraform-aws-backend to create a bucket for storing the TF state, avoiding the chicken and egg issue [_].

```
cd ./dev-newskit/remote-state OR cd ./prod-newslit/remote-state
terraform get -update
terraform init -backend=false
terraform plan -out=backend.plan
terraform apply backend.plan
```

** AUTOMATED TERRAFORM SETUP **

The Terraform in the /dev folder should NOT be run manually but via CircleCI.

