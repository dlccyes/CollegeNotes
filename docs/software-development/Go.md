---
layout: meth
parent: Software Development
---

# Go

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

### Install current project dependencies

Auto check your codes and update `go.mod` and install all required dependecies in `go.mod` to `GOMODACHE` if haven't

```
go mod tidy
```

### Change module path

The go modules are stored in Go env `GOMODCACHE` (`go env GOMODCACHE` to check it)

You can change it to store the modules somewhere else

```
go env -w GOMODCACHE="/bruh"
```

### go get from private domain/repo

Suppose you want to `go get git.evilcorp.com/EVILPRODUCT/evil-event`

Do this

```
export GOPRIVATE=git.evilcorp.com
```

### Import

Go importing 101

<https://stackoverflow.com/a/68710251/15493213>

## Run

```
go run <script.go>
```

## Environmental variables

### Go Env

To see all Go env

```
go env
```

To see a specific Go env e.g. `GOPATH`

```
go env GOPATH
```

To set a Go env e.g. `GOMODCACHE`

```
go env -w GOMODCACHE="/bruh"
```

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

## Goroutine

concurrency

### With WaitGroup

- `wg.Add(n)` -> n threads
- `wg.Wait()` -> wait for all threads to end and then continue
- `go myfunction()` -> Start a thread executing `myfunction()`

```go
package main

import (
	"fmt"
	"sync"
)

func printStr(str string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(str)
}

func main() {
	var wg sync.WaitGroup
	strList := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j"}
	wg.Add(len(strList))
	for _, str := range strList {
		go printStr(str, &wg)
	}
	wg.Wait()
}
```

### Limit amount of goroutines

```go
package main

import "fmt"

const MAX = 20

func main() {
    sem := make(chan struct{}, MAX)
    for {
        sem <- struct{}{} // will block if there is MAX ints in sem
        go func() {
            fmt.Println("hello again, world")
            <-sem // removes an int from sem, allowing another to proceed
        }()
    }
}
```

<https://stackoverflow.com/a/25306439/15493213>

## Fx - dependency injection

```go
fx.New(
	fx.Provide(),
	fx.Invoke(),
).Run()
```

### Context timeout

Default context timeout is 15s, to change it, specify it under `fx.New()`

```go
fx.StartTimeout(time.Second*42)
```

## Unit testing

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

Save results to file

```
go test -v -cover -covermode=count -coverpkg=./... -coverprofile=coverage.out ./...
go test -json ./... > report.json
```

## Mock

### GoMock

```
mockgen -source=doer/doer.go -destination=mocks/mock_doer.go --package mocks
```

### sqlmock

<https://pkg.go.dev/github.com/DATA-DOG/go-sqlmock>

<https://github.com/go-gorm/gorm/issues/1525#issuecomment-376164189>

<https://betterprogramming.pub/97ee73e36526>

## Logging with Logrus

`github.com/sirupsen/logrus`

### Write to local file

```go
logger := logrus.New()
currentTime := time.Now()
today := currentTime.Format("2006-01-02")
logFile := fmt.Sprintf("log_%s.txt", today)
f, err := os.OpenFile(logFile, os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
if err != nil {
	fmt.Println("Failed to create logfile" + logFile)
	panic(err)
}
logger.SetOutput(f)
```

<https://www.golinuxcloud.com/golang-logrus/>

## AES Encryption

Best practice: generate random IV each time and prepend it to your encrypted text. When decrypting, extract the IV from the encrypted text. See <https://stackoverflow.com/questions/8041451/> 

Implementation

```go
package main

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io"
)

func main() {
	originalText := "encrypt this golang"
	fmt.Println(originalText)

	key := []byte("example key 1234")

	// encrypt value to base64
	cryptoText := encrypt(key, originalText)
	fmt.Println(cryptoText)

	// encrypt base64 crypto to original value
	text := decrypt(key, cryptoText)
	fmt.Printf(text)
}

// encrypt string to base64 crypto using AES
func encrypt(key []byte, text string) string {
	// key := []byte(keyText)
	plaintext := []byte(text)

	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	// The IV needs to be unique, but not secure. Therefore it's common to
	// include it at the beginning of the ciphertext.
	ciphertext := make([]byte, aes.BlockSize+len(plaintext))
	iv := ciphertext[:aes.BlockSize]
	if _, err := io.ReadFull(rand.Reader, iv); err != nil {
		panic(err)
	}

	stream := cipher.NewCFBEncrypter(block, iv)
	stream.XORKeyStream(ciphertext[aes.BlockSize:], plaintext)

	// convert to base64
	return base64.URLEncoding.EncodeToString(ciphertext)
}

// decrypt from base64 to decrypted string
func decrypt(key []byte, cryptoText string) string {
	ciphertext, _ := base64.URLEncoding.DecodeString(cryptoText)

	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	// The IV needs to be unique, but not secure. Therefore it's common to
	// include it at the beginning of the ciphertext.
	if len(ciphertext) < aes.BlockSize {
		panic("ciphertext too short")
	}
	iv := ciphertext[:aes.BlockSize]
	ciphertext = ciphertext[aes.BlockSize:]

	stream := cipher.NewCFBDecrypter(block, iv)

	// XORKeyStream can work in-place if the two arguments are the same.
	stream.XORKeyStream(ciphertext, ciphertext)

	return fmt.Sprintf("%s", ciphertext)
}
```

<https://gist.github.com/manishtpatel/8222606>

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