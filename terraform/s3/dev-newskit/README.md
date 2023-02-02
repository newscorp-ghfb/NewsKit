** MANUAL TERRAFORM SETUP **

Inside a shell:

(1) Set the TF version to match that used by the aws-cli-and-terraform executor in .circleci/config.yml

```
tfenv use 1.2.1
```

(2) Login to saml2aws for command line access to newscorp AWS

```
saml2aws login
aws --profile newscorp configure

AWS Access Key ID [****************D7OP]: 
AWS Secret Access Key [****************W9wq]: 
Default region name [eu-west-1]: 
Default output format [None]: 

aws --profile newscorp ec2 describe-instances
saml2aws -a newscorp exec --exec-profile newscorp /bin/zsh

error acquiring credentials for profile: newscorp: ProviderNotExpirer: provider SharedConfigCredentials: /Users/john.parsons/.aws/credentials does not support ExpiresAt()
```

(assuming you have followed these installation and setup instructions: _)

(3) Leverage TF module https://github.com/samstav/terraform-aws-backend to create a bucket for storing the TF state, avoiding the chicken and egg issue [_].

```
cd ./remote-state
terraform get -update
terraform init -backend=false
terraform plan -out=backend.plan
terraform apply backend.plan
```

** AUTOMATED TERRAFORM SETUP **

The Terraform in the /dev folder should NOT be run manually but via CircleCI.

