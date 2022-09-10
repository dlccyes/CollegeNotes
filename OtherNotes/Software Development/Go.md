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

## Init

```
go mod init <project_name>
go tidy
```

Will generate `go.mod`

## Run

```
go run <script.go>
```

## .env

<https://towardsdatascience.com/use-environment-variable-in-your-next-golang-project-39e17c3aaa66>

```
go get github.com/joho/godotenv
```

```
godotenv.Load()
os.Getenv(<your_env>)
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

## grpc

sample

<https://github.com/grpc/grpc-go/tree/master/examples/helloworld>

proto file

<https://stackoverflow.com/a/70587449/15493213>


## Troubleshooting

### VsCode: could not import strconv

command palette -> `Go: Install/Update Tools`

<https://stackoverflow.com/a/64921674/15493213>