---
layout: meth
parent: Software Development
---
# Sniffing Packets from Wireless Networks
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## Turn your wireless interface to monitor mode
Check your wireless interface.
```
# install aircrack-ng if haven't
sudo airmon-ng
```

Assuming the interface is called `wlo1`.

Turn the interface into monitor mode.
```
sudo airmon-ng start wlo1
```

Check your interface with `ifconfig` or `iwconfig` or `airmon-ng` again, your interface should be named `wlo1mon` now (appending `mon` to the original name).

## Capture the packets
```
sudo airodump-ng wlo1mon
```

If the network you want to sniff is from networks with no security, their IPs will be visible for you.

## Show the packets
Now you can sniff the packets flying around you.
```
sudo tcpdump -i wlo1mon
```

or use Wireshark.

For more usage of tcpdump, see [tcpdump](linux.md#tcpdump)

## Reverse interface back from monitor mode
To reverse the wireless interface back to normal, do
```
sudo airmon-ng stop wlo1mon
```

## References
- [airmon-ng doc](https://www.aircrack-ng.org/doku.php?id=airmon-ng)
- [airodump-ng doc](https://www.aircrack-ng.org/doku.php?id=airodump-ng)
- <https://www.oreilly.com/library/view/kali-linux-wireless/9781783554089/>