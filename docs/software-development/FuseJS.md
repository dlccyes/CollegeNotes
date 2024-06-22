# Fuse.js

A fuzzy search [[JavaScript]] library.

[Doc](https://www.fusejs.io/)

## Live Demo

<https://www.fusejs.io/demo.html>

## Behavior

You need to supply this library with an json list string containing all the text you want to be searchable in this format

```json
data = [
  {
    "title": "Lorem",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ---- KEYWORD1 ------ Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "title": "Sed",
    "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil ---- KEYWORD2 ------ molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  }
]
```

Then you can specify which fields to search in [[#Options]].

## Options

[Options | Fuse.js](https://www.fusejs.io/api/options.html)

You can keep most values in default but you would want to set `ignoreLocation=true` for desired result.

With `ignoreLocation=false` (default) it would only search in a location in your text. 

> The default options only search the first 60 characters. This should suffice if it is reasonably expected that the match is within this range. To modify this behavior, set the appropriate combination of `location`, `threshold`, `distance` (or `ignoreLocation`).

To specify which fields in `index.json` to search, set `keys`.

e.g.

```js
const Fuse = require('fuse.js');
const fuseOptions = {
	// isCaseSensitive: false,
	includeScore: true,
	shouldSort: true,
	includeMatches: true,
	findAllMatches: true,
	// minMatchCharLength: 1,
	threshold: 0.6,
	// useExtendedSearch: false,
	ignoreLocation: true,
	ignoreFieldNorm: true,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"author.firstName"
	]
};

const fuse = new Fuse(data, fuseOptions);
const searchPattern = "KEYWORD2"
return fuse.search(searchPattern)
```

