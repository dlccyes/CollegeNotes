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

## pip

to upgrade all python packages, use `pip-review`

```
pip3 install pip-review
```

```
pip-review --local --auto
```

<https://stackoverflow.com/a/16269635/15493213>

### remove package

```
pip3 uninstall <package>
```

## requirements.txt

### create

for every libraries you have

```
python -m pip freeze > requirements.txt
```

Use `pipreqs` for a specific directory

Install

```
pip3 install pipreqs
```

Use

```
pipreqs /path/to/project
```

If the command is not found, add python package path to your path

```
export PATH=$PATH:~/.local/bin
```

<https://github.com/bndr/pipreqs/issues/69#issuecomment-298758892>

If still not found, run with python instead

```
python3 -m pipreqs.pipreqs
```

<https://stackoverflow.com/a/68965523/15493213>

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

### import from subdirectory

Assuming

```
- main.py
- aa
	- aaa.py
```

To import function `haha()` from `aaa.py` in `main.py`

```python
from aa.aaa import haha
```

### import from parent

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

## `__name__`

When imported, `__name__` will be the module's name. When executed directly, `__name__` will be `__main__`.

## working directory

### show current directory

`ls`

```python
import os
os.getcwd()
```

### change directory

`cd`

```python
import os
os.chdir("<path>")
```

## random

### seed

You can give a seed for reproduceable results before each random function.

e.g.

```python
import random
random.seed(1)
random.random() # -> 0.13436424411240122
random.random() # -> 0.8474337369372327
random.seed(1)
random.random() # -> 0.13436424411240122
```

### shuffle

shuffle a list, in place

```python
import random
a = [1,2,3,4,5]
random.shuffle(a)
```

## Hashing

```python
from hashlib import sha256
def get_hash(plain: str) -> str:
	plain = '123456'
	plain = plain.encode()
	S = sha256()
	S.update(plain)
	return S.hexdigest()



```

## matplotlib

### Auto adjsut your figure layout

`plt.tight_layout()`

Add this if your text is cutoff or whatever.

### save figure

```python
plt.savefig(f'{fig_name}.pdf', format='pdf', dpi=300)

```

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

### style

```python
plt.plot(<x_data>, <y_data>, marker='o', markersize=5, linestyle='None')
```

### legend

```python
plt.plot(<x_data>, <y_data>, label="line1")
plt.plot(<x_data>, <y_data>, label="line2")
plt.legend()
plt.show()
```

### gridline

`plt.grid()` to enable gridline

### axis label

```python
import matplotlib.pyplot as plt
plt.xlabel("x axis")
plt.ylabel("y axis")
plt.title("title")

# or
_, ax = plt.subplot()
ax.set_xlabel("x axis")
ax.set_ylabel("y axis")
ax.set_title("title")
```

### axis min max value

Omit -> auto

```python
plt.xlim(left=0, right=100) 
plt.ylim(bottom=0, top=100)
plt.tight_layout() # you may need this
```

<https://stackoverflow.com/a/32634026/15493213>

### axis interval

y axis 20 intervals

```python
import matplotlib.pyplot as plt
ax = plt.gca()
y_min, y_max = [int(i) for i in ax.get_ylim()]
plt.yticks(range(y_min, y_max, (y_max-y_min)//20))
plt.ylim([0, y_max])
```

### hide axis
```python
import matplotlib.pyplot as plt
plt.gca().get_xaxis().set_visible(False)
```

#### log scale

```python
plt.yscale('symlog')
```

Works for both positives & negatives.

<https://stackoverflow.com/a/43372699/15493213>

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

## exec
to use in function, use `exec(string, globals())`

## inputs
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

## file

### read file

```python
with open(inputfile, 'r') as file_in:
    matrix = file_in.readlines()
```

### Read file to dict/json

```python
import json
mydict = json.load(open("myjson.json"))
```

### Save dict/json to file

```python
import json
mydict = [1:1, 2:2]
save
json.dump(mydict, open("myjson.json", "w"))
```

## yaml

### load

For single document:

```python
import yaml
with open('deployment.yaml', 'r') as f:
    deploy = yaml.safe_load(f)
```

For multiple document combined (with `---` seperator, see [this](https://stackoverflow.com/questions/47593695/)):

```python
import yaml
with open('deployment.yaml', 'r') as f:
    deploy = list(yaml.safe_load_all(f))
```

### dump

`sort_keys=False` to preserve insertion order ([related Github issue](https://github.com/yaml/pyyaml/issues/110#issuecomment-500921155))

single document

```python
import yaml
deployment_yml = dict()
with open('deployment.yaml', 'w') as f:
    yaml.dump(deployment_yml, f, sort_keys=False)
```

multiple document

```python
import yaml
deployment_yml = list() # list of dicts
with open('deployment.yaml', 'w') as f:
    yaml.dump_all(deployment_yml, f, sort_keys=False)
```

### block literals

block literals is multi-line string

e.g.

```yaml
  - |
    kind: JoinConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "name=edge1"
```
To create a yml containing this:

```python
import yaml

class folded_unicode(str): pass
class literal_unicode(str): pass

def folded_unicode_representer(dumper, data):
    return dumper.represent_scalar(u'tag:yaml.org,2002:str', data, style='>')
def literal_unicode_representer(dumper, data):
    return dumper.represent_scalar(u'tag:yaml.org,2002:str', data, style='|')

data = {'literal': literal_unicode(
		'kind: JoinConfiguration\n'
		'nodeRegistration:\n'
		'  kubeletExtraArgs:\n'
		'    node-labels: "name=edge"\n'
}
yaml.dump(data)
```

<https://stackoverflow.com/a/7445560/15493213>

## encode
### encode to base 64

```python
cred = f'{clientID}:{clientSecret}'
b64_cred = base64.b64encode(cred.encode('ascii')).decode('ascii')
```

## trace exceptions

```python
import traceback
try:
	# something
except:
	print(traceback.format_exc())
```

## string

### split

```python
import re
old = 'I am, not, you! Fuck!'
new = re.split('[,\s!]', old)
new = re.split(', | |!')
```
- use `|` to separate symbols
- use `[]` to use each symbol in the bracket

## convert
### str to json
```python
import json
json.loads(str)
```

## datetime
```python
from datetime import datetime
```

### datetime to string
convert date & time now to iso format string
```python
datetime.now().isoformat()
```

convert to custom format string
```python
datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
```

### string to datetime

convert iso format string to datetime object
```python
datetime.fromisoformat(str)
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
```python
datetime.timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)
```

```python
from datetime import timedelta
```

subtract 2 datetime objects to get a timedelta object

example
```python
haha = datetime.timedelta(days=1, seconds=20, microseconds=610333)
haha.days # -> 1
haha.seconds # -> 20
haha.microseconds # -> 610333
```
to get total passed time
```python
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

## Heap / Priority Queue

Use `heapq` for min heap.

Transform, push, and pop

```python
import heapq
mylist = [1,2,3,4,5]
# transform into heap
heapq.heapify(mylist)
# push into heap
heapq.heappush(mylist, (5, 'label 5'))
# pop from heap
res = heapq.heappop(mylist)
```

K Smallest/Largest

```python
import heapq
mylist = [(1,2),(2,3),(1,3),(4,-2)]
# return a list of k smallest with custom comparison formula
res = heapq.nsmallest(5, mylist, key = lambda x: x[0]+x[1])
res = heapq.nlargest(5, mylist, key = lambda x: x[0]+x[1])
```

## collections

- `import collections`

### OrderedDict
- remember the insertion order
- great for implementing LRU, see [Leetcode 146. LRU Cache](https://leetcode.com/problems/lru-cache/)

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

## numpy

### save np array to csv

```
np.savetxt('<path/to.file>.csv', <2d np array>, delimiter=',', fmt='%i')
```

`fmt='%i'` for saving into all integer

## pandas

### Save 2d array to csv

```python
import pandas as pd
arr = [["a", "b", "c"], [1,2,3], [3,4,5]]
pd.DataFrame(arr).to_csv(output.csv, index=False, header=False)
```

<https://stackoverflow.com/a/41096943/15493213>

### get column names

```python
import pandas as pd
f = pd.read_csv("<your_file>.csv")
cols = f.columns.tolist()
```

### merge csv files

Left join f2 to f1

```python
import pandas as pd
f1 = pd.read_csv('filename1.csv')
f2 = pd.read_csv('filename2.csv')
f = f1.merge(f2, how='left', on='MergeCol')
```

<https://stackoverflow.com/a/42583953/15493213>

## ipynb notebook
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

## environmental variables

Use python-dotenv.

Intall

```
pip3 install python-dotenv
```

Usage

```
# .env
PASSWORD=admin
```

```python
from dotenv import load_dotenv
import os
load_dotenv() # load .env
password = os.getenv('PASSWORD')
```

## dealing with URL

use `urllib`

### convert dict to query string

use `urllib.parse.urlencode`

```python
import urllib.parse

qjson = {'id': 1, 'medium': 'reddit'}
query = urllib.parse.urlencode(qjson)
```

## requests

```
pip3 install requests
```

### post

```python
import requests
import json
data = dict()
request.post(<url>, data=json.dumps(data))
```

### response

```python
import requests
import
res = request.post(<url>, <data>)
status_code = res.status_code
res_body = json.loads(res.text)
```

## Simple web server

```
python3 -m http.server
```

## Web Framework

- [Django](Django)
- [Flask](Flask)

## Database interaction

see [SQLAlchemy](SQLAlchemy)

## Troubleshooting

### /usr/bin/env: ‘python’: No such file or directory

Assuming you have python3 installed, do
```
sudo ln -s /usr/bin/python3 /usr/bin/python
```
<https://askubuntu.com/a/1235537>