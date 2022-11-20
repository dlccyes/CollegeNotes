# tcpdump

A Linux/Unix tool for sniffing packets

[Guide](https://homepage.ntu.edu.tw/~pollyhuang/teach/net-simtest-spring-08/slides.html)

See your interfaces with `ifconfig`

## flags

> tcpflags are some combination of S (SYN), F (FIN), P (PUSH), R (RST), U (URG), W (ECN CWR), E (ECN-Echo) or . (ACK), or none if no flags are set.

### read

read packets

```
sudo tcpdump -i <interface>
```

read 5 packets
```
sudo tcpdump -i <interface> -c 5
```

read from file
```
sudo tcpdump -r output.tr
```

## write

write output to file
```
sudo tcpdump -i <interface> -c 5 -w output.tr
```

write output to file but limit to 1MB
```
sudo tcpdump -i <interface> -c 5 -w output.tr -w output.tr -C 1
```
over 1MB -> save to output.tr1

## expressions

add expression directly
```
sudo tcpdump -i <interface> ip src or dst host 140.112.42.162
```

use expressions in expression.exp
```
sudo tcpdump -i <interface> -F expression.exp
```

get start & end packets
```
sudo tcpdump -i <interface> 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'
```

get ACK packets
```
sudo tcpdump -i <interface> 'tcp[tcpflags] & (tcp-ack) != 0'
```

examples
```
Expressions:types
tcpdump -r tmp.tr -c 2 host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 net 140.112.154
tcpdump -r tmp.tr -c 2 net 140.112.154.128/25
tcpdump -r tmp.tr -c 2 net 140.112.154.128 mask 255.255.255.128
tcpdump -r tmp.tr -c 2 port 80
tcpdump -r tmp.tr -c 2 port http
tcpdump -r tmp.tr -c 2 port ssh

Expressions:directions
tcpdump -r tmp.tr -c 2 src or dst host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 dst net 140.112.154
tcpdump -r tmp.tr -c 2 dst port 80

Expressions:protocols
tcpdump -r tmp.tr -c 2 ip src or dst host nslab.ee.ntu.edu.tw
tcpdump -r tmp.tr -c 2 arp dst net 140.112.154
tcpdump -r tmp.tr -c 2 tcp dst port 80
tcpdump -r tmp.tr -c 2 udp 
tcpdump -r tmp.tr -c 2 broadcast

Expressions:others
tcpdump -r tmp.tr -c 2 greater 100
tcpdump -r tmp.tr -c 2 less 100

Expressions:operands
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw and tcp 
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw \&\& tcp 
tcpdump -r tmp.tr -c 2 dst host nslab.ee.ntu.edu.tw and \(tcp or udp\)

Expressions:in a separate file
tcpdump -r tmp.tr -c 2 -F test.exp
```

## Troubleshooting

### permission

If you run it in Ubuntu, it might say you don't have permission. Do the followings to fix it

```
grep tcpdump /sys/kernel/security/apparmor/profiles
```

If it said `tcpdump (enforce)`, make it in `complain` mode by

```
aa-complain /usr/sbin/tcpdump
# or aa-complain tcpdump
```

You can install `aa-complain` by 

```
sudo apt install apparmor-utils
```

See <https://blog.karatos.in/a?ID=01100-68ee7a10-9f07-412a-aa93-e67032182326>