---
layout: meth
parent: Software Development
---

# ffmpeg

## parameters

- scale
	- `scale=iw/2:-2` -> x2
- quality
	- <https://ffmpeg.org/ffmpeg-codecs.html#Options-30>
	- `-quality 75`
		- 0-100

## speedup video

to speed up to x2 (including audio)
```
ffmpeg -i input.mp4 -filter:v "setpts=PTS/2" -an output.mp4
```

omit `-an` to have audio in original speed (so the video duration will not change)

<https://superuser.com/a/1261681>

## Cut video

If we want 5:00 ~ 15:00

```
ffmpeg -i input.mp4 -ss 00:05:00 -t 00:10:00 -c:v copy -c:a copy output.mp4
```

## mp4 to gif

minimalist

```
ffmpeg -i input.mp4 -quality 75 output.gif
```

may have bad results

```
ffmpeg -y -i input.mp4 -filter_complex "fps=10,scale=1080:-1:flags=lanczos,split[s0][s1  
];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=bayer" output.gif
```
<https://superuser.com/a/1695537>

the `split` thing will make it not creating any intermediate files during the process, so it consumes high memory

## mp4 to webp

minimalist
```
ffmpeg -i input.mp4 -quality 75 output.webp
```
may have bad results

lossless

```
ffmpeg -i input.mp4 -vcodec libwebp -filter:v fps=fps=10 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 1080:720 output_filename.webp
```
omit the `-s` flag to use original scale

sample frames to reduce size

```
ffmpeg -i input.mp4 -vf "select=not(mod(n\,6))" -vsync vfr -quality 50 output.webp
```
`select=not(mod(n\,6))` will select frames with index%6 = 0

<https://stackoverflow.com/a/58188923/15493213>

## play

```
ffplay <video_file>
```

## Troubleshooting

### Error when converting animated webp

Error message: 

```
[webp @ 0x7fc94bf4e500] skipping unsupported chunk: ANIM
[webp @ 0x7fc94bf4e500] skipping unsupported chunk: ANMF
    Last message repeated 419 times
[webp @ 0x7fc94bf4e500] image data not found
[webp_pipe @ 0x7fc94ca09300] Could not find codec parameters for stream 0 (Video: webp, none): unspecified size
```

Animated webp can't be decoded currently

**Source**

> You are right. Looking at the code: http://ffmpeg.org/doxygen/trunk/webp_8c_source.html#l01503, ANMF, ANIM etc chunks are just skipped right now. So animated WebP can't be decoded in ffmpeg.

<https://groups.google.com/a/webmproject.org/g/webp-discuss/c/ApPX39IcgyM?pli=1>

> Currently, FFmpeg can encode animated WebPs, but cannot decode them, which is inconvenient for users.

[#4907 open enhancement - Support decoding animated WebP images](https://trac.ffmpeg.org/ticket/4907)