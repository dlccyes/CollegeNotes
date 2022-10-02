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

To see the full details of the packets, you'll have to connect to an unencrypted network.

There are multiple methods of achieving this, sadly not all works.

## With a hotspot created from the Ethernet interface

1. Set up an Ethernet connection on your computer
2. Create a (unencrypted) wifi hotspot
3. Connect your phone (the device you want to sniff traces on) with the hotspot
4. `sudo tcpdump -i <ethernet_interface>`

## With tcpdump -I flag

```
sudo tcpdump -I -i <wireless_interface>
```

However, whether it works or not depends on your device.

If it doesn't work, try the other methods.

## (For Linux) With airmon-ng

### Turn your wireless interface to monitor mode

Check your wireless interface.
```
# install aircrack-ng if haven't
sudo airmon-ng
```

Turn the interface into monitor mode.
```
sudo airmon-ng start <wireless_interface>
```

Check your interface with `ifconfig` or `iwconfig` or `airmon-ng` again, your interface should be named `<wireless_interface>mon` now (appending `mon` to the original name).

### Capture the packets
```
sudo airodump-ng <wireless_interface>mon
```

If the network you want to sniff is from networks with no security, their IPs will be visible for you.

### Show the packets
Now you can sniff the packets flying around you.
```
sudo tcpdump -i <wireless_interface>mon
```

or use Wireshark.

For more usage of tcpdump, see [tcpdump](linux.md#tcpdump)

### Reverse interface back from monitor mode

To reverse the wireless interface back to normal, do
```
sudo airmon-ng stop <wireless_interface>mon
```

Enter `ifconfig`, your interface should have its original name now.

### References
- [airmon-ng doc](https://www.aircrack-ng.org/doku.php?id=airmon-ng)
- [airodump-ng doc](https://www.aircrack-ng.org/doku.php?id=airodump-ng)
- <https://www.oreilly.com/library/view/kali-linux-wireless/9781783554089/>

## (For MacOS) With airport

`airmon-ng` for MacOS

It's built in but not in system binary path so you can symlink it yourself

```
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
```

<https://stackoverflow.com/a/49000390/15493213>

To show the channel each wireless network belongs to

```
sudo airport -s
```

<https://unix.stackexchange.com/a/49317>

Enable monitor mode and sniff (assuming your wireless interface is `en0`). It is very important that you enter the channel number correctly.

```
sudo airport en0 sniff <channel>
```

After you kill it, it will tell you where the file is stored (in `/tmp`)

Open the file with Wireshark or `tcpdump -r <file>` afterwards.

## (For MacOS) With Wireless Diagnostics

Use `sudo airport -s` to know your target channel (check the previous section)

Wireless Diagnostics -> Window -> Sniffer -> Select the target channel -> Start

After you stop, the `.pcap` file will be stored in `/var/tmp/`, now you can open the file with Wireshark or `tcpdump -r <file>`.

<https://ask.wireshark.org/question/17812/how-to-enable-monitor-mode-on-mac/?sort=votes#sort-top>