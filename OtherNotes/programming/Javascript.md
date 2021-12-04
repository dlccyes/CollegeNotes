# Javascript
- comparisons of different libraries & frameworks
	- https://todomvc.com/


## syntax
### for loop
- `for(let i=0; i<=s.length; i++)`
	- 千萬要加 `let`
- `for(var item of array)` = `for item in array` in [[python]]
- `for(var i in array)` = `for i in range(len(array))` in [[python]]

### string
#### slice
`str.slice(0,5)`

## drag element
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
	onmousemove = function(e){
		$("#night-btn").css({top: e.clientY-10, left: e.clientX-10, position:'fixed'});
	};
});
$('#night-btn').mouseup(function(e){
	onmousemove = function(){};
});
```
