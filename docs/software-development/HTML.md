---
layout: meth
parent: Software Development
---
# HTML

## Make all links open in new tab

```html
<base target="_blank">.
```

## Language handling

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

## Include another html file

You can't, but you can with jQuery

```html
<html>
	<div id="my-div"></div>
</html>
<script>
	$("#my-div").load("my-html.html")
</script>
```

