---
layout: meth
parent: OtherNotes
---

# Firefox
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Troubleshooting

### Please enter the password for the PKCS#11 token PIV_II

If you have yubikey and you encounter this popup telling you to enter some password, go to settings -> Security Devices -> OpenSC smartcard framework -> Unload

<https://bugzilla.redhat.com/show_bug.cgi?id=1742881#c23>