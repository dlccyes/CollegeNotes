---
layout: meth
parent: Miscellaneous
---

# Pulse Secure

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

## Mac

If didn't add pulse secure as login items, run this before using it

```
sudo launchctl load -w /Library/LaunchDaemons/net.pulsesecure.AccessService.plist
```

<https://community.pulsesecure.net/t5/Pulse-Connect-Secure/Failed-to-connect-to-the-Pulse-Secure-service-on-Mac/td-p/42370>