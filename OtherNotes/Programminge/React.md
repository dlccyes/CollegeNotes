---
title: React
layout: meth
parent: Programming
---
# React
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## environment
- https://reactjs.org/docs/add-react-to-a-website.html
- `type="text/babel"` is use jsx
- react library
	- dev
		- `<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>`
		- `<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>`
	- `<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>`
	- `<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>`
- babel
	- library
		- `<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`

## many straightforward examples
- https://reactjs.org/

## jsx
- make react more readable
- discussion
	- https://www.reddit.com/r/reactjs/comments/4giy8a/should_our_team_use_jsx_or_not/
- need to specify type `<script type="text/jsx"></script>`
- singly-closed tag should have  `/` e.g.  `<br />` `<img src="" />`

## syntax
- component
	- must start with capital letter or contain `.`, would be treated as html tag otherwise
- pass variable
	- https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
	- `<button onClick={() => this.deletion(item.id,this.state.items)}>`
		- `<button onClick={this.deletion(item.id,this.state.items)}>` will make it rerendered on every change
		- https://stackoverflow.com/a/33846760
- comment
	- `{ //comment }`
		- https://stackoverflow.com/a/37987004
- class or CSS
	- `className`
