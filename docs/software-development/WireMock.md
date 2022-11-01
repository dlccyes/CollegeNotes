# WireMock

Mocking api with self defined responses at localhost

## How to run

1. Download the standalone JAR
	- <https://wiremock.org/docs/running-standalone/>
2. Define your responses (see the sections below)
3. Run it with `java -jar <the_thing_you_just_downloaded.jar>`

Now you can send http requests to it 

### Flags

Append the flags after the command

- `--port`
	- which port to run on
- `--verbose`

## Defining responses

See <https://wiremock.org/docs/running-standalone/#json-file-configuration>

- `mappings`
	- define route -> body mappings
	- can use json files in `__files` as responses
- `__files`
	- define json responses to be referenced by `mappings`

Sample directory structure

```
.
├── __files
│   ├── dir1
│   │   └── dir1-1
│   │       ├── res1.json
│   │       └── res2.json
│   ├── dir2
│   │   ├── res4.json
│   │   └── res5.json
│   └── dir3
│       └── res6.json
├── mappings
│   ├── api1.json
│   └── api2.json
└── wiremock-jre8-standalone-2.31.0.jar
```

`mappings/api1.json`

```json
{
    "mappings": [
        {
            "request": {
                "method": "GET",
                "urlPath": "/route1"
            },
            "response": {
                "status": 200,
                "headers": {
                    "Content-Type": "application/json"
                },
                "bodyFileName": "dir1/dir1-1/res1.json"
            }
        },
        {
            "request": {
                "method": "GET",
                "urlPath": "/route2"
            },
            "response": {
                "status": 200,
                "headers": {
                    "Content-Type": "application/json"
                },
                "bodyFileName": "dir2/res4.json"
            }
        }
    ]
}
```

`dir2/res4.json`

```json
{
    "a": "1",
    "b": "2",
    "c": "3"
}
```