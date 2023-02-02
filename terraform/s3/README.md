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
Select from the list of accounts:
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
cat $AWS_SHARED_CREDENTIALS_FILE

export AWS_ACCESS_KEY=(aws_access_key_id value)
export AWS_SECRET_ACCESS_KEY=(aws_secret_access_key value)
export AWS_SESSION_TOKEN=(aws_session_token value)

aws --profile newscorp ec2 describe-instances

{
    "Reservations": []
}

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

The Terraform in the remote-state folders should NOT be run manually but via CircleCI.
