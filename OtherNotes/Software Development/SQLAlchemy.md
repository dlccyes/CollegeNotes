---
layout: meth
parent: Software Development
---
# SQLAlchemy
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

easy database interaction and migration for [Python](Python)

## SQLAlchemy
You can use its own ORM or directly use SQL queries to interact with database with SQLAlchemy.

```
pip3 install sqlalchemy psycopg2-binary
```
<https://stackoverflow.com/a/49812755/15493213>

### create a table
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

## Alembic
database migration tool

it uses [sqlalchemy](#sqlalchemy) underneath

```
pip3 install alembic
```

<https://medium.com/@acer1832a/32d949f7f2c6>

### initialization
```
alembic init <alembic_dir>
```

go to `alembic.ini` and edit `sqlalchemy.url `
to be your database url (need to start with `postgresql://` for postgre)

edit `script_location` if you ever change the name of `alembic_dir`

### manually create migration
```
alembic revision -m <migration name>
```
would be under `<alembic_dir>/versions`

### auto generating migration
#### init
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

#### generate migration file
after changing your model, run
```
alembic revision --autogenerate -m <migration name>
```
to auto generate migration file

### run migration
in project root
```
alembic upgrade head
```
equivalent to `php artisan migrate`

or
```
alembic upgdrade <id>
```

### rollback
```
alembic downgrade -1
```
like `git reset HEAD~1`

```
alembic downgrade <id>
```
like `git reset <id>`

### migration log
git log bit doesn't show where you're at
```
alembic history
```

show the id you're at
```
alembic current
```