# CSS fundamentals: box model, typography, units, colors

## Box-model
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing?authuser=0 
    
## Box-sizing:
  Border-box: 
    content width + padding + border = actual width of an element
    content height + padding + border = actual height of an element

  Content-box: 
    content = actual width of an element

## Inline, block, inline block elements

## Fonts 
https://fonts.google.com/

Truncate long text with elipsis: https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/



## CSS Units

### Absolute Units

These units are fixed and do not change based on screen size or user settings.

* `px` – Pixels (the only one from the list that is used for Web)
* `cm` – Centimeters
* `mm` – Millimeters
* `in` – Inches
* `pt` – Points (1 pt = 1/72 inch)
* `pc` – Picas (1 pc = 12 pt)

Use absolute units when you need precise physical measurements, like for print layouts.

### Relative Units

These units scale based on other values, such as font size or viewport dimensions.

### Font-relative units

* `em` – Relative to the font-size of the parent
* `rem` – Relative to the font-size of the root element (`html`)
* `%` – Relative to the size of the parent element

We don't really use units below:
* `ex` – Relative to the x-height of the font (typically the height of "x")
* `ch` – Relative to the width of the "0" character in the current font

### Viewport-relative units
* `%` – Relative to the size of the parent element
* `vw` – 1% of the viewport’s width
* `vh` – 1% of the viewport’s height
* `vmin` – 1% of the smaller dimension (width or height)
* `vmax` – 1% of the larger dimension (width or height)

Relative units are best for responsive design and accessibility.

## Colors
* Standard colors (e.g. blue, red, yellow). Full list can be found here: https://www.w3schools.com/tags/ref_colornames.asp

* HEX & HEXA (#RRGGBB & #RRGGBBAA) - #000 #000000 both are black color (mostly used in frontend development)


* RGB - rgb(0, 230, 0)
* RGBA - rgba(0,0,0,0.4) the last number is for opacity (transparency)

* HSL & HSLA (HUE - SATURATION - LIGHTNESS)

! We do not mix different color types in the same project, only rgba is an exception and can be combined with other types when opacity is needed.
