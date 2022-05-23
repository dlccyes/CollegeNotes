---
layout: meth
parent: Software Development
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

For some reason `request.get_json()` only works in `POST` request 

## routing
route with decorator
```
from flask import Flask
app = Flask(__name__)

@app.route("/testing", methods=['POST'])
def something():
	# /testing with type = POST will go to this function
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

### fallback route
```python
@app.errorhandler(404)
def page_not_found(e):
    return render_template('invalid.html')
```

## views / templates
[Full doc](https://flask.palletsprojects.com/en/2.1.x/tutorial/templates/)

Put all your views (html files) in `/templates`
```
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
```

### passing variables
app.py
```
@app.route("/haha")
def index():
    return render_template('haha.html', data='haha')
```

haha,html
```
{{ data }}
```

### if
```html
{% if request.path != '/' %}
<div class="navbar">
  <a href="{{ url_for('index') }}">Dashboard</a>
</div>
{% endif %}
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
use [SQLAlchemy](SQLAlchemy.md)