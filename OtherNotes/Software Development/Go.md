---
layout: meth
parent: Software Development
---

# Go
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Style

<https://github.com/Pungyeon/clean-go-article>

## Rules

### function name

CamelCase, otherwise might have unexpected results

## Init

```
go mod init <project_name>
```

Will generate `go.mod`

## Dependencies

```
go mod tidy
```

Will auto check your codes and update `go.mod` to ensure correct dependencies

## Import

Go importing 101

<https://stackoverflow.com/a/68710251/15493213>

## Run

```
go run <script.go>
```

## Environmental variables

### Dotenv

<https://towardsdatascience.com/use-environment-variable-in-your-next-golang-project-39e17c3aaa66>

```
go get github.com/joho/godotenv
```

```
godotenv.Load()
os.Getenv(<your_env>)
```

### Viper

To use `.env`

```
viper.SetConfigFile(".env")
viper.ReadInConfig()
```

## Interface

<https://gobyexample.com/interfaces>

```go
 	
type geometry interface {
    area() float64
    perim() float64
}

type rect struct {
    width, height float64
}
type circle struct {
    radius float64
}

func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perim() float64 {
    return 2*r.width + 2*r.height
}

func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perim() float64 {
    return 2 * math.Pi * c.radius
}

func measure(g geometry) {
    fmt.Println(g)
    fmt.Println(g.area())
    fmt.Println(g.perim())
}

func main() {
    r := rect{width: 3, height: 4}
    c := circle{radius: 5}
    measure(r)
    measure(c)
}
```

## Channel

pipe

## Dealing with Json

### Read json from file

If your json has a clearly defined structure, then define your struct first

```go
type struct myJsonObject {
	// my json schema
}

func getJsonFromFile() []myJsonObject {
	// read raw json from sample.json
	jsonFile, err := os.Open("sample.json")
	if err != nil {
		fmt.Println(err)
	}
	defer jsonFile.Close()
	var arrayOfJson []myJsonObject
	byteValue, _ := ioutil.ReadAll(jsonFile)
	json.Unmarshal(byteValue, &arrayOfJson)
	return arrayOfJson
}
```

<https://tutorialedge.net/golang/parsing-json-with-golang/>

## grpc

sample

<https://github.com/grpc/grpc-go/tree/master/examples/helloworld>

proto file

<https://stackoverflow.com/a/70587449/15493213>

## GORM

Go's ORM library

### Enum

<https://threedots.tech/post/safer-enums-in-go/>

e.g.

```go
type DataScope int

const (
	UNKNOWN_DATASCOPE DataScope = iota // -> 0
	NEW_CASE // -> 1
	PENDING_REVIEW // -> 2
	USER_REPLY // -> 3
)

type Report struct {
	DataScope  DataScope `gorm:"column:data_scope;type:enum('NEW_CASE', 'PENDING_REVIEW', 'USER_REPLY');index:,sort:desc" json:"dataScope"`
}
```

Use <https://github.com/dmarkham/enumer> to generate enumer file.

```
go run github.com/dmarkham/enumer -type=DataScope -sql 
```

### Upsert

<https://gorm.io/docs/create.html#Upsert-x2F-On-Conflict>

But MySQL doesn't support specifying column, instead it always check the primary key for conflict check, so better use `FirstOrCreate` and the `Update` if `RowsAffected` is 0

```go
res := r.dbClient.DB().
	WithContext(ctx).
	Model(&model.Report{}).
	Where("date = ?", date).
	FirstOrCreate(report)
err := res.Error
if err != nil {
	return err
}
if res.RowsAffected != 0 { // record created
	return nil
}
// update existing record
if err = r.dbClient.DB().
	WithContext(ctx).
	Model(&model.Report{}).
	Where("date = ?", date).
	Update("waiting_day", waitingDay).Error; err != nil {
	return err
}
```

### hooks

<https://gorm.io/docs/hooks.html>

- AfterFind
	- auto execute after querying

## unit testing

### Writing test files

Your test file should be in `*_test.go` format, in the same directory as your main file.

Functions should be in `Test*` format.

e.g.

```go
// main.go
package mul

func Mul(a, b int) int {
	return a * b
}
```

```go
// main_test.go
package mul // notice the same name

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMul(t *testing.T) {
	assert.Equal(t, Mul(1, 2), 2)
}
```


### Test

To run all test files recursively

```
go test -v ./...
```

To run the test file in the current directory

```
go test -v
```

To run the test file in a specific package

```
go test -v <project name/package name>
```

`-v` for verbose

## mock

### gomock

```
mockgen -source=doer/doer.go -destination=mocks/mock_doer.go --package mocks
```

### sqlmock

<https://pkg.go.dev/github.com/DATA-DOG/go-sqlmock>

<https://github.com/go-gorm/gorm/issues/1525#issuecomment-376164189>

<https://betterprogramming.pub/97ee73e36526>

## AWS

### S3

`ls` your bucket & get a file from your bucket

```go
package main

import (
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	vosEndpoint := os.Getenv("VOS_ENDPOINT")
	vosKey := os.Getenv("VOS_KEY")
	vosSecret := os.Getenv("VOS_SECRET")
	sess, err := session.NewSession(&aws.Config{
		Credentials:      credentials.NewStaticCredentials(vosKey, vosSecret, ""),
		Endpoint:         aws.String(vosEndpoint),
		Region:           aws.String("us-east-1"),
		DisableSSL:       aws.Bool(false),
		S3ForcePathStyle: aws.Bool(true)},
	)
	if err != nil {
		panic(err)
	}

	svc := s3.New(sess)

	// ls all your buckets
	output, err := svc.ListBuckets(nil)
	if err != nil {
	    panic(err)
	}
	fmt.Println(output)
	
	// get file from a bucket
	bucketName := "mybucket"
	fileName := "index.html"
	file, err := svc.GetObject(&s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(fileName),
	})
	if err != nil {
		panic(err)
	}
	defer file.Body.Close()
	fmt.Println(file)
}
```

## Troubleshooting

### VsCode: could not import strconv

command palette -> `Go: Install/Update Tools`

<https://stackoverflow.com/a/64921674/15493213>

### VsCode: undeclared name

Scenario: 

VsCode not recognizing functions in the same package

e.g.

`bruh.go`
```go
package bruh

func Hello() string {
	return "Hello"
}
```

`bruh_test.go`
```go
package bruh
import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestHello(t *testing.T) {
	assert.Equal(t, Hello(), "Hello")
}
```

Yet it shows `undeclared name: Hello` on `Hello()`

Solution:

<https://stackoverflow.com/a/59485684/15493213>