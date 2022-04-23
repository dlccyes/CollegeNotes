---
layout: meth
parent: Python
---
# Flask
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

lightweight [Python](Python.md) web framework

## sample
```
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/some_internal_api", methods=['POST'])
def do_something():
    print(request.json)
```

## routing
route with decorator
```
from flask import Flask
app = Flask(__name__)

@app.route("/testing")
def something():
	# /testing will go to this function
	# do something
	print(request.json)
```

`url_for('<function_name>')` will return the route leading to that function

e.g. `url_for('something')` will return `'/testing'`

can use this with `redirect('target_url')`

```
url_for('static', filename='path/to/file')
```
will be translate to `/static/path/to/file`

## views
put all your views (html files) in `/templates`
```
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
```

## static files
put static files in `/static`

use `url_for` to reference it

e.g. you have `/static/style.css`  
to link it, do  
```
 <link rel=stylesheet type=text/css href="{{ url_for('static', filename='style.css') }}">
```

## database
use [sqlalchemy](sqlalchemy.md)