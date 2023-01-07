---
layout: meth
parent: Software Development
---

# Android

## File System

User files are in `/storage/emulated/0`

## Adb

To use `adb grant pm xxx` on your Android phone without permission errors 

1. settings -> about phone -> build number -> tap multiple times until it says "you're now a dev"
2. settings -> developer options
	1. Scroll to the bottom & toggle `Disable permission monitoring`
	2. Enable USB debugging
3. Force stop the app you want to grant permission to
4. Connect your phone to your computer with USB
5. Install Adb on the computer
	- [How to install ADB on Windows, macOS, and Linux | XDA](https://www.xda-developers.com/install-adb-windows-macos-linux/)
6. Run the command

<https://forum.xda-developers.com/t/unable-to-grant-permissions-using-adb.3812658/page-2>

## Termux

Terminal emulator for Android

### Download

1. Download & install [F-Droid](https://f-droid.org/)
2. Download & install [Termux in F-Droid](https://f-droid.org/en/packages/com.termux/)

The Termux in Google Play is outdated and problematic

### Change Font

Use <https://github.com/adi1090x/termux-style>

```
git clone https://github.com/adi1090x/termux-style
cd termux-style
./install
termux-style
```

### Accessing user files

<https://android.stackexchange.com/questions/166538/>

In `~/storage`, there are symlinks to `/storage/emulated/0`, the main directory for your files

## Navigation Gestures

### Revert to original Oneplus Gestures

**Works in Android 11**

1. Install [SetEdit in Google Play](https://github.com/adi1090x/termux-style)
2. Set `"op_gesture_button_side_enabled"` to 0

Gestures before:

- bottom swipe: home
- left & right swipe: back
- bottom left & right swipe: google assistant

Gestures after

- bottom swipe: home
- bottom left & right half swipe: back
- bottom left & right swipe: google assistant
