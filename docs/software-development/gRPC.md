---
layout: meth
parent: Software Development
---

# gRPC

## BloomRPC

Postman for grpc 

### Import Paths

If your protos depend on each other, then you'll have to add the path to let it know where to look for the files.

e.g.

- `project_root`
	- `common`
		- `common.proto`
	- `myapp`
		- `myapp.proto`

```proto
// myapp.proto
import common/common.proto
```

Then you'll have to add the absolute path of `project_root` to "import paths"

<https://github.com/bloomrpc/bloomrpc/issues/102#issuecomment-515361276>

### Usage

1. Add your paths with "Import Paths" if needed
2. Import your proto files
3. Click on the specific proto you want to test
4. Edit your request in the editor
5. Press the play button to get a response