---
layout: meth
parent: Software Development
---

# Go

## Install

### With HomeBrew (MacOS)

```
brew update
brew upgrade
brew install go
```

###

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

## Slice

### The internal of slice

[Arrays, slices (and strings): The mechanics of 'append' | Go Blog]([https://go.dev/blog/slices](https://go.dev/blog/slices))

Slice is a slice of a fixed-sized array, with a pointer pointing to the start and a length value specifying the length.

```go
type sliceHeader struct {
    Length        int
    ZerothElement *byte
}

slice := sliceHeader{
    Length:        50,
    ZerothElement: &buffer[100], // pointer to the underlying array
}
```

When copied or passed to a function, a change to the length won't apply to the original slice since the length is a value not a pointer.

> Here we see that the contents of a slice argument can be modified by a function, but its header cannot. The length stored in the slice variable is not modified by the call to the function, since the function is passed a copy of the slice header, not the original.

```go
func SubtractOneFromLength(slice []byte) []byte {
    slice = slice[0 : len(slice)-1]
    return slice
}

func main() {
    fmt.Println("Before: len(slice) =", len(slice))
    newSlice := SubtractOneFromLength(slice)
    fmt.Println("After:  len(slice) =", len(slice))
    fmt.Println("After:  len(newSlice) =", len(newSlice))
}
```

```
Before: len(slice) = 50
After:  len(slice) = 50
After:  len(newSlice) = 49
```

### How append works

If the new length of slice is greater than the length of the underlying array, it will `append()` will first allocate a new array (length = 1.5 x new slice length), and the copy all the data into the new array. Since it's a different array, the address of the underlying array is obviously changed also. 

If the original array is capable to hold all the new data already, it will simply copy the new data into the array.

```go
// Append appends the elements to the slice.
// Efficient version.
func Append(slice []int, elements ...int) []int {
    n := len(slice)
    total := len(slice) + len(elements)
    if total > cap(slice) {
        // Reallocate. Grow to 1.5 times the new size, so we can still grow.
        newSize := total*3/2 + 1
        newSlice := make([]int, total, newSize)
        copy(newSlice, slice)
        slice = newSlice
    }
    slice = slice[:total]
    copy(slice[n:], elements)
    return slice
}
```

### Slice of Values vs. Slice of Pointers

If the underlying array of your slice is big enough for your need, there is no point at using slice of pointers, as it will need to allocate the a new piece of memory for each entry in the slice.

However, if the your your slice will outgrow the underlying array when being appended, a new array with sufficient length will be allocated, copying all the data from the original array to the new one. This is when using slice of pointers is a better option, since only the pointers will need to be copied, not the entire values.

To test the performance difference yourself

`main_test.go`

```go
package main

import (
	"testing"
)

type SmallStruct struct {
	A int
	B int
}

const (
	SLICE_LEN = 100
	ARRAY_LEN = 100
)

func BenchmarkSliceOfSmallStructs(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		slice := make([]SmallStruct, 0, ARRAY_LEN)
		for j := 0; j < SLICE_LEN; j++ {
			slice = append(slice, SmallStruct{A: j, B: j + 1})
		}
	}
}

func BenchmarkSliceOfPointersOfSmallStructs(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ { // test count
		slice := make([]*SmallStruct, 0, ARRAY_LEN)
		for j := 0; j < SLICE_LEN; j++ {
			slice = append(slice, &SmallStruct{A: j, B: j + 1})
		}
	}
}

type BigStruct struct {
	F1, F2, F3, F4, F5, F6, F7                string
	I1, I2                                    int
	I3, I4, I5, I6, I7, I8, I9, I10, I11, I12 int
	A1, A2, A3, A4, A5, A6, A7                SmallStruct
	A8, A9, A10, A11, A12, A13, A14           SmallStruct
}

func BenchmarkSliceOfBigStructs(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		slice := make([]BigStruct, 0, ARRAY_LEN)
		for j := 0; j < SLICE_LEN; j++ {
			slice = append(slice, BigStruct{
				I1: j,
				I2: j + 1,
			})
		}
	}
}

func BenchmarkSliceOfPointersOfBigStructs(b *testing.B) {
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		slice := make([]*BigStruct, 0, ARRAY_LEN)
		for j := 0; j < SLICE_LEN; j++ {
			slice = append(slice, &BigStruct{
				I1: j,
				I2: j + 1,
			})
		}
	}
}

```

To see direct ouputs

```
go test -bench . -count 3
```

To see analyzed outputs, install `benchstat` first

```
go install golang.org/x/perf/cmd/benchstat@latest
```

and then

```
go test -bench . -count 3 -benchmem >> benchmark.txt
benchstat benchmark.txt 
```

See [[#Benchmarking]] for more

Output when	`SLICE_LEN` = 100, `ARRAY_LEN` = 100:

```
goos: darwin
goarch: amd64
pkg: gslice
cpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
                                 │ benchmark.txt │
                                 │    sec/op     │
SliceOfSmallStructs-12               89.89n ± 4%
SliceOfPointersOfSmallStructs-12     2.133µ ± 8%
SliceOfBigStructs-12                 3.363µ ± 7%
SliceOfPointersOfBigStructs-12       8.597µ ± 3%
geomean                              1.534µ

                                 │ benchmark.txt  │
                                 │      B/op      │
SliceOfSmallStructs-12               0.000 ± 0%
SliceOfPointersOfSmallStructs-12   1.562Ki ± 0%
SliceOfBigStructs-12                 0.000 ± 0%
SliceOfPointersOfBigStructs-12     43.75Ki ± 0%
geomean                                         ¹
¹ summaries must be >0 to compute geomean

                                 │ benchmark.txt │
                                 │   allocs/op   │
SliceOfSmallStructs-12              0.000 ± 0%
SliceOfPointersOfSmallStructs-12    100.0 ± 0%
SliceOfBigStructs-12                0.000 ± 0%
SliceOfPointersOfBigStructs-12      100.0 ± 0%
geomean                                        ¹
¹ summaries must be >0 to compute geomean
```

Output when `SLICE_LEN` = 100, `ARRAY_LEN` = 10:

```
goos: darwin
goarch: amd64
pkg: gslice
cpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
                                 │ benchmark_raw.txt │
                                 │      sec/op       │
SliceOfSmallStructs-12                  880.6n ± 17%
SliceOfPointersOfSmallStructs-12        2.815µ ±  7%
SliceOfBigStructs-12                    20.41µ ± 15%
SliceOfPointersOfBigStructs-12          9.213µ ±  3%
geomean                                 4.646µ

                                 │ benchmark_raw.txt │
                                 │       B/op        │
SliceOfSmallStructs-12                  4.812Ki ± 0%
SliceOfPointersOfSmallStructs-12        3.906Ki ± 0%
SliceOfBigStructs-12                    147.2Ki ± 0%
SliceOfPointersOfBigStructs-12          46.09Ki ± 0%
geomean                                 18.90Ki

                                 │ benchmark_raw.txt │
                                 │     allocs/op     │
SliceOfSmallStructs-12                    4.000 ± 0%
SliceOfPointersOfSmallStructs-12          104.0 ± 0%
SliceOfBigStructs-12                      4.000 ± 0%
SliceOfPointersOfBigStructs-12            104.0 ± 0%
geomean                                   20.40                                        20.40
```

Please read [Arrays, slices (and strings): The mechanics of 'append' | Go Blog]([https://go.dev/blog/slices](https://go.dev/blog/slices)) if you're confused.

Discussions containing partial truths

- [Bad Go: slices of pointers | Medium](https://medium.com/@philpearl/bad-go-slices-of-pointers-ed3c06b8bb41)
- [Slices of structs vs. slices of pointers to structs | Stack Overflow](https://stackoverflow.com/a/37621532/15493213)


## Docstring

Comments directly above a function will become docstrings.

```go
// this is an example function
// this function will return the result of a + b
func add(a int, b int) int {
	c := a + b
	return c
}
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

### Execute raw query

```go
db.EXEC("TRUNCATE TABLE services")
```

### Enum

Note that `AutoMigrate` will not migrate enum changes. You can alter table directly, or drop the table and then let `AutoMigrate` recreate the table.tes

Use <https://threedots.tech/post/safer-enums-in-go/>


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

Use <https://github.com/dmarkham/enumer> to generate enumer file for `DataScope`.

```
go run github.com/dmarkham/enumer -type=DataScope -sql 
```

To map string back to enum, just use the `URLTypeString` function in the generated enumer file. But if you want to implement it manually,

```go
package alphabets

type Alphabets int

const (
    A Alphabets = iota
    B
    C
)

var MapEnumStringToAlphabets = func() map[string]Alphabets {
    m := make(map[string]Alphabets)
    for i := A; i <= C; i++ {
        m[i.String()] = i
    }
    return m
}()
```

<https://stackoverflow.com/a/75205150/15493213>

### Transaction

<https://gorm.io/docs/transactions.html>

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

### Error

You can add error manually, which is useful when writing unit tests

```go
db.AddError(gorm.ErrInvalidTransaction)
```

or simply

```go
db.Error = gorm.ErrInvalidTransaction
```

To revert, just reassign it to null

```go
db.Error = nil
```

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

### VsCode helper

You'll see a snippet allowing you to execute the test directly in VsCode. You can add additional flag in the settings.

For example, if you want it to always run with `-v` (verbose), add this in settings

```
`"go.testFlags": ["-v"]`
```

See <https://github.com/Microsoft/vscode-go/issues/1377#issuecomment-347431580>

### assert equal of list ignoring order

`assert.ElementsMatch()`

<https://github.com/stretchr/testify/issues/275#issuecomment-480823210>

## Benchmarking

- [Benchmarking in Golang: Improving function performance](https://blog.logrocket.com/benchmarking-golang-improve-function-performance/#:~:text=Running%20a%20benchmark%20in%20Go,subset%20of%20your%20benchmark%20functions.)
- [Chapter 34: Benchmarks | Practical Go Lessons](https://www.practical-go-lessons.com/chap-34-benchmarks)

![](https://i.imgur.com/dAt851z.png)

## Mock

### GoMock

```
mockgen -source=doer/doer.go -destination=mocks/mock_doer.go --package mocks
```

### sqlmock

<https://pkg.go.dev/github.com/DATA-DOG/go-sqlmock>

<https://github.com/go-gorm/gorm/issues/1525#issuecomment-376164189>

<https://betterprogramming.pub/97ee73e36526>

## Gin

### Binding parameters or body

You can bind the query parameters or json body to a struct.

To bind query parameters or form-data, specify `form` in struct tags. To bind json body, specify `json` in struct tags.

```go
type Filter struct {
    Product    bool   `json:"product" form:"product"`
    SubProduct bool   `json:"sub_product" form:"sub_product"`
    Project    bool   `json:"project" form:"project"`
}

func (h topHandlers) HandleGetServices(c *gin.Context) {
	filter := &model.Filter{}
	// binding query params
	err := c.ShouldBind(filter)
	// binding json body
	err := c.ShouldBindJSON(filter)
	// rest of the codes
}	
```

Don't forget to specify `Content-Type: applicaiton/json` in request header to bind json body.

### mock

A helper function helping you set up a mock context and a recorder recording the reponse of your request

```go
func MockGin() (*gin.Context, *httptest.ResponseRecorder) {
    w := httptest.NewRecorder()
    c, _ := gin.CreateTestContext(w)
    c.Request = &http.Request{
        Header: make(http.Header),
        URL:    &url.URL{},
        Body:   nil,
    }   
    return c, w
}
```

Create your mock request, send the context into your handler function, and see if the response code and data is correct 

```go
func TestGetService(){
    c, w := test_helper.MockGin()
    c.Request.URL.RawQuery = "id=1"

	expectedService := model.Service{}
    handler.HandleGetService(c) // assuming it will return a http status code and a model.Service struct, which will be recorded by w
    assert.Equal(suite.T(), http.StatusOK, w.Code)
	expected, _ := json.Marshal(expectedService)
	assert.Equal(suite.T(), string(expected), w.Body.String())
}
```

To emulate a post request with a json payload

```go
    c, w := test_helper.MockGin()
    jsonPayload := `{
        "hi":  "there"
    }`
    c.Request.Body = io.NopCloser(strings.NewReader(jsonPayload))
    c.Request.Header.Set("Content-Type", "application/json")
```

## HTTP Client

### Proxy

```go
func NewHTTPClientWithProxy(proxyURL string) *resty.Client {
	client := resty.New()
	client.SetProxy(proxyURL)
	return client
}
```

proxyURL format: `http://<username>:<password>@<host>:<port>`

or `http://<host>:<port>` without authentication

**Remember to use `http` even for https!**

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

## Swaggo

Create API docs with go comments!

```go
//go:generate swag init --dir=<path/to/apis> --generalInfo=<path/to/swaggo-init-file> --output=<path/to/desired-doc-directory> --parseInternal --pd
```

In your swaggo init file

```go
package handler

import (
	"net/http"

	_ "<path-to-doc-directory>"

	"github.com/gin-gonic/gin"
	swaggoFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title My API
// @version 1.0
// @description This is my API

// @schemes http https
// @host localhost:8080
// @BasePath /api/v1

// RegisterSwaggoHandler swaggo
func RegisterSwaggoHandler(router *gin.Engine) {
	router.GET("/api/swagger", func(c *gin.Context) { c.Redirect(http.StatusMovedPermanently, "/api/swagger/index.html") })
	router.GET("/api/swagger/*any", ginSwagger.WrapHandler(swaggoFiles.Handler))
}
```

Add comments before your API

```go
// HandleGetServiceInfo Swagger
// @Summary      Get info
// @Description  Get info with id
// @Accept       json
// @Produce      json
// @Param        id      query    string    true    "id"
// @Success      200  {object}  model.Info
// @Failure      400  {string}  string ""
// @Failure      403  {string}  string ""
// @Failure      404  {string}  string ""
// @Router       /info [get]
func HandleGetInfo(){}
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