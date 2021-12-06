# JavaScript
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
https://jsfiddle.net/dlccyes/s84thyLn/2/
- embed
	- <iframe src="https://jsfiddle.net/dlccyes/s84thyLn/2/" width=100% height=500px></iframe>


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
