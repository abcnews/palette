[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getSequentialContinuousPaletteInterpolator

# Function: getSequentialContinuousPaletteInterpolator()

> **getSequentialContinuousPaletteInterpolator**(`variant?`, `mode?`): (`t`) => `any`

Get an interpolator function for a sequential continuous palette with the given params.

## Parameters

### variant?

[`SequentialPalette`](../enumerations/SequentialPalette.md) = `SequentialPalette.Blue`

The colour variant the returned interpolator should use

### mode?

[`ColourMode`](../enumerations/ColourMode.md) = `ColourMode.Light`

The colour mode (light/dark) the returned interpolator should use

## Returns

An interpolator function that takes a number (0-1) and returns a colour in `rgb(x,y,z)` format

(`t`) => `any`
