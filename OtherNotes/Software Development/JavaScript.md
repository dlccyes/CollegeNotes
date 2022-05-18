---
layout: meth
parent: Software Development
---
# JavaScript
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>
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
- `for(var item of array)` = `for item in array` in [[Python]]
- `for(var i in array)` = `for i in range(len(array))` in [[Python]]

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

## disable/enable style
jQuery
```js
$('#your_style').get(0).type = 'text' //diable
$('#your_style').get(0).type = '' //enable
```

<https://stackoverflow.com/questions/5609165/changing-attribute-type-from-text-to-password>

vanilla
<https://stackoverflow.com/questions/54440748/how-to-disable-a-style-element-in-html-js>

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
