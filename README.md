# ABC News data visualisation colour palettes

This project implements a set of colour palettes for use in data visualisation at ABC News as a javascript package and provides a documentation site and development workflow.

Colour palettes are available for visualising various types of data, including:

- Nominal categorical data
- Ordinal categorical data
- Categorical data where semantic meaning is important (gender, sentiment, Australian political parties)
- Continuous (sequential and divergent) data

## Principles

- This should be the canonical source for colour palettes for data visualisation in ABC News stories.
- It should be easy to find and use.
- Palettes should be defined in only one place in the source code.
- It should be published as both a living style guide and a module which can be required by other projects.


# CSS

The CSS outputs are not yet complete. Once they are, there will be stylesheets available that encode the colour palettes using pure CSS.
# Javascript API

This describes the functions and objects available in the module and how to use them for generating or importing colour palettes.

## Generic categorical palettes

### Nominal

Returns an array of hex colour strings for use in visualising nominal (non-ordinal) categorical data for the given number of categories.

`getNominalCategoricalPalette: (n: number) => string[]`

Emphasis and de-emphasis colours can be used for palettes where there are up to four categories.

`getEmphasisColours: () => {emphasise: string, deemphasise: string}`

### Ordinal

Returns an array of hex colour strings for use in visualising ordinal categorical data for the given number of categories.

`getOrdinalCategoricalPalette: (n: number, variant: 'blue'|'red'|'green'|'purple' = 'blue') => string[]`

## Named categorical palettes

A generic function for accessing the palettes described below.

`getNamedCategoricalPalette: (name: 'gender'|'sentiment'|'political') => GenderPalette | SentimentPalette | PoliticalPalette`

### Gender

Returns a palette for use when visualising gender categories.

`getGenderPalette: () => GenderPalette`

### Sentiment

Returns a palette for use when visualising sentiment.

`getSentimentPalette: () => SentimentPalette`

### Political

Returns a palette for use when visualising political parties.

`getPoliticalPalette: () => PoliticalPalette`

## Continuous and divergent palettes

Continuous and divergent palettes are provided as an interpolation function that takes a value between 0 and 1 and returns a hex RGB colour string. These are similar to the diverging and sequential schemes provided by d3 in the [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic/blob/main/README.md) package.

These are suited for use with a scale function where an input domain appropriate for the data you're visualising is mapped to a normalised output range between 0 and 1.

An easy way to use these is with d3's [sequential](https://github.com/d3/d3-scale/blob/main/README.md#sequential-scales) and [diverging](https://github.com/d3/d3-scale/blob/main/README.md#diverging-scales) scale functions. Unlike most of d3's scale functions these take an interpolation function in place of a range.

```js
const scale = d3.scaleSequential(getContinuousPalette('blue')).domain([0, 100]);
```

### Continuous

Returns a continuous scale function for generating colours for an input value. Functions expect a value between 0 and 1.

`getContinuousPaletteInterpolator: (variant: 'blue'|'red'|'green'|'purple' = 'blue') => (value: number) => string`

### Divergent

Returns a continuous scale function for generating colours for an input value. Functions expect a value between 0 and 1.

`getDivergentPaletteInterpolator: (variant: 'rb'|'gp'|'pr' = 'rb') => (value: number) => string`

# Development

This is a sveltekit project. The `npm run dev` will launch a development server with live reload. This is the easiest way to work on the project. 

This site is also intended to be built and published as documentation for the library and the ABC News colour palettes in general.

## Publication

Packaging is done with the `npm run package` command. This packages the `/src/lib` folder into `/package`. Releases are done with `npm run release`. 

# Authors

- Simon Elvery ([simon@elvery.net](mailto:simon@elvery.net))
- Ben Spraggon
