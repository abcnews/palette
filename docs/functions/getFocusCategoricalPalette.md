[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / getFocusCategoricalPalette

# Function: getFocusCategoricalPalette()

> **getFocusCategoricalPalette**(`n`, `mode`): `object`

Get a colour palette suitable for use visualisation categorical data with focus on a single element.

## Parameters

### n

`number`

The number of categories (excluding emphasis colours) [1-3] for which to get a colour palette

### mode

[`ColourMode`](../enumerations/ColourMode.md) = `ColourMode.Light`

Which colour mode (dark/light) should the returned palette be suitable for?

## Returns

`object`

An object containing an array of colour values (in hex format) and emphasis and deemphasis colours.

### deemphasis

> **deemphasis**: `string`

### emphasis

> **emphasis**: `string`

### palette

> **palette**: `string`[]
