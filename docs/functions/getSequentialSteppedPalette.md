[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getSequentialSteppedPalette

# Function: getSequentialSteppedPalette()

> **getSequentialSteppedPalette**(`steps`, `variant?`, `mode?`): `string`[]

Get an array of colours that define a sequential stepped palette with the given params.

## Parameters

### steps

`number`

The number of steps [2-10] to use for the generated sequential stepped palette

### variant?

[`SequentialPalette`](../enumerations/SequentialPalette.md) = `SequentialPalette.Blue`

The colour variant the returned palette should use

### mode?

[`ColourMode`](../enumerations/ColourMode.md) = `ColourMode.Light`

The colour mode (light/dark) the returned palette should use

## Returns

`string`[]

An array of `steps + 1` colour strings in hex format. The first colour should be used to represent the zero value.

## Throws

An error if any of the interpolated colours can't be converted to hex format.
