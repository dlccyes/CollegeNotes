---
layout: meth
parent: Software Development
---
# AWS
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Free Services
<https://aws.amazon.com/free/>

**view free tier usage**

Cost Management -> Billing Console -> Free Tier

## Get Credentials
Create IAM user (& group)  
<https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html#getting-started_create-admin-group-console>

Add the permissions needed for your group  
e.g.``AmazonDynamoDBFullAccess` for accessing DynamoDB

Generate credentials for your user

## boto3
AWS SDK for Python

doc  
<https://boto3.amazonaws.com/v1/documentation/api/latest/index.html>

### client & resource
<https://stackoverflow.com/a/48867829/15493213>

`client` has all the APIs, while `resource` is newer and is more object-oriented, but doesn't have all the APIs

```
import boto3
client = boto3.client('dynamodb')
dynamodb = session.resource('dynamodb')
```


### Credentials
see <https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html>

To supply credentials directly:

**with session**

```python
session = boto3.Session(
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
    region_name=os.getenv('REGION_NAME', 'us-west-1')
)
# dynamodb = session.resource('dynamodb')
```
<https://stackoverflow.com/a/45982075/15493213>

**with client**

```python
client = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    aws_session_token=SESSION_TOKEN
)
```

If nothing specified, it will use the credentials in `~/.aws`

### DynamoDB
boto3 dynamo sample code (written with `resource`)  
<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/dynamodb.html>

full boto3 dynamo doc (written with `client`)  
<https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html>

#### query between range
between times
```python
import boto3
from boto3.dynamodb.conditions import Key, Attr
from datetime import datetime, timedelta

session = boto3.Session()
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('emotion_t')
response = table.scan(
    FilterExpression=Key('log_time').between(time_seek, time_now)
)
```

<https://stackoverflow.com/a/49352557/15493213>

## DynamoDB
NoSQL database

see your table
```
aws dynamodb scan --table-name <table-name>
```

### Cautions
It has no auto-incrementing primary key. Instead, it has a partition key, a key that you must supply value with for every entry.

You can't change the structure of your table, e.g. your partition key. What you can do is migrate and delete your table.

## Elastic Beanstalk
Easy webapp deploying with EC2 (no additional cost). It basically wraps up all the CI/CD into some simple commands.

### init

Assign `AdministratorAccess-AWSElasticBeanstalk` policy to your user (group) in IAM (May take a while to take effect ??)

### CLI

Install CLI  

<https://github.com/aws/aws-elastic-beanstalk-cli-setup>

EB CLI docs  
<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html>

#### eb deploy

Deploy your code. If it's a git repo without `.ebignore`, it will deploy the latest commit code. If it has `.ebignore`, it will deploy everything except the things specified in `.ebignore`.

<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html>

I'll recommend ignoreing everything at first and then append exceptions (and the exceptions for exceptions), as you might only have a few files & directories needed to deploy. See <https://stackoverflow.com/a/43283013/15493213>.

Also, there seems to be a limit on the total file size to deploy.

#### eb printenv

See all your environment variables.


#### eb setenv

Set your environment variable

```
eb setenv <key>=<value>
```

### SSH

```
eb ssh
```

#### SSH-Setup

Add `AmazonEC2FullAccess` policy for your IAM. [ref](https://stackoverflow.com/a/69267204/15493213)

```
eb ssh --setup
```
and enter to the end

### Environment Variables

Go to [Elasticbeanstalk](https://console.aws.amazon.com/elasticbeanstalk/) -> Configuration -> software -> modify and set up manually. [Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html)

Or set them up via CLI
```
eb setenv <key>=<value>
```
see <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-setenv.html>

### Deploying a Flask app

Full doc  
<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-flask.html>

Write your [Flask](Flask) app. Note that the main file need to be `application.py` and the Flask object neet to be named as `application`.

Initialize EB CLI repo.

```
eb init -p python-3.7 <project_name>
```

This will generate `.elasticbeanstalk` under your project root.

Next, create environment for your project, including EC2 instance, S3 bucket and others. Will take a couple of minutes.

With CLI (you can also use Elastic Beanstalk console to set up domain name and other things interactively)

See <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-create.html> for more options.

```
eb create flask-env
```

You can use another name for your env, e.g. `<app_name>-env`. If your app doesn't work after deploying to the env, go to eb console (web UI) -> your environment -> Configuration -> Software -> Edit -> WSGIPath and make sure the value is `application`. See <https://stackoverflow.com/q/31169260/15493213>.  

(The correct method is setting up `.ebextensions/<env>.config`, but for some reason it doesn't work for me.)

Go into your EC2 instance and set up credentials.  
See [SSH-Setup](#SSH-Setup) to setup.  
```
eb ssh
```
and then run  
```
aws configure
```
with your credentials supplied

Go to your project url.
```
eb open
```

If you've modified your code and want to deploy again, do
```
eb deploy
```

If you want to delete all your environment, do
```
eb terminate
```

### HTTPS certificate

[official doc](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-ssl.html)

#### Create certificate

(in project root) Go into your EC2 instance

```
eb ssh
```

Check OpenSSL is installed

```
openssl version
```

Create RSA Key

```
openssl genrsa 2048 > privatekey.pem
```

Create CSR file (fill in the prompted questions)

```
openssl req -new -key privatekey.pem -out csr.pem
```

Sign the certificate

```
openssl x509 -req -days 365 -in csr.pem -signkey privatekey.pem -out public.crt
```

#### Upload certificate

First assign `IAMFullAccess` to your IAM group.

And then upload it with CLI

(in EC2 instance)

```
aws iam upload-server-certificate --server-certificate-name elastic-beanstalk-x509 --certificate-body file://public.crt --private-key file://privatekey.pem
```

<https://stackoverflow.com/a/33789231/15493213>

#### Configure HTTPS

Go to Elastic Beanstalk console -> your environment -> Configuration -> Load balancer -> Edit -> Listeners -> Add listener

- Listener port = 443
- Listener protocol = HTTPS
	- Instance port = 80 (Classic Load Balancer only)
- Instance protocol = HTTP (Classic Load Balancer only)
- SSL certificate = (choose one)

And then hit "Apply"

### Github Action auto deploy

Create a zip file excluding gitignore files with

```
git archive HEAD -o <your_package>.zip
```

Additionally, you can remove the files you don't want but not gitignored with

```
zip -d <your_package>.zip "<bad file>"
```

<https://stackoverflow.com/a/61301012/15493213>  
<https://medium.com/seamless-cloud/888757a6eeb0>


### Troubleshooting

If you find weird errors when using CLI, use append `--verbose` to the command to see what exactly is happening.

Use `eb logs` to see the logs.

#### related to venv

If your instance's `var/log/eb-engine.log` said `[ERROR] An error occurred during execution of command [app-deploy] - [StageApplication]. Stop running the command. Error: chown <something>/venv/<something> no such file or directory`, even if your ignore the `venv`, see <https://stackoverflow.com/questions/61805345>.