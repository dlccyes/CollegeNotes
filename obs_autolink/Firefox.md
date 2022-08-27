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

## Smooth pinch to zoom for Linux

In `/etc/profile.d/use-xinput2.sh` (create if don't exist)

```
export MOZ_USE_XINPUT2=1
```
Logout & log back in. Now your you should be able to pinch to zoom in Firefox like you can in Mac & Windows.

To make it more smooth, uncheck `Use smooth scrolling` in Firefox settings.

<https://www.reddit.com/r/linux/comments/72mfv8>

## Troubleshooting

### Please enter the password for the PKCS#11 token PIV_II

If you have yubikey and you encounter this popup telling you to enter some password, go to settings -> Security Devices -> OpenSC smartcard framework -> Unload

Note that you probably have to do this for every new desktop session.

<https://bugzilla.redhat.com/show_bug.cgi?id=1742881#c23>
