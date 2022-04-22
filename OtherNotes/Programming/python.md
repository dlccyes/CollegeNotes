# python
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
```
python3 -m venv venv
# echo venv/ >> .gitignore
source venv/bin/activate
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

## Database interaction
### sqlalchemy
```
pip3 install sqlalchemy psycopg2-binary
```
<https://stackoverflow.com/a/49812755/15493213>

#### create a table
please use [alembic](#alembic) to do migration

creating a table example
```py
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey

DATABASE_URL = "postgresql://something"

engine = create_engine(DATABASE_URL)
metadata = MetaData()
users = Table('users', metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String),
    Column('fullname', String),
)
addresses = Table('addresses', metadata,
    Column('id', Integer, primary_key=True),
    Column('user_id', None, ForeignKey('users.id')),
    Column('email_address', String, nullable=False)
)
metadata.create_all(engine)
```
<https://medium.com/@kevinwei30/d965ca20de59>

notice the database url need to start with `postgresql` but not `postgres`  
<https://stackoverflow.com/a/64698899/15493213>

tip: use `yourstr.replace()`  
<https://help.heroku.com/ZKNTJQSK/>

### alembic
database migration tool

it uses [sqlalchemy](#sqlalchemy) underneath

```
pip3 install alembic
```

<https://medium.com/@acer1832a/32d949f7f2c6>

#### initialization
```
alembic init <alembic_dir>
```

go to `alembic.ini` and edit `sqlalchemy.url `
to be your database url (need to start with `postgresql://` for postgre)

edit `script_location` if you ever change the name of `alembic_dir`

#### manually create migration
```
alembic revision -m <migration name>
```
would be under `<alembic_dir>/versions`

#### auto generating migration
##### init
declare your model in a py file in project root  
<https://docs.sqlalchemy.org/en/13/orm/extensions/declarative/basic_use.html>

modify `env.py` to suit your need

e.g.

`chat_table.py` at project root
```py
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class chat_t(Base):
    __tablename__ = 'chat_t'
    id = Column(Integer, primary_key=True)
    identity = Column(String(50))
    username =  Column(String(50))
    msg_count = Column(Integer)
    last_msg_time = Column(String(50))
```

in `env.py` in alembic directory, add this
```py
from chat_table import chat_t
target_metadata = chat_t.metadata
```

to detect column type change, add `compare_type=True` in `env.py` -> `run_migrations_online()` -> `context.configure`

e.g.
```py
with connectable.connect() as connection:
	context.configure(
		connection=connection, 
		target_metadata=target_metadata,
		compare_type=True
	)
```

##### generate migration file
after changing your model, run
```
alembic revision --autogenerate -m <migration name>
```
to auto generate migration file

#### run migration
in project root
```
alembic upgrade head
```
equivalent to `php artisan migrate`

or
```
alembic upgdrade <id>
```

#### rollback
```
alembic downgrade -1
```
like `git reset HEAD~1`

```
alembic downgrade <id>
```
like `git reset <id>`

#### migration log
git log bit doesn't show where you're at
```
alembic history
```

show the id you're at
```
alembic current
```