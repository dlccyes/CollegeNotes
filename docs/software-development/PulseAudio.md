# PulseAudio

A sound server for [[Linux]]

## PavuControl

GUI for pulseaudio

**Install**

```
sudo apt install pavucontrol
```

### PulseControl

CLI for pulseaudio

```
# list all device
pactl list sinks
# view device volume
pactl get-sink-volume <sink id>
# set device volume
pactl set-sink-volume <sink id>
```

## Commands

Show audio devices

```
pacmd list
```

Set a card to a2dp_sink

```
pacmd set-card-profile <card_name> a2dp_sink
```

e.g. to get the card name of a bluetooth headphone

```
pacmd list | grep bluez_card
```

Restart pulseaudio process

```
systemctl --user restart pulseaudio
```

Kill pulseaudio process

```
pulseaudio -k
```

Start pulseaudio process

```
pulseaudio --start
```

## Troubleshooting

### General

Something's wrong e.g. no input device detected

```
rm  ~/.config/pulse/*
pulseaudio -k
pulseaudio --start
```

<https://askubuntu.com/a/882222>

### Failure: Module initialization failed

` Failure: Module initialization failed` when running 

```
sudo pactl load-module module-bluetooth-discover
```

**Solution**

```
sudo apt install bluetooth pulseaudio-module-bluetooth
```

<https://askubuntu.com/a/1121417>

### Video conferencing app can't use microphone

First, check if your microphone is functioning (e.g. check it in the input devices in pavucontrol). If it is indeed functioning, you probably restarted pulseaudio **after** your app / browser was started. In this case, your microphone can't be used by them.

**Solution**

Kill your app / browser and start again

See <https://bbs.archlinux.org/viewtopic.php?pid=1907275#p1907275>