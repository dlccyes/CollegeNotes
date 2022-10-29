---
layout: meth
parent: Software Development
---

# Video Streaming

## python cv2

### resources

- <https://blog.gtwang.org/programming/opencv-webcam-video-capture-and-file-write-tutorial/>

### init

```python
import cv2
cap = cv2.VideoCapture(0)
```

### read 1 frame

```
ret, frame = cap.read()
```

Put in a while loop to achieve streaming.

### show a frame

```python
cv2.imshow('frame', frame)
cv2.waitKey(0)
cv2.destroyAllWindows()
cv2.waitKey(1)
```

without `waitkey`, there will only be a window showing nothing

<https://stackoverflow.com/a/54213863/15493213>