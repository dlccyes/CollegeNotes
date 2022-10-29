---
layout: meth
parent: Software Development
---

# Zsh

## Troubleshooting

### zsh: no matches found

Probably happens when you try to curl with parameters e.g. `curl -X GET https://bruh.com?id=1`

To prevent this, you'll have to escape `?`.

Easiest way is to simply `""` your url -> `curl -X GET "https://bruh.com?id=1"`

<https://www.reddit.com/r/zsh/comments/h9mdvc/>