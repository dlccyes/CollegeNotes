# PHP

## execution

`php myphpfile.php`

## 語法

### extend

#### class inheritance

### class

#### ::

-   static function/variable in a class
-   可以直接 `[classname]::[static function]` 而不用先 instantiate class
-   [https://www.php.net/manual/en/language.oop5.static.php](https://www.php.net/manual/en/language.oop5.static.php)

#### ->

-   .

#### $this

-   狹義的 self ?

#### ::class

return full name of a class including namespace

e.g.

```php
namespace amogus {
    class ඞ {
    }
    echo ඞ::class; // amogus\ඞ
}
```

-   [https://stackoverflow.com/a/42064777/15493213](https://stackoverflow.com/a/42064777/15493213)

#### protected

-   variables accessibly by the classes extending this class

#### magic functions

##### __contruct()

-   init function, auto run when created
-   `public function __construct(){}` = `def __init__()`

##### __invoke()

run when the class is called as a function

```php
class tt
{
    public function __invoke($x)
    {
        print($x);
    }
}
$obj = new tt;
$obj(5); //will print 5

```

#### type hint

-   限定 function variable 為某 class
-   `function sus(amogus $x){}` 代表 for `sus($blue)`，`$blue` 只能是 `amogus` class，否則會噴 error *

```php
class god{
    public function win(){
        print('i am not the imposter');
    }
}

class amogus{
    public function win(){
        print('sus sus sus sus ඞඞඞඞඞඞඞඞඞ sussy ඞඞඞ');
    }
}

function prevail(amogus $amigo){
    $amigo->win();
}

$red = new amogus();
$stopid = new god();
prevail($red); //good ඞඞ
prevail($stopid); //fatal error
```

### =>

-   dictionary 的 :

### closure

-   `function(){}`

### namespace

-   when include others' code, may have variable name collision, thus use namespace to avoid

### autoload

-   [https://stackoverflow.com/a/7987085/15493213](https://stackoverflow.com/a/7987085/15493213)
-   先設個 `spl_autoload_register()` function，之後用別的 file 的 class 的時候，就會根據那個 function 自動去 include 省去把每個你要的 class 都手動 include 一遍的麻煩 *

```php
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});

$obj  = new MyClass1();
$obj2 = new MyClass2(); 
```

-   會自動 include MyClass1.php & MyClass2.php s.t. 你可以用各自檔案內的 class `MyClass1()` & `MyClass2()`

### Use

#### Alias Something as Another

To alias something as another, you can use the `use` statement in PHP. 

```php
use App\model\Shop as Shop;
```

so the following two code snippets are equivalent:

```php
use haha\hoho\bruh; 
$tf = new bruh;
```

```php
$tf = new haha\hoho\bruh;
```

For more information, please refer to this [Stack Overflow post](https://stackoverflow.com/a/25138965/15493213).

### trait

把 function 包起來，`use` 這個 trait in a class 就能用裡面的所有 function

```php
trait message1 {
public function msg1() {
    echo "POOP is fun! ";
  }
}

class Welcome {
  use message1;
}

$obj = new Welcome();
$obj->msg1();
```

### interface

-   弄一個 class 大致架構
-   interface → 如果不按著那個 interface 寫，就會跑 error

```php

<?php
interface A
{
    public function foo();
}

interface B extends A
{
    public function baz(Baz $baz);
}

// This will work
class C implements B
{
    public function foo()
    {
    }

    public function baz(Baz $baz)
    {
    }
}

// This will not work and result in a fatal error
class D implements B
{
    public function foo()
    {
    }

    public function baz(Foo $foo)
    {
    }
}
?>
```

### Unset

`unset()` is a function in PHP that deletes a variable and frees up memory. For more information, please refer to this [Stack Overflow post](https://stackoverflow.com/a/2617786/15493213).

### &Variable

The `&` symbol in PHP is used to create a reference to a variable. Here's an example:

```php
<?php
$number = 3;
$pointer = &$number;  // Sets $pointer to a reference to $number
echo $number."<br/>"; // Outputs  '3' and a line break
$pointer = 24;        // Sets $number to 24
echo $number;         // Outputs '24'
?>
```

For more information, please refer to this [Stack Overflow post](https://stackoverflow.com/a/3774157).

### Curl

In PHP, `curl_exec()` is a function that executes a curl.

### ? :

The `? :` syntax is known as the ternary operator in PHP. It is a shorthand way to write an if-else statement. 

e,g,

```php
$hola = $execute ? 'yes' : 'no';
```

=

```php
if($execute){
  $hola = 'yes';
}else{
  $hola = 'no';
}
```

### Date

To format dates in PHP, you can use the `DateTime` class. Here are some examples:

#### ISO 8601 Local Time


```php
$datestr = '2021/7/30 10:33'; 
$date = new DateTime($datestr, new DateTimeZone('+0800')); $timestamp = $date->format('c'); //'U' for UTC echo $timestamp;
```

#### ISO 8601 UTC Z

```php
$datestr = '2021/7/30 10:33
```

## Running PHP Files

To run a PHP file, you can follow these steps:

1.  Open XAMPP.
2.  Start Apache.
3.  Put your PHP file in the `xampp/htdocs` directory.
4.  Go to `http://localhost/test/bruh.php` to run the `xampp/htdocs/test/bruh.php` file.

## Display your php info

```php
<?php
phpinfo();
?>
```

## Timezones

- <https://www.php.net/manual/en/timezones.php>
- <https://www.php.net/manual/en/language.namespaces.rationale.php>

## Design Patterns

### Dependency Injection

要使用一個東西時，把建立那個東西的 code 先寫好(e.g. 用 container)，要用的時候直接引用，這樣要更改建立那東西的步驟/參數時，直接改那套 code 就好，不用把每次建立並引用那東西的 code 都改一遍

You can learn more about dependency injection from the following resources:

-   [PHP-DI](https://php-di.org/doc/understanding-di.html)
-   [Symfony Service Container](https://symfony.com/doc/2.1/book/service_container.html#what-is-a-service-container)

### Facade

把一堆雜亂的 code 包上一層皮，在外面蓋上很好 access 很乾淨的 API，regardless of how messy the interior is.

[Facade Design Pattern in PHP 8](https://medium.com/mestredev/facade-php-8-design-patterns-40b1ef8566b5)
