# ABC News data visualisation colour palettes

This project implements a set of colour palettes for use in data visualisation at ABC News as a javascript package and provides a documentation site and development workflow.

Colour palettes are available for visualising various types of data, including:

- Nominal categorical data
- Ordinal categorical data
- Categorical data where semantic meaning is important (gender, sentiment, Australian political parties)
- Continuous and stepped (sequential and divergent) data

## Principles

- This should be the canonical source for colour palettes for data visualisation in ABC News stories.
- It should be easy to find and use.
- Palettes should be defined in only one place in the source code.
- It should be published as both a living style guide and a module which can be required by other projects.

# Javascript API

Detailed API documentation is in [docs/README.md](./docs/README.md).

## Categorical palettes

In general, categorical palettes generators return either an array of colour values to use in the given order or an array of colour values with an associated description of appropriate usage.

## Sequential and divergent palettes

Sequential and divergent palettes are provided in two forms: continuous and stepped.

Continuous palettes are implemented as an interpolation function that takes a value between 0 and 1 and returns a hex RGB colour string. These are similar to the diverging and sequential schemes provided by d3 in the [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic/blob/main/README.md) package.

These are suited for use with a scale function where an input domain appropriate for the data you're visualising is mapped to a normalised output range between 0 and 1.

An easy way to use these is with d3's [sequential](https://github.com/d3/d3-scale/blob/main/README.md#sequential-scales) and [diverging](https://github.com/d3/d3-scale/blob/main/README.md#diverging-scales) scale functions. Unlike most of d3's scale functions these take an interpolation function in place of a range.

Stepped palette generators return an array of string colour values.

# Development

This is a [SvelteKit](https://kit.svelte.dev/) project. The `npm run dev` will launch a development server with live reload. The development server will serve a site that renders example uses of all the palette generators defined in the package. This is the easiest way to work on the project.

## Publication

Packaging is done with the `npm run package` command. This packages the `/src/lib` folder into `/dist`. Releases are done with `npm run release`.

# Authors

- Simon Elvery ([simon@elvery.net](mailto:simon@elvery.net))
- Ben Spraggon
