@abcnews/palette

# @abcnews/palette

## Table of contents

### Categorical Palettes

- [getDefaultCategoricalPalette](README.md#getdefaultcategoricalpalette)
- [getFocusCategoricalPalette](README.md#getfocuscategoricalpalette)
- [getGenderPalette](README.md#getgenderpalette)
- [getOrdinalCategoricalPalette](README.md#getordinalcategoricalpalette)
- [getPoliticalPalette](README.md#getpoliticalpalette)
- [getSentimentPalette](README.md#getsentimentpalette)

### Divergent Palettes

- [createContinuousScale](README.md#createcontinuousscale)
- [getDivergentContinuousPaletteInterpolator](README.md#getdivergentcontinuouspaletteinterpolator)
- [getDivergentSteppedPalette](README.md#getdivergentsteppedpalette)

### Sequential Palettes

- [createContinuousScale](README.md#createcontinuousscale)
- [getSequentialContinuousPaletteInterpolator](README.md#getsequentialcontinuouspaletteinterpolator)
- [getSequentialSteppedPalette](README.md#getsequentialsteppedpalette)

### Enumerations

- [ColourMode](enums/ColourMode.md)
- [OrdinalPalette](enums/OrdinalPalette.md)
- [SequentialPalette](enums/SequentialPalette.md)

### Type Aliases

- [ColourWithUsage](README.md#colourwithusage)
- [DivergentPalette](README.md#divergentpalette)
- [DivergentPaletteOptions](README.md#divergentpaletteoptions)
- [PoliticalColour](README.md#politicalcolour)
- [PurpleGreen](README.md#purplegreen)
- [RedBlue](README.md#redblue)
- [RedViolet](README.md#redviolet)
- [SentimentPalette](README.md#sentimentpalette)

### Variables

- [DivergentPalette](README.md#divergentpalette-1)

## Categorical Palettes

### getDefaultCategoricalPalette

▸ **getDefaultCategoricalPalette**(`n`, `mode?`): `string`[]

Get a colour palette suitable for use visualisation categorical data.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | The number of categories [1-8] for which to get a colour palette |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | Which colour mode (dark/light) should the returned palette be suitable for? |

#### Returns

`string`[]

An array of colour values (in hex format).

___

### getFocusCategoricalPalette

▸ **getFocusCategoricalPalette**(`n`, `mode?`): `Object`

Get a colour palette suitable for use visualisation categorical data with focus on a single element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | The number of categories (excluding emphasis colours) [1-3] for which to get a colour palette |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | Which colour mode (dark/light) should the returned palette be suitable for? |

#### Returns

`Object`

An object containing an array of colour values (in hex format) and emphasis and deemphasis colours.

| Name | Type |
| :------ | :------ |
| `deemphasis` | `string` |
| `emphasis` | `string` |
| `palette` | `string`[] |

___

### getGenderPalette

▸ **getGenderPalette**(`mode?`): `Record`<`string`, [`ColourWithUsage`](README.md#colourwithusage)\>

Get a colour palette suitable for visualising gender

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | Which colour mode (dark/light) should the returned palette be suitable for? |

#### Returns

`Record`<`string`, [`ColourWithUsage`](README.md#colourwithusage)\>

An object defining a palette suitable for visualising gender

___

### getOrdinalCategoricalPalette

▸ **getOrdinalCategoricalPalette**(`steps`, `variant?`, `mode?`): `string`[]

Get an ordinal categorical palette with the given params.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `steps` | `number` | `undefined` | The number of steps (2-5) to use for the generated ordinal palette |
| `variant` | [`OrdinalPalette`](enums/OrdinalPalette.md) | `OrdinalPalette.Blue` | The colour variant the returned palette should use |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | The colour mode (light/dark) the returned palette should use |

#### Returns

`string`[]

An array of colour strings in `rgb(x,y,z)` format

___

### getPoliticalPalette

▸ **getPoliticalPalette**(`mode?`): `Map`<[`PoliticalColour`](README.md#politicalcolour), [`ColourWithUsage`](README.md#colourwithusage)\>

Get a colour palette suitable for visualising political parties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | Which colour mode (dark/light) should the returned palette be suitable for? |

#### Returns

`Map`<[`PoliticalColour`](README.md#politicalcolour), [`ColourWithUsage`](README.md#colourwithusage)\>

A `Map` of political colour names to hex colour and usage strings

___

### getSentimentPalette

▸ **getSentimentPalette**(`n`, `mode?`): [`SentimentPalette`](README.md#sentimentpalette)

Get a colour palette suitable for visualising sentiment

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | `number` | `undefined` | The number of positive/negative sentiment levels [1-3] |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | Which colour mode (dark/light) should the returned palette be suitable for? |

#### Returns

[`SentimentPalette`](README.md#sentimentpalette)

An object defining a colour palette suitable for visualising sentiment

## Divergent Palettes

### createContinuousScale

▸ **createContinuousScale**(`palette`, `mode`, `domain`): `ScaleDiverging`<`string`, `never`\> \| `ScaleSequential`<`string`, `never`\>

A convenience wrapper around d3's `scaleDiverging` and `scaleSequential` for creating
scales with [diverging](README.md#getdivergentcontinuouspaletteinterpolator) or
[sequential](README.md#getsequentialcontinuouspaletteinterpolator) palettes and a supplied domain.
For a sequential scale, the domain will usually be the minimum and maximum values in the input
data. For diverging scales, the domain will usually be minimum, neutral, maximum values in the
input data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `palette` | [`DivergentPalette`](README.md#divergentpalette-1) \| [`SequentialPalette`](enums/SequentialPalette.md) | The colour and type of palette for which to generate a scale function |
| `mode` | [`ColourMode`](enums/ColourMode.md) | The page colour mode (light/dark) the generated scale function should be suitable for |
| `domain` | [`number`, `number`] \| [`number`, `number`, `number`] | The domain used by the scale function. Sequential palettes must have a domain of length two and divergent palettes must be three. |

#### Returns

`ScaleDiverging`<`string`, `never`\> \| `ScaleSequential`<`string`, `never`\>

**`See`**

 - [d3 diverging scales](https://observablehq.com/@d3/diverging-scales)
 - [d3 sequential scales](https://observablehq.com/@d3/sequential-scales)

___

### getDivergentContinuousPaletteInterpolator

▸ **getDivergentContinuousPaletteInterpolator**(`variant?`, `mode?`): (`t`: `number`) => `any`

Get an interpolator function for a divergent continuous palette with the given params.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `variant` | [`DivergentPalette`](README.md#divergentpalette-1) | `DivergentPalette.RedBlue` | The colour variant the returned interpolator should use |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | The colour mode (light/dark) the returned interpolator should use |

#### Returns

`fn`

An interpolator function that takes a number (0-1) and returns a colour in `rgb(x,y,z)` format

▸ (`t`): `any`

Returns a piecewise interpolator, composing interpolators for each adjacent pair of values.
The returned interpolator maps `t` in `[0, 1 / (n - 1)]` to `interpolate(values[0], values[1])`, `t` in `[1 / (n - 1), 2 / (n - 1)]` to `interpolate(values[1], values[2])`,
and so on, where `n = values.length`. In effect, this is a lightweight linear scale.
For example, to blend through red, green and blue: `d3.piecewise(d3.interpolateRgb.gamma(2.2), ["red", "green", "blue"])`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

`any`

___

### getDivergentSteppedPalette

▸ **getDivergentSteppedPalette**(`steps`, `variant?`, `mode?`): `string`[]

Get an array of colours that define a divergent stepped palette with the given params.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `steps` | `number` | `undefined` | The number of steps [1-10] to use for each side of the generated divergent stepped palette |
| `variant` | [`DivergentPalette`](README.md#divergentpalette-1) | `DivergentPalette.RedBlue` | The colour variant the returned palette should use |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | The colour mode (light/dark) the returned palette should use |

#### Returns

`string`[]

An array of `steps * 2 + 1` colour strings in `rgb(x,y,z)` format. The middle colour should represent the neutral value.

## Sequential Palettes

### createContinuousScale

▸ **createContinuousScale**(`palette`, `mode`, `domain`): `ScaleDiverging`<`string`, `never`\> \| `ScaleSequential`<`string`, `never`\>

A convenience wrapper around d3's `scaleDiverging` and `scaleSequential` for creating
scales with [diverging](README.md#getdivergentcontinuouspaletteinterpolator) or
[sequential](README.md#getsequentialcontinuouspaletteinterpolator) palettes and a supplied domain.
For a sequential scale, the domain will usually be the minimum and maximum values in the input
data. For diverging scales, the domain will usually be minimum, neutral, maximum values in the
input data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `palette` | [`DivergentPalette`](README.md#divergentpalette-1) \| [`SequentialPalette`](enums/SequentialPalette.md) | The colour and type of palette for which to generate a scale function |
| `mode` | [`ColourMode`](enums/ColourMode.md) | The page colour mode (light/dark) the generated scale function should be suitable for |
| `domain` | [`number`, `number`] \| [`number`, `number`, `number`] | The domain used by the scale function. Sequential palettes must have a domain of length two and divergent palettes must be three. |

#### Returns

`ScaleDiverging`<`string`, `never`\> \| `ScaleSequential`<`string`, `never`\>

**`See`**

 - [d3 diverging scales](https://observablehq.com/@d3/diverging-scales)
 - [d3 sequential scales](https://observablehq.com/@d3/sequential-scales)

___

### getSequentialContinuousPaletteInterpolator

▸ **getSequentialContinuousPaletteInterpolator**(`variant?`, `mode?`): (`t`: `number`) => `any`

Get an interpolator function for a sequential continuous palette with the given params.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `variant` | [`SequentialPalette`](enums/SequentialPalette.md) | `SequentialPalette.Blue` | The colour variant the returned interpolator should use |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | The colour mode (light/dark) the returned interpolator should use |

#### Returns

`fn`

An interpolator function that takes a number (0-1) and returns a colour in `rgb(x,y,z)` format

▸ (`t`): `any`

Returns a piecewise interpolator, composing interpolators for each adjacent pair of values.
The returned interpolator maps `t` in `[0, 1 / (n - 1)]` to `interpolate(values[0], values[1])`, `t` in `[1 / (n - 1), 2 / (n - 1)]` to `interpolate(values[1], values[2])`,
and so on, where `n = values.length`. In effect, this is a lightweight linear scale.
For example, to blend through red, green and blue: `d3.piecewise(d3.interpolateRgb.gamma(2.2), ["red", "green", "blue"])`.

##### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

##### Returns

`any`

___

### getSequentialSteppedPalette

▸ **getSequentialSteppedPalette**(`steps`, `variant?`, `mode?`): `string`[]

Get an array of colours that define a sequential stepped palette with the given params.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `steps` | `number` | `undefined` | The number of steps [2-10] to use for the generated sequential stepped palette |
| `variant` | [`SequentialPalette`](enums/SequentialPalette.md) | `SequentialPalette.Blue` | The colour variant the returned palette should use |
| `mode` | [`ColourMode`](enums/ColourMode.md) | `ColourMode.Light` | The colour mode (light/dark) the returned palette should use |

#### Returns

`string`[]

An array of `steps + 1` colour strings in `rgb(x,y,z)` format. The first colour should be used to represent the zero value.

## Type Aliases

### ColourWithUsage

Ƭ **ColourWithUsage**: `Object`

A type representing a mapping of colour value (hex string) to a description
of its meaning in a given context.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `colour` | `string` |
| `usage` | `string` |

___

### DivergentPalette

Ƭ **DivergentPalette**: [`RedBlue`](README.md#redblue) \| [`PurpleGreen`](README.md#purplegreen) \| [`RedViolet`](README.md#redviolet)

Valid divergent palette options. These can be accessed at runtime using the associated object (e.g. `DivergentPalette.RedBlue`).

___

### DivergentPaletteOptions

Ƭ **DivergentPaletteOptions**: `Object`

A type representing a map of divergent palette names to values

#### Type declaration

| Name | Type |
| :------ | :------ |
| `PurpleGreen` | [`PurpleGreen`](README.md#purplegreen) |
| `RedBlue` | [`RedBlue`](README.md#redblue) |
| `RedViolet` | [`RedViolet`](README.md#redviolet) |

___

### PoliticalColour

Ƭ **PoliticalColour**: ``"red"`` \| ``"blue"`` \| ``"black"`` \| ``"green"`` \| ``"lightgreen"`` \| ``"gold"`` \| ``"brown"`` \| ``"lightblue"`` \| ``"aqua"`` \| ``"orange"`` \| ``"purple"``

Valid political colour options. A mapping of political colours to usage is returned by [getPoliticalPalette](README.md#getpoliticalpalette).

___

### PurpleGreen

Ƭ **PurpleGreen**: [``"purple"``, ``"green"``]

A green/purple divergent palette combination

___

### RedBlue

Ƭ **RedBlue**: [``"red"``, ``"blue"``]

A red/blue divergent palette combination

___

### RedViolet

Ƭ **RedViolet**: [``"red"``, ``"violet"``]

A purple/red divergent palette combination

___

### SentimentPalette

Ƭ **SentimentPalette**: `Object`

Shape of returned object from [getSentimentPalette](README.md#getsentimentpalette)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `na` | `string` |
| `negative` | `string`[] |
| `neutral` | `string` |
| `positive` | `string`[] |

## Variables

### DivergentPalette

• **DivergentPalette**: [`DivergentPaletteOptions`](README.md#divergentpaletteoptions)

A map of divergent palette colour combination names to values

This is implemented as an object rather than an enum because having tuples makes
type safety easier.
