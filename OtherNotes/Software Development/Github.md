---
layout: meth
parent: Software Development
---

# Github
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## markdown
### embed image based on theme
<https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/>  
append `#gh-light-mode-only` to your image path for light mode  
append `#gh-dark-mode-only` to your image path for dark mode  

e.g.  

```markdown
![GitHub-Mark-Light](https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png#gh-dark-mode-only)
![GitHub-Mark-Dark](https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png#gh-light-mode-only)
```

```markdown
<!-- markdown -->
![light mode only](control-light.png#gh-light-mode-only)
![dark mode only](control-dark.png#gh-dark-mode-only)
<!-- html -->
<p align="center">
    <img src="https://github.com/alwaysmle/Glove-Mouse/blob/main/figure/control-light.png#gh-light-mode-only" width="600">
    <img src="https://github.com/alwaysmle/Glove-Mouse/blob/main/figure/control-dark.png#gh-dark-mode-only" width="600">
    <br>
<p/> 
```

## Github Action

[Github Action](Github%20Action)