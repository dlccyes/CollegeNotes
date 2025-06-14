---
layout: meth
parent: Software Development
---

# Python

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

To rebuild, just remove (or rename) it and then rererun.

```
rm -r venv
python3 -m venv venv
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

## Typing

Python can be a pain in the ass work with for bigger scale code due to it being not statistically type, but you can type hint and let your linter like `Pylance` pick it up to imitate static typing.

### Format

```python
var_name: type_name = init_val
```

For example, this Go code

```go
myStr := []string{1,2,3}
```

should be like this in Python

```python
my_str: list[str] = [1, 2, 3]
```

For tuple, you should include the type of each slot. 

e.g. for a len = 3 (integer, float, string) tuple

```python
my_tup: tuple[int, float, str] = (3, 1.35, "4.05")
```

### Type hinting opencv Mat

```python
import numpy as np
import numpy.typing
Mat = numpy.typing.NDArray[np.uint8]
```

## Class

### Inheritance

```python
class Mom():
	def __init__(self):
		self.yes = True

class StepMom():
	def __init__(self):
		self.no = True

class Child(Mom, StepMom):
	def __init__(self):
		# run the __init__ of the parent classes
		super().__init__()
		# now it can access self.yes & self.no
		print(self.yes, self.no)
```

## Unit testing with `unittest`

### Basics

Suppose you want to write unit tests for your functions in `main.py`

`main.py`

```python
def no(query: str) -> bool:
	return False
	
def yes(query: str) -> bool:
	return True
```

Put your unit tests in `test_main.py`

```python
import unittest
from main import no, yes

class TestMain(unittest.TestCase):
	def test_no(self):
		mock_query = "Me das tu movil?"
		expected_ans = False
		actual_ans = no(mock_query)
		self.assertEqual(expected_ans, actual_ans)

	def test_yes(self):
		mock_query = "Are you yo mama?"
		expected_ans = True
		actual_ans = yes(mock_query)
		self.assertEqual(expected_ans, actual_ans)

if __name__ == "__main__":
	unittest.main()
```

Now just run `test_main.py`, and it will tell you the result. If something's wrong, it will show you the diff.

### Mock

You can easily mock a function so you don't have to actually run the function when testing your target function.

`main.py`

```python
def times_two_add_one(num: int) -> int:
	res = times_two(num) + 1
	return res
```

`test_main.py`

```python
import unittest
from unittest.mock import MagicMock
from main import *

class TestMain(unittest.TestCase):
	def test_times_two_add_one(self):
		num = 11
		times_two = MagicMock(return_value=22)
		actual = times_two_add_one(num)
		expected = 23
		self.assertEqual(expected, actual)

		# optional: ensure that the parameter passed into times_two is correct
		times_two = assert_called_with(num)
		# or
		times_two.assert_called_with(num)
```

If you know `GoMock`, this is equal to

```go
num := 11
times_two.EXPECT(num).RETURN(22)
```

The great thing about `MagicMock` is that it does not require you to generate a separate mock file beforehand.

### VsCode Extension

Use [Python Test Explorer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=LittleFoxTeam.vscode-python-test-adapter)

### Coverage

You can see your test coverage stats as well as the lines covered in a web UI!

Install the `coverage` module

```
pip3 install coverage
```

Run the test

```
python3 -m coverage run --source . -m unittest
```

If you don't add the `--source` flag, all imported internal libraries will also be printed.

See the converate in your terminal

```
python3 -m coverage report
```

Generate html files inside `/htmlconv` showing the lines covered

```
python3 -m coverage html
```

Open the html file (for Mac)

```
open htmlcov/index.html
```

example

![[python-1.png]]

You can write these all into a make file

```Makefile
ut:
	python3 -m coverage run --source . -m unittest
	python3 -m coverage report
	python3 -m coverage html  
	open htmlcov/index.html
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

### display Chinese character

Simply add this

```python
matplotlib.rcParams['font.family'] = ['Heiti TC']
```

Replace `Heiti TC` with other fonts if you're not using MacOS.

[ref](https://stackoverflow.com/a/69658444/15493213)

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

For multiple documents combined (with `---` separator, see [this](https://stackoverflow.com/questions/47593695/)):

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

## decode

### decoding utf-8 encoded characters represented in unicode escaped sequence

You can get text like `\u00e5\u0093\u00ad\u00e5\u0093\u00ad` if you use `json.dump()` without `ensure_ascii=False`.

```python
encoded_text = "\u00e5\u0093\u00ad\u00e5\u0093\u00ad"
decoded_text = encoded_text.encode("latin-1").decode('utf-8')
print(decoded_text)
```

output: `哭哭`

[source](https://stackoverflow.com/a/52461149/15493213)

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

## Symbolic Math

Use `sympy`

```
pip3 install sympy
```

### Integral

e.g. to calculate the mean of a hyperexponential distribution

```python
import sympy as sp

t = sp.symbols('t')
f = 1-0.01*sp.exp(-18*t)-0.82*sp.exp(-0.015*t)
mean = sp.integrate((1-f), (t, 0, sp.oo))
print(f"mean = {mean.simplify()}")
```

### Laplace Transform

e.g. calculate laplace transform (t -> s)

```python
import sympy as sp

s, t = sp.symbols('s t')
f1 = 2/12*sp.exp(t/12)
F1 = sp.laplace_transform(f1, t, s)
print(F1)
```

e.g. calculate inverse laplace transform (s -> t)

```python
from sympy.integrals.transforms import inverse_laplace_transform

s, t = sp.symbols('s t')
F = (2/(1-12*s))/((1/(1-12*s))*((1/(3+15*s))+(4/(6+75*s)))-1)
f = inverse_laplace_transform(F, s, t)
print(f)
```

## numpy

### matrix multiplication

use operator `@`

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

## Rounding numbers

To round but keep leading zeros, see <https://stackoverflow.com/a/56776787/15493213>

```python
def fround(num: float, digits: int = 2) -> str:
    regex = r"0[1-9]"
    float_part = str(num).split(".")[1]
    float_limiter = re.search(regex,float_part).start() if float_part.startswith("0") else -1
    rounded = f'{num:2.{float_limiter+1+digits}f}'
    return rounded
```

## Simple web server

```
python3 -m http.server
```

You can also use VsCode's Live Preview plugin.

## Web Framework

- [Django](Django)
- [Flask](Flask)

## Database interaction

see [SQLAlchemy](SQLAlchemy)

## Floating Points

Floating points can only be approximated due to the binary nature of machines, so it's easy to create unexpected results when dealing with floating points.

<https://docs.python.org/3/tutorial/floatingpoint.html>

## Troubleshooting

### /usr/bin/env: ‘python’: No such file or directory

Assuming you have python3 installed, do

```
sudo ln -s /usr/bin/python3 /usr/bin/python
```

<https://askubuntu.com/a/1235537>

### pip install `error: externally-managed-environment`

```
python3 -m pip config set global.break-system-packages true
```

<https://stackoverflow.com/a/75722775>
