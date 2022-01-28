# ABC News data visualisation colour palettes

Principles:

- This should be the canonical source for colour palettes for data visualisation in ABC News stories.
- It should be easy to find and use.
- Palettes should be defined in only one place in the source code.
- It should be published as both a living style guide and a module which can be required by other projects.

Goal:

- CSS
  - Custom props for all the colours used in data visualisation palettes
  - Ready to go classes that define the palettes for each type of visualisation
- JS with typed exports for each colour scheme
- JS utility functions for
  - generating discrete ordinal scales with x number of buckets
  - creating continuous scale functions for a given sequential/divergent colour scheme

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

# Authors

- Simon Elvery ([simon@elvery.net](mailto:simon@elvery.net))

# Current status

- Build and dev commands generate the expected CSS at build time.
- `sveltekit package` doesn't output CSS.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
