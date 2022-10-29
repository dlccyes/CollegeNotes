---
layout: meth
parent: Operating Systems
---
# Operating Systems MP

Machine problems (assignments) of Operating Systems

## MP0
recursive

```
DFS(dir)
	print dir
	if dir is not a directory
		return
	for sub_dir in dir 
		DFS(sub_dir)
```

`man readdir`
```
struct dirent {
    ino_t          d_ino;       /* inode number */
    off_t          d_off;       /* offset to the next dirent */
    unsigned short d_reclen;    /* length of this record */
    unsigned char  d_type;      /* type of file; not supported
                                   by all file system types */
    char           d_name[256]; /* filename */
};
```
run it at the root of your local dev directory
```
docker run -it -v $(pwd)/xv6:/home/os_mp0/xv6 ntuos/mp0
```

### QEMU
- `ctrl-p` to print info for each process
- `ctrl-a x` quit QEMU

### processes
-  fork
	- <https://www.geeksforgeeks.org/fork-system-call/>
	- <https://www.geeksforgeeks.org/fork-and-binary-tree/>

