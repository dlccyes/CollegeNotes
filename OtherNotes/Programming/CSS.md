---
title: CSS
layout: meth
parent: Programming
---
# CSS
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## head
head elements can also has class or id

## remove element
- jquery
	- `$('#id').remove()`

## selector
### wildcard
`[class*='xterm-dom-renderer-owner-']` → any class with name containing `.xterm-dom-renderer-owner-`

### not
`img:not(.img-view)` -> `img` with class != `.img-view`  

<https://developer.mozilla.org/en-US/docs/Web/CSS/:not>

## responsive
add
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
and use 
```
@media (max-width){
}
```
to write css for different width

## animation
### equalizer
- <https://codepen.io/elalemanyo/pen/wvjGYa>
	- can view compiled HTML if don't want to use HAML
- <https://codepen.io/yomateo/pen/ypbNrJ>