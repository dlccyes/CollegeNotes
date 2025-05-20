# CS519 Scientific Visualization

## color

### color space

- RGB for emissive display (light source)
    - RGBA with alpha channel indicating the opacity
    - reflect white light off a blue surface: $(1, 1, 1)\times (0, 0, 1)=(0, 0, 1)$
- CMY (cyan, magenta, yellow) for reflective display
    - red paint absorbs 1-R, reflecting R
    - cyan paint absorbs R, reflecting 1-R
- CMY  = inverse of RGB: (C, M, Y) = (1-R, 1-G, 1-B)
- intensity
    - 8-bit in LCD
    - should keep 32-bit in application code
- HSV (hue, saturation, value)
    - saturation: distance from grey
    - value: distance from black
    - ![[cs519-hsv.png]]
    - ![[cs519-rgb-to-h.png]]
    - $S=\dfrac{\max(R, G, B) - \min(R, G, B)}{\max(R, G, B)}$
    - $V=\max(R, G, B)$

### human cone cell

We have L (long wavelength), M, and S cones in our eyes, each sensitive to different ranges of wavelengths

![[cs519-lms-cone.png]]

We have 63% L, 31% M, 6% S, so the overall luminosity function $V(\lambda)$ is the highest at 555nm (green-yellow)

white light:

![[cs519-light-distro.png]]

Different distributions producing the same color (stimulus) are "metamers"

### forming color space

we need to choose 3 "primary" wavelengths to be mixed at different intensities into all kind of human perceived colors

- CIE RGB color space
    - use R 700nm, G 546.1nm, B 435.8nm to produce any human visible color
    - needs negative values for some wavelengths
        - if 500nm = -0.1 R, 0.2 G, 0.3 B, it means during the experiment they match 500nm + 0.1R with 0.2 G + 0.3 B
    - ![[cs519-cie-rgb.png]]
- CIE XYZ
    - do a transformation from RGB
        - ![[cs519-rgb-to-xyz.png]]
    - $\bar{y}(\lambda)$ is very close to the luminosity function $V(\lambda)$ i.e. perceived brightness
    - ![[cs519-cie-xyz.png]]
- xyY
    - x & y for chromaticity (hue), Y for luminosity
    - transformed from XYZ
        - $x=\dfrac{X}{X+Y+Z}$, $y=\dfrac{Y}{X+Y+Z}$
- CIE xy Chromaticity Diagram
    - all visible colors for human
    - curved boundary = spectral locus, all colors of a single wavelength
        - points not on spectral locus need to be mixed with multiple wavelengths
    - ![[cs519-xy-chrom-diagram.png]]
    - white: $(\dfrac{1}{3}, \dfrac{1}{3})$
- sRGB
    - sRGB is the triangle, which is only a subset of human visible colors
    - no space defined by 3 primary colors (wavenlengths) can include all colors
        - CIE RGB has negative values
    - sRGB defines daylight $(0.3127, 0.2390)$ as white, which isn't perfect white
    - 8-bit sRGB includes $2^24$ = 16M colors, but human eye can only distinguish between 10M colors, so sRGB color space can represent a greater number of colors than humans can perceive, but not all colors people can perceive.
        - sRGB is finer grained than human eyes in the triangle
    - XYZ to sRGB
        - $(x_R, y_R)=(0.64, 0.33)$
        - $(x_G, y_G)=(0.3, 0.6)$
        - $(x_B, y_B)=(0.15, 0.06)$
        - $Y_R=0.212630$
        - $Y_G=0.715169$
        - $Y_B=0.072192$
        - ![[cs519-xyz-srgb.png]]
        - ![[cs519-srgb-m-inv.png]]
        - XYZ = $M_{\text{sRGB}}^{-1}$ sRGB

### gamme correction

originally, $V_{\text{display}}=V_{\text{signal}}^\gamma$

- typically $\gamma=2.2$, varied by display
- $0\leq V\leq 1$, so $V_{\text{display}}<V_{\text{signal}}$

So we do gamma correction on the signal first, making it $V_{\text{signal}}^\frac{1}{\gamma}$, s.t. the display would be $V_{\text{signal}}$

When saving an image, the gamma correction would be auto applied