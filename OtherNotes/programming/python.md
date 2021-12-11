# python

## create requirements.txt
- for every libraries you have
	- `python -m pip freeze > requirements.txt`
- for a specific directory
	- `pipreq /path/to/project`
	- https://stackoverflow.com/a/31684470/15493213

## exec
to use in function, use `exec(string, globals())`

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

## convert
### str to json
```py
import json
json.loads(str)
```