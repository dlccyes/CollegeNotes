---
layout: meth
parent: Miscellaneous
---

# Pulse Secure
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Arch

You can use `pulse-secure` AUR package but it doesn't work for me.

<https://aur.archlinux.org/packages/pulse-secure>

```
yay -S pulse-secure
sudo systemctl enable pulsesecure
sudo systemctl start pulsesecure
```

Instead, you can use `openconnect` AUR package.

<https://archlinux.org/packages/extra/x86_64/openconnect/>

```
yay -S openconnect
sudo openconnect --protocol=pulse https://sslvpn.ntu.edu.tw/
```

See <https://wiki.archlinux.org/title/Pulse_Connect_Secure>.