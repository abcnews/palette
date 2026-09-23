[**@abcnews/palette**](../README.md)

***

[@abcnews/palette](../README.md) / createContinuousScale

# Function: createContinuousScale()

> **createContinuousScale**(`palette`, `mode`, `domain`): `ScaleDiverging`\<`string`, `never`\> \| `ScaleSequential`\<`string`, `never`\>

A convenience wrapper around d3's `scaleDiverging` and `scaleSequential` for creating
scales with [diverging](getDivergentContinuousPaletteInterpolator.md) or
[sequential](getSequentialContinuousPaletteInterpolator.md) palettes and a supplied domain.
For a sequential scale, the domain will usually be the minimum and maximum values in the input
data. For diverging scales, the domain will usually be minimum, neutral, maximum values in the
input data.

## Parameters

### palette

[`DivergentPalette`](../type-aliases/DivergentPalette.md) \| [`SequentialPalette`](../enumerations/SequentialPalette.md)

The colour and type of palette for which to generate a scale function

### mode

[`ColourMode`](../enumerations/ColourMode.md)

The page colour mode (light/dark) the generated scale function should be suitable for

### domain

\[`number`, `number`, `number`\] \| \[`number`, `number`\]

The domain used by the scale function. Sequential palettes must have a domain of length two and divergent palettes must be three.

## Returns

`ScaleDiverging`\<`string`, `never`\> \| `ScaleSequential`\<`string`, `never`\>

## See

 - [d3 diverging scales](https://observablehq.com/@d3/diverging-scales)
 - [d3 sequential scales](https://observablehq.com/@d3/sequential-scales)
