# Fuse.js

A fuzzy search [[JavaScript]] library.

[Doc](https://www.fusejs.io/)

## Live Demo

<https://www.fusejs.io/demo.html>

## Behavior

You need to supply this library with an json list string containing all the text you want to be searchable in this format

```json
  {
    "title": "Fool",
    "author": {
      "firstName": "Christopher",
      "lastName": "Moore"
    }
  },
  {
    "title": "Incompetence",
    "author": {
      "firstName": "Rob",
      "lastName": "Grant"
    }
  }
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
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// threshold: 0.6,
	// useExtendedSearch: false,
	ignoreLocation: true,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"title",
		"author.firstName"
	]
};

const fuse = new Fuse(list, fuseOptions);

// Change the pattern
const searchPattern = "academic"

return fuse.search(searchPattern)
```




