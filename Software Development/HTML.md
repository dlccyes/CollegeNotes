---
layout: meth
parent: Software Development
---
# HTML
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## make all links open in new tab
```html
<base target="_blank">.
```

## language handling
```html
<head>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>

<body>
  <button id="switch-lang">Switch Language</button>
  <h1><span lang="en">Hello</span> <span lang="es">Hola</span></h1>
  <p lang="en">I really enjoy coding.</p>
  <p lang="es">Me gusta mucho la codificación.</p>
</body>
<script>
  $('[lang="es"]').hide(); // default to English

  $('#switch-lang').click(function() {
    $('[lang="es"]').toggle(); // toggle Spanish visibility
    $('[lang="en"]').toggle();  // toggle English visibility
  });
</script>
```
<https://stackoverflow.com/a/43033380/15493213>