---
layout: meth
has_children: true
---

# Python
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## requirements.txt
### create
- for every libraries you have
	- `python -m pip freeze > requirements.txt`
- for a specific directory
	- `pipreqs /path/to/project`
		- `pip3 install pipreqs` to install
			- `export PATH=$PATH:~/.local/bin` if have xxx not found error
	- <https://stackoverflow.com/a/31684470/15493213>
	
### use
```
pip3 install -r requirements.txt
```

## venv (virtual environment)
create
```
python3 -m venv venv
# echo venv/ >> .gitignore
```

go into
```
source venv/bin/activate
```

leave
```
deactivate
```

## pyenv
python version controller

<https://github.com/pyenv/pyenv>

### install
```
https://pyenv.run
```

add below to the end of `~/.bashrc`
```
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

restart shell with `exec $SHELL` or just `source ~/.bashrc`

<https://github.com/pyenv/pyenv-installer>


### commands
- `pyenv install <version>` to install e.g. 3.9.10
- `pyenv uninstall <version>` to uninstall version
- `pyenv versions` to see versions you have & the version you're using (like `git branch`)
- `pyenv local <version>` to select your desired version **for this directory**
	- `python3 -V` to check
- `pyenv global <version>` to select your desired version for you machine

## import
import everything from `config.py`, including packages, functions, variables, etc. (like `include` in php or `<script></script>` in html/js)
```
from config import *
```
<https://stackoverflow.com/a/17255770/15493213>

## matplotlib
### plot as many on demand
<https://stackoverflow.com/a/39106673/15493213>

```python
import matplotlib.pyplot as plt

xvals = [i for i in range(0, 10)]
yvals1 = [i**2 for i in range(0, 10)]
yvals2 = [i**3 for i in range(0, 10)]

f, ax = plt.subplots(1)
ax.plot(xvals, yvals1)
ax.plot(xvals, yvals2)

f2, ax2 = plt.subplots(1)
ax2.plot(xvals, yvals1)
ax2.plot(xvals, yvals2)

plt.show()
```
plot 2 charts, each with 2 lines

### subplot on demand
<https://stackoverflow.com/a/49100437/15493213>

```python
import matplotlib.pyplot as plt
import numpy as np

f = plt.figure(figsize=(10,3))
ax = f.add_subplot(121)
ax2 = f.add_subplot(122)
x = np.linspace(0,4,1000)
ax.plot(x, np.sin(x))
ax2.plot(x, np.cos(x), 'r:')
```

## exec
to use in function, use `exec(string, globals())`

## function
### inputs
- `*args` -> unpack a list/tuple of args
- `**args` -> unpack a dict of args

```
def foo(x, y, z):
	pass
# method 1
foo(1, 2, 3)
#method 2
_list = [1, 2, 3]
foo(*_list)
# method 3
dict = {x=1, y=2, z=3}
foo(**_dict)
```

can also be used reversedly

<https://stackoverflow.com/questions/36901/>

## decorator
```py
def plusC(c):
    """add c"""
    def dec(func):
        def wrapper(a, b):
            return func(a,b)+c
        return wrapper
    return dec

@plusC(5)
def plus(a, b):
    return a + b

ans = plus(1, 2)
print(ans) # output 1+2+5 = 8
```

<https://stackoverflow.com/a/53973651/15493213>

## read file
```py
with open(inputfile, 'r') as file_in:
    matrix = file_in.readlines()
```

## encode
### encode to base 64
```py
cred = f'{clientID}:{clientSecret}'
b64_cred = base64.b64encode(cred.encode('ascii')).decode('ascii')
```

## string
### split
```
import re
old = 'I am, not, you! Fuck!'
new = re.split('[,\s!]', old)
new = re.split(', | |!')
```
- use `|` to separate symbols
- use `[]` to use each symbol in the bracket

## convert
### str to json
```py
import json
json.loads(str)
```

## datetime
```
from datetime import datetime
```

convert date & time now to iso format string
```
datetime.now().isoformat()
```

convert iso format string to datetime object
```
datetime.fromisoformat(str)
```

## heap
- priority queue
- `import heapq`

## collections
- `import collections`

### OrderedDict
- remember the insertion order
- great for implementing LRU

### deque
- a double sided simple queue, O(1) for enqueuing & dequeuing from both sides
- append()
- appendleft()
- pop()
- popleft()

### Counter
- return a hash map, counting each element of a list

## sort
```py
# [[10,16],[2,8],[1,6],[7,12]]
sorted(points, key = lambda section: section[1]) # sort by second value
```

## infinity
```py
float('inf')
```

## convert between ipynb & python
```
ipynb-py-convert <in.ipynb> <out.py>
```

```
ipynb-py-convert <in.py> <out.ipynb>
```

<https://stackoverflow.com/a/66565946/15493213>

## web
- [Django](Django.md)
- [Flask](Flask.md)

## Database interaction
see [SQLAlchemy](SQLAlchemy.md)