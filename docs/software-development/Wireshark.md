# Wireshark

## filter

To filter TCP packets containing the string "ntu" in any field (may be destination or info or any other)

```
tcp contains "ntu"
```

Note that it have to be lower case, and you can't filter on `ip.dst`

> The "contains" operator cannot be used on atomic fields, such as numbers or IP addresses.

