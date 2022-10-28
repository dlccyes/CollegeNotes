---
layout: meth
parent: Software Development
---

# git-crypt
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Install

Mac

```
brew install git-crypt
```

## Use symmetric key to encrypt/decrypt

Define files to encrypt in `.gitattributes`. Assume that you want to encrypt all `secret.properties`

```
secret.properties filter=git-crypt diff=git-crypt
```

Init

```
git-crypt init
```

Save the key

```
git-crypt export-key path/to/key
```

That's it! Your secret files defined in `.gitattributes` at local should look the same, but you'll notice that git tells you that those files are actually modified. Now when you commit & push these files, they will be auto encrypted s.t. on Github your secrets won't be in plain text anymore.

If you clone the repo and want to decrypt it, unlock it with the key you saved initially

```
git-crypt unlock path/to/key
```

After doing either `init` or `unlock`, the secrets will also be auto encrypted when you push.

For easier transferring of the key, you can use encode it with base64 and pass the base64 encoded key.

```
base64 path/to/key
```

See [base64](base64)