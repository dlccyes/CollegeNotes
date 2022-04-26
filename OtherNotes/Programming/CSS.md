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
use 
```
@media (max-width){
}
```
to write css for different width

add
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
to apply to touch devices

## animation
### equalizer
- <https://codepen.io/elalemanyo/pen/wvjGYa>
	- can view compiled HTML if don't want to use HAML
- <https://codepen.io/yomateo/pen/ypbNrJ>

## font
go to google font -> select font -> select style -> go to the link in `<link>` or `@import` to find how they're implemented

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXo.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; 
}
```