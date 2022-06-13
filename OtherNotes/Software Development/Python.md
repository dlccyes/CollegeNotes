---
layout: meth
parent: Software Development
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

### import from relative path

e.g. to import from parent's parent directory

```python
import sys
sys.path.append('../')
import <your_file>
```

or

```python

import sys, os
sys.path.insert(1, os.path.join(sys.path[0], '../..'))
import <your_file>
```

<https://stackoverflow.com/questions/714063/#comment23054549_11158224>

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

### axis
#### label
```
import matplotlib.pyplot as plt
plt.xlabel("something")
plt.ylabel("something")
```

#### axis interval
y axis 20 intervals
```
import matplotlib.pyplot as plt
ax = plt.gca()
y_min, y_max = [int(i) for i in ax.get_ylim()]
plt.yticks(range(y_min, y_max, (y_max-y_min)//20))
plt.ylim([0, y_max])
```

#### hide axis
```
import matplotlib.pyplot as plt
plt.gca().get_xaxis().set_visible(False)
```

#### datetime
auto formate dates on x axis
```
import matplotlib.pyplot as plt
plt.gcf().autofmt_xdate()
```

manual formatting
```
ax = plt.gca()
# 1 minute 1 tick
ax.xaxis.set_major_locator(md.MinuteLocator())
# format dateime to HH:MM
ax.xaxis.set_major_formatter(md.DateFormatter('%H:%M'))
```
<https://stackoverflow.com/a/69333777/15493213>  
<https://matplotlib.org/stable/api/dates_api.html#matplotlib.dates.MinuteLocator>

## simple web server

```
python3 -m http.server
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

### to string
convert date & time now to iso format string
```
datetime.now().isoformat()
```

convert iso format string to datetime object
```
datetime.fromisoformat(str)
```

convert to custom format string
```python
datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
```

### current time
```python
datetime.now()
```

UTC
```python
datetime.utcnow()
```

UTC+8
```python
from datetime import datetime, timedelta, timezone
datetime.now(timezone(timedelta(hours=8)))
```

### timedelta
```
datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```

```
from datetime import timedelta
```

subtract 2 datetime objects to get a timedelta object

example
```
haha = datetime.timedelta(days=1, seconds=20, microseconds=610333)
haha.days # -> 1
haha.seconds # -> 20
haha.microseconds # -> 610333
```
to get total passed time
```
# in days
haha/timedelta(days=1)
# in seconds
haha/timedelta(seconds=1)
# in microseconds
haha/timedelta(microseconds=1)
```

<https://docs.python.org/3/library/datetime.html#datetime.timedelta.total_seconds>

### iterate time with timedelta
e.g. iterate from tiempo_prev to tiempo with 1 second as unit
```python
while tiempo_prev != None:
	tiempo_prev += timedelta(seconds=1)
	if tiempo_prev >= tiempo: break
	x_vals.append(tiempo_prev)
	y_vals.append(0)
```

<https://www.adamsmith.haus/python/answers/how-to-iterate-through-a-range-of-dates-in-python>

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

### sort 2D list

```python
#x = [[10,16],[2,8],[1,6],[7,12]]
sorted(x, key = lambda section: section[1]) # sort by second value
```

### sort dict by value

```python
# x={1: 1, 2: 2, 3: 0}
sorted(x.items(), key=lambda item: item[1])
```

## infinity
```py
float('inf')
```

## ipynb
### convert between ipynb & python
```
pip3 install ipynb-py-convert
```

```
ipynb-py-convert <in.ipynb> <out.py>
```

```
ipynb-py-convert <in.py> <out.ipynb>
```

<https://stackoverflow.com/a/66565946/15493213>

### run ipynb
```
ipython3 -c "% run something.ipynb"
```

## web
- [Django](Django.md)
- [Flask](Flask.md)

## Database interaction
see [SQLAlchemy](SQLAlchemy.md)

## Troubleshooting
### /usr/bin/env: ‘python’: No such file or directory
Assuming you have python3 installed, do
```
sudo ln -s /usr/bin/python3 /usr/bin/python
```
<https://askubuntu.com/a/1235537>