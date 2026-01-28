[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getLabelColour

# Function: getLabelColour()

> **getLabelColour**(`hex`): `string`

Get a colour suitable for use as a text label for a given colour.

Some colours in the palette are not suitable for use as text colours
because acceptable colour contrast ratios are different for text than
for other visualisation elements. When using colour palettes generated
by this library, use this function to ensure you've to an appropriate
colour for text labels.

## Parameters

### hex

`string`

An RGB color value in hex format

## Returns

`string`

An RGB colour value in hex format
