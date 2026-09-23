[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getDivergentSteppedPalette

# Function: getDivergentSteppedPalette()

> **getDivergentSteppedPalette**(`steps`, `variant?`, `mode?`): `string`[]

Get an array of colours that define a divergent stepped palette with the given params.

## Parameters

### steps

`number`

The number of steps [1-10] to use for each side of the generated divergent stepped palette

### variant?

[`DivergentPalette`](../type-aliases/DivergentPalette.md) = `DivergentPalette.RedBlue`

The colour variant the returned palette should use

### mode?

[`ColourMode`](../enumerations/ColourMode.md) = `ColourMode.Light`

The colour mode (light/dark) the returned palette should use

## Returns

`string`[]

An array of `steps * 2 + 1` colour strings in hex format. The middle colour should represent the neutral value.

## Throws

An error if an interpolated colour can't be converted to hex format
