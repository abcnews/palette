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

### Utilities

- [getColourName](README.md#getcolourname)
- [getLabelColour](README.md#getlabelcolour)
- [getNamedColour](README.md#getnamedcolour)

### Enumerations

- [ColourMode](enums/ColourMode.md)
- [OrdinalPalette](enums/OrdinalPalette.md)
- [SequentialPalette](enums/SequentialPalette.md)

### Type Aliases

- [BasicColourName](README.md#basiccolourname)
- [ColourName](README.md#colourname)
- [ColourWithUsage](README.md#colourwithusage)
- [DivergentColourName](README.md#divergentcolourname)
- [DivergentPalette](README.md#divergentpalette)
- [DivergentPaletteOptions](README.md#divergentpaletteoptions)
- [OrdinalColourName](README.md#ordinalcolourname)
- [PartyColourName](README.md#partycolourname)
- [PoliticalColour](README.md#politicalcolour)
- [PurpleGreen](README.md#purplegreen)
- [RedBlue](README.md#redblue)
- [RedViolet](README.md#redviolet)
- [SentimentPalette](README.md#sentimentpalette)
- [SequentialColourName](README.md#sequentialcolourname)

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

An array of colour strings in hex format

**`Throws`**

An error if an interpolated colour can't be converted to hex format

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

An array of `steps * 2 + 1` colour strings in hex format. The middle colour should represent the neutral value.

**`Throws`**

An error if an interpolated colour can't be converted to hex format

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

An array of `steps + 1` colour strings in hex format. The first colour should be used to represent the zero value.

**`Throws`**

An error if any of the interpolated colours can't be converted to hex format.

## Utilities

### getColourName

▸ **getColourName**(`hex`): `undefined` \| [`ColourName`](README.md#colourname)

Get a colour's name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | An RGB colour in hex format |

#### Returns

`undefined` \| [`ColourName`](README.md#colourname)

A colour name string if there's a defined name for the passed hex code

___

### getLabelColour

▸ **getLabelColour**(`hex`): `string`

Get a colour suitable for use as a text label for a given colour.

Some colours in the palette are not suitable for use as text colours
because acceptable colour contrast ratios are different for text than
for other visualisation elements. When using colour palettes generated
by this library, use this function to ensure you've to an appropriate
colour for text labels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | An RGB color value in hex format |

#### Returns

`string`

An RGB colour value in hex format

___

### getNamedColour

▸ **getNamedColour**(`name`): `string`

Get an RGB hex colour string for a named colour.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | [`ColourName`](README.md#colourname) | A colour name for which to return the RGB hex colour string. |

#### Returns

`string`

A hex colour string

**`Throws`**

An `Error` if the `name` passed in isn't a valid `ColourName`

## Type Aliases

### BasicColourName

Ƭ **BasicColourName**: ``"blue-l"`` \| ``"midblue-l"`` \| ``"darkblue-l"`` \| ``"pink-l"`` \| ``"purple-l"`` \| ``"teal-l"`` \| ``"red-l"`` \| ``"midred-l"`` \| ``"darkred-l"`` \| ``"green-l"`` \| ``"orange-l"`` \| ``"grey-l"`` \| ``"darkgrey-l"`` \| ``"taupe-l"`` \| ``"blue-d"`` \| ``"midblue-d"`` \| ``"lightblue-d"`` \| ``"pink-d"`` \| ``"lightpink-d"`` \| ``"purple-d"`` \| ``"teal-d"`` \| ``"red-d"`` \| ``"midred-d"`` \| ``"green-d"`` \| ``"orange-d"`` \| ``"grey-d"`` \| ``"lightgrey-d"`` \| ``"taupe-d"``

Valid basic colour names

___

### ColourName

Ƭ **ColourName**: [`SequentialColourName`](README.md#sequentialcolourname) \| [`DivergentColourName`](README.md#divergentcolourname) \| [`OrdinalColourName`](README.md#ordinalcolourname) \| [`PartyColourName`](README.md#partycolourname) \| [`BasicColourName`](README.md#basiccolourname)

All valid colour names used in palettes.
*Note:* not all colours generated/exported by this library are named.

___

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

### DivergentColourName

Ƭ **DivergentColourName**: ``"sd-0-l"`` \| ``"d-red-1-l"`` \| ``"d-red-2-l"`` \| ``"d-red-3-l"`` \| ``"d-red-4-l"`` \| ``"d-red-5-l"`` \| ``"d-red-6-l"`` \| ``"d-red-7-l"`` \| ``"d-red-8-l"`` \| ``"d-red-9-l"`` \| ``"d-red-10-l"`` \| ``"d-blue-1-l"`` \| ``"d-blue-2-l"`` \| ``"d-blue-3-l"`` \| ``"d-blue-4-l"`` \| ``"d-blue-5-l"`` \| ``"d-blue-6-l"`` \| ``"d-blue-7-l"`` \| ``"d-blue-8-l"`` \| ``"d-blue-9-l"`` \| ``"d-blue-10-l"`` \| ``"d-purple-1-l"`` \| ``"d-purple-2-l"`` \| ``"d-purple-3-l"`` \| ``"d-purple-4-l"`` \| ``"d-purple-5-l"`` \| ``"d-purple-6-l"`` \| ``"d-purple-7-l"`` \| ``"d-purple-8-l"`` \| ``"d-purple-9-l"`` \| ``"d-purple-10-l"`` \| ``"d-violet-1-l"`` \| ``"d-violet-2-l"`` \| ``"d-violet-3-l"`` \| ``"d-violet-4-l"`` \| ``"d-violet-5-l"`` \| ``"d-violet-6-l"`` \| ``"d-violet-7-l"`` \| ``"d-violet-8-l"`` \| ``"d-violet-9-l"`` \| ``"d-violet-10-l"`` \| ``"d-green-1-l"`` \| ``"d-green-2-l"`` \| ``"d-green-3-l"`` \| ``"d-green-4-l"`` \| ``"d-green-5-l"`` \| ``"d-green-6-l"`` \| ``"d-green-7-l"`` \| ``"d-green-8-l"`` \| ``"d-green-9-l"`` \| ``"d-green-10-l"`` \| ``"sd-0-d"`` \| ``"d-red-1-d"`` \| ``"d-red-2-d"`` \| ``"d-red-3-d"`` \| ``"d-red-4-d"`` \| ``"d-red-5-d"`` \| ``"d-red-6-d"`` \| ``"d-red-7-d"`` \| ``"d-red-8-d"`` \| ``"d-red-9-d"`` \| ``"d-red-10-d"`` \| ``"d-blue-1-d"`` \| ``"d-blue-2-d"`` \| ``"d-blue-3-d"`` \| ``"d-blue-4-d"`` \| ``"d-blue-5-d"`` \| ``"d-blue-6-d"`` \| ``"d-blue-7-d"`` \| ``"d-blue-8-d"`` \| ``"d-blue-9-d"`` \| ``"d-blue-10-d"`` \| ``"d-purple-1-d"`` \| ``"d-purple-2-d"`` \| ``"d-purple-3-d"`` \| ``"d-purple-4-d"`` \| ``"d-purple-5-d"`` \| ``"d-purple-6-d"`` \| ``"d-purple-7-d"`` \| ``"d-purple-8-d"`` \| ``"d-purple-9-d"`` \| ``"d-purple-10-d"`` \| ``"d-violet-1-d"`` \| ``"d-violet-2-d"`` \| ``"d-violet-3-d"`` \| ``"d-violet-4-d"`` \| ``"d-violet-5-d"`` \| ``"d-violet-6-d"`` \| ``"d-violet-7-d"`` \| ``"d-violet-8-d"`` \| ``"d-violet-9-d"`` \| ``"d-violet-10-d"`` \| ``"d-green-1-d"`` \| ``"d-green-2-d"`` \| ``"d-green-3-d"`` \| ``"d-green-4-d"`` \| ``"d-green-5-d"`` \| ``"d-green-6-d"`` \| ``"d-green-7-d"`` \| ``"d-green-8-d"`` \| ``"d-green-9-d"`` \| ``"d-green-10-d"``

Valid divergent palette colour names

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

### OrdinalColourName

Ƭ **OrdinalColourName**: ``"o-blue-1-l"`` \| ``"o-blue-2-l"`` \| ``"o-blue-3-l"`` \| ``"o-blue-4-l"`` \| ``"o-red-1-l"`` \| ``"o-red-2-l"`` \| ``"o-red-3-l"`` \| ``"o-red-4-l"`` \| ``"o-green-1-l"`` \| ``"o-green-2-l"`` \| ``"o-green-3-l"`` \| ``"o-green-4-l"`` \| ``"o-purple-1-l"`` \| ``"o-purple-2-l"`` \| ``"o-purple-3-l"`` \| ``"o-purple-4-l"`` \| ``"so-10-l"`` \| ``"o-blue-1-d"`` \| ``"o-blue-2-d"`` \| ``"o-blue-3-d"`` \| ``"o-blue-4-d"`` \| ``"o-red-1-d"`` \| ``"o-red-2-d"`` \| ``"o-red-3-d"`` \| ``"o-red-4-d"`` \| ``"o-green-1-d"`` \| ``"o-green-2-d"`` \| ``"o-green-3-d"`` \| ``"o-green-4-d"`` \| ``"o-purple-1-d"`` \| ``"o-purple-2-d"`` \| ``"o-purple-3-d"`` \| ``"o-purple-4-d"`` \| ``"so-10-d"``

Valid ordinal palette colour names

___

### PartyColourName

Ƭ **PartyColourName**: ``"p-red-l"`` \| ``"p-blue-l"`` \| ``"p-black-l"`` \| ``"p-green-l"`` \| ``"p-lightgreen-l"`` \| ``"p-gold-l"`` \| ``"p-brown-l"`` \| ``"p-lightblue-l"`` \| ``"p-aqua-l"`` \| ``"p-orange-l"`` \| ``"p-purple-l"`` \| ``"p-red-d"`` \| ``"p-blue-d"`` \| ``"p-black-d"`` \| ``"p-green-d"`` \| ``"p-lightgreen-d"`` \| ``"p-gold-d"`` \| ``"p-brown-d"`` \| ``"p-lightblue-d"`` \| ``"p-aqua-d"`` \| ``"p-orange-d"`` \| ``"p-purple-d"``

Valid political colour names

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

___

### SequentialColourName

Ƭ **SequentialColourName**: ``"sd-0-l"`` \| ``"so-10-l"`` \| ``"sd-0-d"`` \| ``"so-10-d"`` \| ``"s-blue-1-l"`` \| ``"s-blue-2-l"`` \| ``"s-blue-3-l"`` \| ``"s-blue-4-l"`` \| ``"s-blue-5-l"`` \| ``"s-blue-6-l"`` \| ``"s-blue-7-l"`` \| ``"s-blue-8-l"`` \| ``"s-blue-9-l"`` \| ``"s-red-1-l"`` \| ``"s-red-2-l"`` \| ``"s-red-3-l"`` \| ``"s-red-4-l"`` \| ``"s-red-5-l"`` \| ``"s-red-6-l"`` \| ``"s-red-7-l"`` \| ``"s-red-8-l"`` \| ``"s-red-9-l"`` \| ``"s-green-1-l"`` \| ``"s-green-2-l"`` \| ``"s-green-3-l"`` \| ``"s-green-4-l"`` \| ``"s-green-5-l"`` \| ``"s-green-6-l"`` \| ``"s-green-7-l"`` \| ``"s-green-8-l"`` \| ``"s-green-9-l"`` \| ``"s-purple-1-l"`` \| ``"s-purple-2-l"`` \| ``"s-purple-3-l"`` \| ``"s-purple-4-l"`` \| ``"s-purple-5-l"`` \| ``"s-purple-6-l"`` \| ``"s-purple-7-l"`` \| ``"s-purple-8-l"`` \| ``"s-purple-9-l"`` \| ``"s-blue-1-d"`` \| ``"s-blue-2-d"`` \| ``"s-blue-3-d"`` \| ``"s-blue-4-d"`` \| ``"s-blue-5-d"`` \| ``"s-blue-6-d"`` \| ``"s-blue-7-d"`` \| ``"s-blue-8-d"`` \| ``"s-blue-9-d"`` \| ``"s-red-1-d"`` \| ``"s-red-2-d"`` \| ``"s-red-3-d"`` \| ``"s-red-4-d"`` \| ``"s-red-5-d"`` \| ``"s-red-6-d"`` \| ``"s-red-7-d"`` \| ``"s-red-8-d"`` \| ``"s-red-9-d"`` \| ``"s-green-1-d"`` \| ``"s-green-2-d"`` \| ``"s-green-3-d"`` \| ``"s-green-4-d"`` \| ``"s-green-5-d"`` \| ``"s-green-6-d"`` \| ``"s-green-7-d"`` \| ``"s-green-8-d"`` \| ``"s-green-9-d"`` \| ``"s-purple-1-d"`` \| ``"s-purple-2-d"`` \| ``"s-purple-3-d"`` \| ``"s-purple-4-d"`` \| ``"s-purple-5-d"`` \| ``"s-purple-6-d"`` \| ``"s-purple-7-d"`` \| ``"s-purple-8-d"`` \| ``"s-purple-9-d"``

Valid sequential palette colour names

## Variables

### DivergentPalette

• **DivergentPalette**: [`DivergentPaletteOptions`](README.md#divergentpaletteoptions)

A map of divergent palette colour combination names to values

This is implemented as an object rather than an enum because having tuples makes
type safety easier.
