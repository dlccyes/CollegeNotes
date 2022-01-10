# python

## create requirements.txt
- for every libraries you have
	- `python -m pip freeze > requirements.txt`
- for a specific directory
	- `pipreqs /path/to/project`
	- https://stackoverflow.com/a/31684470/15493213

## exec
to use in function, use `exec(string, globals())`

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

## convert
### str to json
```py
import json
json.loads(str)
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