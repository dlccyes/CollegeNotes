# RESTful

## Resources

- [Best Practices for Designing a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [REST API Tutorial](https://restfulapi.net/)

## Methods

- `GET`
- `CREATE`
	- should have the created data in the response body
- `PUT`
	- overwrite a resource
	- should have the whole updated data in the response body
- `PATCH`
	- partially update a resource
	- only needs relevant parts in the request body
- `DELETE`
	- no need response body

### Idempotency

If you execute X 1 time vs. execute it 5 times, the results are the same, then X is idempotent.

`GET`, `PUT`, and `DELETE` are idempotent.

## Routes

See 

- [How to Design a REST API | REST API Tutorial](https://restfulapi.net/rest-api-design-tutorial-with-example/)
- [REST Resource Naming Guide | REST API Tutorial](https://restfulapi.net/resource-naming)

Always use plural, even if you're only interacting with a single resource

- `GET /reports` -> get a list of reports
- `GET /reports/12` -> get the report 12

If you want to get a resource belonging to another

- `GET /reports/12/subreports` -> get a list of subreports belonging to report 12
- `GET /reports/12/subreports/42` -> get subreport 42 of report 12

### Trailing slash

[Why trailing slashes on URIs are important | cdivilly](https://cdivilly.wordpress.com/2014/03/11/why-trailing-slashes-on-uris-are-important/)

Every non-leaf resource should have a trailing slash, because when you're at `/parent`, going to a relative link `child` will lead you to `/child`, but `/parent/child` if you're at `/parent/`.

## Status Codes

See [this section in the RC7231 standard](https://www.rfc-editor.org/rfc/rfc7231#section-6)

### Success

- `200 OK`
	- generic
- `201 Created`
	- created
	- `CREATE`
- `204 No Content` 
	- for requests that don't need response body
	- `DELETE`

### Error

- 4xx -> client issues
	- `400 Bad Request`
		- request can't be parsed
- 5xx -> server issues

## Response

### Envelope

A type of response with the actual response data inside a key 

e.g.

```json
{
  "data" : {
    "id" : 123,
    "name" : "John"
  }
}
```

You can include pagination information or other metadatas with this kind of response

### HATEOAS

"Hypermedia as the Engine of Application State"

A type of response that includes the resource links for all the subresources

e.g. (from ChatGPT)

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "description": "A great product",
      "price": 19.99,
      "links": [
        {
          "rel": "self",
          "href": "https://api.example.com/products/1"
        },
        {
          "rel": "add-to-cart",
          "href": "https://api.example.com/cart",
          "method": "POST"
        }
      ]
    },
    {
      "id": 2,
      "name": "Product B",
      "description": "Another great product",
      "price": 29.99,
      "links": [
        {
          "rel": "self",
          "href": "https://api.example.com/products/2"
        },
        {
          "rel": "add-to-cart",
          "href": "https://api.example.com/cart",
          "method": "POST"
        }
      ]
    }
  ]
}
```

## Security

[API Security Checklist](https://github.com/shieldfy/API-Security-Checklist)

