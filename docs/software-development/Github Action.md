---
layout: meth
parent: Software Development
---

# Github Action

Create your workflow yml file under `.github/workflow`. The file name would be the name of the workflow.

## Comparison with Gitlab

- Github Action = Gitlab CICD
- Github workflow = Gitlab pipeline

## Running Environment

- `runs-on` specifies VM type
- `container` specify docker image

## Trigger condition

run on push to master when the file/dir in the included paths are changed 

- use `!` to exclude
- use `**` for wildcard

```yml
on:
  push:
    branches: [ master ]
    paths:
      - '**.py'
      - 'vue/**'
      - '.github/**'
      - 'static/**'
      - 'templates/**'
      - '.gitignore'
      - '!jetson-nano/**'
```

## Access your repo

Use [checkout](https://github.com/actions/checkout)

```yaml
jobs:
  myjob:
    steps:
      - uses: actions/checkout@v3
```

## Cache

[doc](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)

To make a directory or file accessible across jobs and workflows, you can use cache.

The codes for storing & retrieving cache are the same. When the provided key doesn't hit anything, it will store the file/dir in the provided path into the cache with the provided key. Next time when you use the key and hit the cache, it will store the file/dir in the cache to the provided path.

e.g.

```yml
      - name: Cache vue/dist
        id: cache-vue-dist
        uses: actions/cache@v3
        with:
          path: vue/dist
          key: vue-dist-${{ github.sha }}
```

Note that when the cache can't be deleted by user ([corresponding issue](https://github.com/actions/cache/issues/2)), so if your cache should be different across commits, you can append `${{ github.sha }}` to your key.

## change directory for a job

You can change a job's root directory. (It doesn't work for cache tho.)

```yml
    defaults:
      run:
        working-directory: ./vue
```

## dependency

job1 -> job2

```
job2:
  needs: <job1>
```

## Troubleshooting

### Warning: getCacheEntry failed: Cache service responded with 503

Probably just a temporary error.