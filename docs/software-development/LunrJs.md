# lunr.js

## 

```js
var idx = lunr(function () {
  // keys
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position'] // include matched location
  
  this.add({
    "title": "Alice",
    "body": "Hello Alexandra",
    "id": "1"
  })
  this.add({
    "title": "Luna",
    "body": "Hello Luna",
    "id": "2"
  })
})
```

```js
idx.search("alexandra")
```

will return 

```json
[
    {
        "ref": "1",
        "score": 0.693,
        "matchData": {
            "metadata": {
                "alexandra": {
                    "body": {
                        "position": [
                            [
                                6,
                                9
                            ]
                        ]
                    }
                }
            }
        }
    }
]
```
