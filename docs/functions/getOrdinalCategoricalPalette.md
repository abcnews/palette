[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getOrdinalCategoricalPalette

# Function: getOrdinalCategoricalPalette()

> **getOrdinalCategoricalPalette**(`steps`, `variant`, `mode`): `string`[]

Get an ordinal categorical palette with the given params.

## Parameters

### steps

`number`

The number of steps (2-5) to use for the generated ordinal palette

### variant

[`OrdinalPalette`](../enumerations/OrdinalPalette.md) = `OrdinalPalette.Blue`

The colour variant the returned palette should use

### mode

[`ColourMode`](../enumerations/ColourMode.md) = `ColourMode.Light`

The colour mode (light/dark) the returned palette should use

## Returns

`string`[]

An array of colour strings in hex format

## Throws

An error if an interpolated colour can't be converted to hex format
