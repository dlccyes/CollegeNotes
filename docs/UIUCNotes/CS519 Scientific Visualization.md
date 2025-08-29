# CS519 Scientific Visualization


![[cs519-glyph-facts.png]]

![[cs519-usingglyphs.png]]

![[cs519-q11.1.png]]

![[cs519-q11.3.png]]

![[cs519-q11.4.png]]

![[cs519-q12.2.png]]

![[cs519-q12.3.png]]

![[cs519-q12.4.png]]


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

## computer graphics

- surface is modeled in triangles

### rendering

- rasterization
    - project to 2D plane
    - fast
    - raster: a grid of pixel values
    - done on GPU
        - vector shader
            - convert coordinates
        - fragment shader
            - color
- ray tracing
    - follow ray of light bouncing off surface -> can capture global illumination effect
    - slow
    - can do semi-transparent rendering
- ![[cs519-rendering.png]]

### shading

- real light source is too complex to model
- simple light source
    - point source
    - directional source
    - ambient light
        - same light level everywhere
- reflection
    - phong reflection
        - simple and fast
        - ![[cs519-phone.png]]
        - specular reflection
        - diffuse reflection
            - scatter equally in all directions
        - ambient
            - equal light everywhere, no attenuation
        - attenuation $\dfrac{1}{ad^2+bd+c}$
            - $d$ = distance
            - a, b, c are constants
    - Blinn-Phong Reflection
        - replace $(V\cdot R)^a$ with $(N\cdot H)^b$ 
            - halfway vector $H=\dfrac{L+V}{||L+V||}$
        - more efficient (less operations)
        - closer to real lighting
        - ![[cs519-bling-p4.png]]
- shading
    - gouraud shading
        - compute shade at each vertex
    - phong shading
        - compute shade at each fragment
        - more computation
    - ![[cs519-shading.png]]

## Interpolation

### Bilinear Interpolation

interpolation for $z = f(x, y)$ using 4 data points forming a rectangle

1. cast the target point on 2 sides of the rectangle
2. Do interpolation to calculate the value of the 2 points
3. Do interpolation with the 2 points

![[cs519-bil.png]]

### Barycentric Interpolation

Interpolate a point using 3 points forming a triangle

![[cs519-bary1.png]]

![[cs519-bary.png]]

### RBF Interpolation

![[cs519-radio-b.png]]

![[cs519-rbf.png]]

## Terrain

- Euler characteristics: $V-E+F=2(1+G)$
    - V = number of vertices
    - E = number of edges
    - F = number of faces
    - G = genus = number of holes in the surface
- triangle mesh
    - $E\approx 3V$
    - $F\approx 2V$
        - $V-E+F=2=V-0.5F$
    - average valence = average num of edge a node is connected to = 6
        - each edge connects to 2 nodes -> average valence = 2E/V = 6
- curvilinear: each point has `(x, y, z)`
- digital elevation model (DEM)
    - raster data set
    - rectangular grid of elevations arranged by col and row
    - is: raster, uniform, surface
    - not: volume, curvilinear, polygonal, unstructured, rectilinear
- Delaunay triangulation: no vertex is inside any circle
- triangulated irregular networks (TIN)
    - irregular = unstructured
    - ![[cs519-q4.4.png]]

## Contour

### marching cubes

- isosurface: points with the same value form a surface
    - $f(x, y, z)=C$
- internal ambiguity: an isosurface splitting the cube into 2
    - e.g. here the 2 pyramids are separated from the other parts of the cube
        - ![[cs519-internal-amb-mc.png]]
- face ambiguity: an isosurface cuts through a face of the cube
- ![[cs519-mc-q.png]]

### marching tetrahedra

- tetrahedron = pyramid
- $2^4=16$ possible cell configurations
    - each point can be in or out of the isosurface
- 5 rotationally unique cell configurations
    - 1 case for 0 - 5 points inside the isosurface each
- no ambiguity
- cons compared to marching cubes
    - generate more triangles
    - less scalable
- cube tetrahedralization: apply marching tetrahedra to cubes
    - 5-6 tetrahedra per cube

### dual marching squares

- isosurface vertex = the middle point between the 2 points the isosurface intersect with the square edge
    - ![[cs519-dms-cal.png]]
    - use linear interpolation

### dual marching cubes

![[cs519-q5.2.png]]

![[cs519-q5.8.png]]

## Volume Visualization

- gradient
    - ![[cs519-gradient.png]]
- compositing
    - over ![[cs519-compositing.png]]
    - ![[cs519-over-compo.png]]

## Thresholding, Segmentation, Classification

![[cs519-7.4.png]]

