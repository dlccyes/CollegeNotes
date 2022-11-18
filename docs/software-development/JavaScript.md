---
layout: meth
parent: Software Development
---
# JavaScript

- comparisons of different libraries & frameworks
	- https://todomvc.com/

## jQuery

to include jQuery

```html
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
```

## basics

### declaration

- var
- let
	- block scoped
- const
	- block scoped
	- can't change value

### for loop
- `for(let i=0; i<=s.length; i++)`
	- 千萬要加 `let`
- `for(var item of array)` = `for item in array` in Python
- `for(var i in array)` = `for i in range(len(array))` in Python
- `for(var key in json)` = `for key in dict` in Python

### string

#### slice

`str.slice(0,5)`

## function

### execute function after another

example
```js
# func1 -> func2
function func1(something, callback){
	console.log(something);
	callback();
}
function func2(something){
	console.log(something);
}
func1('haha', func2);
```

### pass parameter to callback

example
```js
function funcHandler(callback){
	callback(function(){
		console.log('2nd');
	});
}
function func1(something, callback){
	console.log(something);
	callback();
}
funcHandler(function(callback){
	func1('1st', callback);
});
// result: 
// '1st'
// '2nd'
```

<https://stackoverflow.com/a/3458816/15493213>

## event handler
```javascript
$(document).off("change","[name=refundItem]");
$(document).on("change", "[name=refundItem]", function(){
  itemidx = this.value;
  if(this.checked){
    $('#refundAmt'+itemidx).show();
  }
  if(!this.checked){
    $('#refundAmt'+itemidx).hide();
  }
});
```

```javascript
$('#refresh').off('click');
$('#refresh').on('click', function(){
  console.log('fwfw');
  getOverallAttendance();
});
```

<https://stackoverflow.com/questions/10979865>

## Cookie

When setting a cookie on the child page / subdomain that has been set in root page / main domain, it will create a duplicate cookie in front of the previous one, instead of directly changing the value. To avoid this, append `domain` & `path` when setting cookie.

```
document.cookie = cookieName + "=" + newValue + '; domain=' + window.location.hostname + '; path=/';
```

<https://stackoverflow.com/a/5671466/15493213>

## disable/enable style

jQuery
```js
$('#your_style').get(0).type = 'text' //diable
$('#your_style').get(0).type = '' //enable
```

<https://stackoverflow.com/questions/5609165/changing-attribute-type-from-text-to-password>

vanilla
<https://stackoverflow.com/questions/54440748/how-to-disable-a-style-element-in-html-js>

## HTTP Request

### Axios

```
axios({
  method: 'post',
  url: '/login',
  data: {
    firstName: 'Finn',
    lastName: 'Williams'
  }
});
```

```
axios.post('/login', {
  firstName: 'Finn',
  lastName: 'Williams'
})
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
```

## change theme

Use [data attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

e.g.

```js
function toggleTheme(){
  prevTheme = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = prevTheme === "night" ? "day" : "night"; 
}
```

```css
:root {
  --color-bg: #000;
  --color-txt: #fff;
}
:root[data-theme="day"] {
  --color-bg: #fff;
  --color-txt: #000;
}
body {
  background: var(--color-bg);
  color: var(--color-txt);
}
```

[ref](https://css-tricks.com/a-complete-guide-to-data-attributes/#styling)

## Make html directly editable

```
document.body.contentEditable=true
```

## draggable element
<https://jsfiddle.net/dlccyes/s84thyLn/2/>

using jquery
drag `#night-btn` in this code
```js
var initPos = [-1,-1];
$('#night-btn').click(function(e){
	if(e.clientX == initPos[0] && e.clientY == initPos[1]){
		if(!night){
			$('#day-css').remove();
			$('head').append('<link rel="stylesheet" href="style_b.css" id="night-css">');
			$('#night-btn').html('🌞');
			night = 1;
		}else{
			$('#night-css').remove();
			$('head').append('<link rel="stylesheet" href="style_w.css" id="day-css">');
			$('#night-btn').html('🌚');
			night = 0;
		}
	}
});

$('#night-btn').mousedown(function(e){
	initPos = [e.clientX, e.clientY];
	yoffset = $('#night-btn').offset().top-e.clientY;
	xoffset = $('#night-btn').offset().left-e.clientX;
	onmousemove = function(e){
		yy = yoffset+e.clientY;
		xx = xoffset+e.clientX
		$("#night-btn").css({top: yy, left: xx, position:'absolute'});
	};
});
$('#night-btn').mouseup(function(e){
	onmousemove = function(){};
});
```
