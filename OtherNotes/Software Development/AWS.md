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

To supply credentials directly
```python
session = boto3.Session(
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
    region_name=os.getenv('REGION_NAME', 'us-west-1')
)
# dynamodb = session.resource('dynamodb')
```
<https://stackoverflow.com/a/45982075/15493213>

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
Will generate `.elasticbeanstalk` under your project root.

Create environment for flask, including ECS instance, S3 bucket and others. Will take a couple of minutes.
```
eb create flask-env
```

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