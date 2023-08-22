import { getNamedColour } from './colours.js';
import type {
	ColourName,
	DivergentColourName,
	OrdinalColourName,
	SequentialColourName
} from './colours.js';
import { piecewise, interpolateRgb } from 'd3-interpolate';

/**
 * The available colour modes (i.e. light or dark mode)
 */
export enum ColourMode {
	Light = 'l',
	Dark = 'd'
}

/**
 * Sequential palette base colours
 */
export enum SequentialPalette {
	Blue = 'blue',
	Red = 'red',
	Green = 'green',
	Purple = 'purple'
}

/**
 * Ordinal palette base colours
 */
export enum OrdinalPalette {
	Blue = 'blue',
	Red = 'red',
	Green = 'green',
	Purple = 'purple'
}

/** A red/blue divergent palette combination */
type RedBlue = ['red', 'blue'];

/** A green/purple divergent palette combination */
type PurpleGreen = ['purple', 'green'];

/** A purple/red divergent palette combination */
type RedViolet = ['red', 'violet'];

/** A type representing a map of divergent palette names to values */
export type DivergentPaletteOptions = {
	RedBlue: RedBlue;
	PurpleGreen: PurpleGreen;
	RedViolet: RedViolet;
};

/** Divergent palette names */
export type DivergentPalette = RedBlue | PurpleGreen | RedViolet;

/** A map of divergent palette colour combination names to values */
export const DivergentPalette: DivergentPaletteOptions = {
	RedBlue: ['red', 'blue'],
	PurpleGreen: ['purple', 'green'],
	RedViolet: ['red', 'violet']
};

/**
 * A type representing a mapping of colour value (hex string) to a description
 * of its meaning in a given context.
 */
export type ColourWithUsage = { colour: string; usage: string };

/**
 * Get a colour palette suitable for use visualisation categorical data.
 *
 * @param n The number of categories [1-8] for which to get a colour palette
 * @param mode Which colour mode (dark/light) should the returned palette be suitable for?
 * @returns An array of colour values (in hex format).
 */
export const getDefaultCategoricalPalette = (
	n: number,
	mode: ColourMode = ColourMode.Light
): string[] => {
	if (n > 8 || n < 1) {
		throw new Error('Categorical palettes have a maximum of 8 colours.');
	}

	const palette: ColourName[] = [
		`blue-${mode}`,
		mode === ColourMode.Light ? `darkblue-l` : `lightblue-d`,
		`pink-${mode}`,
		`purple-${mode}`,
		`teal-${mode}`,
		`red-${mode}`,
		mode === ColourMode.Light ? `darkred-l` : `lightpink-d`,
		`green-${mode}`
	];

	return palette.slice(0, n).map(getNamedColour);
};

/**
 * Get a colour palette suitable for use visualisation categorical data with emphasis and deemphasis.
 *
 * @param n The number of categories (excluding emphasis colours) [1-3] for which to get a colour palette
 * @param mode Which colour mode (dark/light) should the returned palette be suitable for?
 * @returns An object containing an array of colour values (in hex format) and emphasis and deemphasis colours.
 * @todo Rename 'emphasis' to 'focus'
 */
export const getEmphasisCategoricalPalette = (
	n: number,
	mode: ColourMode = ColourMode.Light
): { palette: string[]; emphasis: string; deemphasis: string } => {
	if (n > 3 || n < 1) {
		throw new Error(
			'Categorical palettes with emphasis colours have a maximum of 3 colours (excluding the emphasis and deemphasis colours).'
		);
	}

	const palette: ColourName[] = [
		`blue-${mode}`,
		mode === ColourMode.Light ? `darkblue-l` : 'lightblue-d',
		`teal-${mode}`
	];

	return {
		palette: palette.slice(0, n).map(getNamedColour),
		emphasis: getNamedColour(`orange-${mode}`),
		deemphasis: getNamedColour(`grey-${mode}`)
	};
};

/**
 * Get a colour palette suitable for visualising gender
 * @param mode Which colour mode (dark/light) should the returned palette be suitable for?
 * @returns An object defining a palette suitable for visualising gender
 */
export const getGenderPalette = (
	mode: ColourMode = ColourMode.Light
): Record<string, ColourWithUsage> => {
	return {
		nonbinary: { colour: getNamedColour(`taupe-${mode}`), usage: 'Non-binary' },
		female: { colour: getNamedColour(`purple-${mode}`), usage: 'Female' },
		male: { colour: getNamedColour(`blue-${mode}`), usage: 'Male' }
	};
};

export type SentimentPalette = {
	negative: string[];
	neutral: string;
	positive: string[];
	na: string;
};

/**
 * Get a colour palette suitable for visualising sentiment
 * @param n The number of positive/negative sentiment levels [1-3]
 * @param mode Which colour mode (dark/light) should the returned palette be suitable for?
 * @returns An object defining a colour palette suitable for visualising sentiment
 */
export const getSentimentPalette = (
	n: number,
	mode: ColourMode = ColourMode.Light
): SentimentPalette => {
	let negative: ColourName[];
	let positive: ColourName[];

	switch (n) {
		case 1:
			negative = mode === ColourMode.Light ? ['red-l'] : ['red-d'];
			positive = mode === ColourMode.Light ? ['blue-l'] : ['blue-d'];
			break;

		case 2:
			negative = mode === ColourMode.Light ? ['red-l', 'midred-l'] : ['lightpink-d', 'red-d'];
			positive = mode === ColourMode.Light ? ['blue-l', 'midblue-l'] : ['lightblue-d', 'blue-d'];
			break;
		case 3:
			negative =
				mode === ColourMode.Light
					? ['red-l', 'midred-l', 'darkred-l']
					: ['lightpink-d', 'midred-d', 'red-d'];
			positive =
				mode === ColourMode.Light
					? ['blue-l', 'midblue-l', 'darkblue-l']
					: ['lightblue-d', 'midblue-d', 'blue-d'];
			break;
		default:
			throw new Error('Number of sentiment categories must be between 1 and 3');
	}

	return {
		negative: negative.map(getNamedColour),
		neutral: getNamedColour(`grey-${mode}`),
		positive: positive.map(getNamedColour),
		na: getNamedColour(mode === ColourMode.Light ? `darkgrey-l` : `lightgrey-d`)
	};
};

/**
 * Get a colour palette suitable for visualising political parties.
 * @param mode Which colour mode (dark/light) should the returned palette be suitable for?
 * @returns An object defining a colour palette suitable for visualising political parties
 */
export const getPoliticalPalette = (
	mode: ColourMode = ColourMode.Light
): Record<string, ColourWithUsage> => {
	return {
		ptyred: { colour: getNamedColour(`p-red-${mode}`), usage: 'Labor' },
		ptyblue: {
			colour: getNamedColour(`p-blue-${mode}`),
			usage: 'Liberal/Coalition (except Nationals)'
		},
		ptyblack: { colour: getNamedColour(`p-black-${mode}`), usage: 'Independents, others' },
		ptygreen: { colour: getNamedColour(`p-green-${mode}`), usage: 'Nationals' },
		ptylightgreen: { colour: getNamedColour(`p-lightgreen-${mode}`), usage: 'Greens' },
		ptygold: {
			colour: getNamedColour(`p-gold-${mode}`),
			usage: 'United Australia / Country Lib (NT)'
		},
		ptybrown: {
			colour: getNamedColour(`p-brown-${mode}`),
			usage: "Katter's Australia Party / Shooters, Fishers & Farmers"
		},
		ptylightblue: {
			colour: getNamedColour(`p-lightblue-${mode}`),
			usage: 'Family First / Christian Democrats'
		},
		ptyaqua: { colour: getNamedColour(`p-aqua-${mode}`), usage: 'Territory Alliance (NT)' },
		ptyorange: { colour: getNamedColour(`p-orange-${mode}`), usage: 'One Nation' },
		ptypurple: { colour: getNamedColour(`p-purple-${mode}`), usage: 'Rarely used' }
	};
};

/**
 * Generate an array of colour names that define a sequential palette with the given params.
 *
 * @param variant The colour variant of the palette to generate
 * @param mode The colour mode (light/dark) of the palette to generate
 * @returns An array of colour names
 */
const getSequentialPalette = (
	variant: SequentialPalette = SequentialPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	const palette: SequentialColourName[] = [`sd-0-${mode}`];
	const numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9'
	];
	numbers.forEach((d) => {
		palette.push(`s-${variant}-${d}-${mode}`);
	});
	palette.push(`so-10-${mode}`);
	return palette;
};

/**
 * Generate an array of colour names that define an ordinal palette with the given params.
 *
 * @param variant The colour variant of the palette to generate
 * @param mode The colour mode (light/dark) of the palette to generate
 * @returns An array of colour names
 */
const getOrdinalPalette = (
	variant: OrdinalPalette = OrdinalPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	const palette: OrdinalColourName[] = [];
	const numbers: ['1', '2', '3', '4'] = ['1', '2', '3', '4'];
	numbers.forEach((d) => {
		palette.push(`o-${variant}-${d}-${mode}`);
	});
	palette.push(`so-10-${mode}`);
	return palette;
};

/**
 * Generate an array of colour names that define a divergent palette with the given params.
 *
 * @param variant The colour variant of the palette to generate
 * @param mode The colour mode (light/dark) of the palette to generate
 * @returns An array of colour names
 */
const getDivergentPalette = (
	variant: DivergentPalette = DivergentPalette.RedBlue,
	mode: ColourMode = ColourMode.Light
) => {
	const [left, right] = variant;
	const palette: DivergentColourName[] = [];
	const numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10'
	];
	numbers.reverse().forEach((d) => {
		palette.push(`d-${left}-${d}-${mode}`);
	});
	palette.push(`sd-0-${mode}`);
	numbers.reverse().forEach((d) => {
		palette.push(`d-${right}-${d}-${mode}`);
	});
	return palette;
};

/**
 * Get an interpolator function for a sequential continuous palette with the given params.
 *
 * @param variant The colour variant the returned interpolator should use
 * @param mode The colour mode (light/dark) the returned interpolator should use
 * @returns An interpolator function that takes a number (0-1) and returns a colour in `rgb(x,y,z)` format
 */
export const getSequentialContinuousPaletteInterpolator = (
	variant: SequentialPalette = SequentialPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	// This is effectively a light weight linear scale (see: https://github.com/d3/d3-interpolate/blob/main/README.md#piecewise)
	return piecewise(interpolateRgb, getSequentialPalette(variant, mode).map(getNamedColour));
};

/**
 * Get an array of colours that define a sequential stepped palette with the given params.
 *
 * @param steps The number of steps [2-10] to use for the generated sequential stepped palette
 * @param variant The colour variant the returned palette should use
 * @param mode The colour mode (light/dark) the returned palette should use
 * @returns An array of colour strings in `rgb(x,y,z)` format
 */
export const getSequentialSteppedPalette = (
	steps: number,
	variant: SequentialPalette = SequentialPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	const MIN_STEPS = 2;
	const MAX_STEPS = 10;
	if (steps > MAX_STEPS || steps < MIN_STEPS) {
		throw new Error('Stepped palettes can have between two and ten steps.');
	}

	const gradient = getSequentialPalette(variant, mode)
		.slice(0, Math.min(steps + 6, MAX_STEPS + 1))
		.map(getNamedColour);

	const interpolator = piecewise(interpolateRgb, gradient);
	const palette = new Array<string>(steps + 1).fill(undefined).map((_, i) => {
		const pct = i / steps;
		return interpolator(pct);
	});
	return palette;
};

/**
 * Get an ordinal categorical palette with the given params.
 *
 * @param steps The number of steps (2-5) to use for the generated ordinal palette
 * @param variant The colour variant the returned palette should use
 * @param mode The colour mode (light/dark) the returned palette should use
 * @returns An array of colour strings in `rgb(x,y,z)` format
 */
export const getOrdinalCategoricalPalette = (
	steps: number,
	variant: OrdinalPalette = OrdinalPalette.Blue,
	mode: ColourMode = ColourMode.Light
): string[] => {
	const MAX_STEPS = 5;
	const MIN_STEPS = 2;
	if (steps < MIN_STEPS || steps > MAX_STEPS) {
		throw new Error(
			`Cannot generate ordinal categorical palette of size ${steps}. The palette size should be 2-5.`
		);
	}

	const gradient = getOrdinalPalette(variant, mode)
		.slice(0, Math.min(MAX_STEPS, steps + 1))
		.map(getNamedColour);

	const interpolator = piecewise(interpolateRgb, gradient);

	const palette = new Array<string>(steps).fill(undefined).map((_, i) => {
		const pct = i / (steps - 1);
		return interpolator(pct);
	});
	return palette;
};

/**
 * Get an interpolator function for a divergent continuous palette with the given params.
 *
 * @param variant The colour variant the returned interpolator should use
 * @param mode The colour mode (light/dark) the returned interpolator should use
 * @returns An interpolator function that takes a number (0-1) and returns a colour in `rgb(x,y,z)` format
 */
export const getDivergentContinuousPaletteInterpolator = (
	variant: DivergentPalette = DivergentPalette.RedBlue,
	mode: ColourMode = ColourMode.Light
) => {
	// This is effectively a light weight linear scale (see: https://github.com/d3/d3-interpolate/blob/main/README.md#piecewise)
	return piecewise(interpolateRgb, getDivergentPalette(variant, mode).map(getNamedColour));
};

/**
 * Get an array of colours that define a divergent stepped palette with the given params.
 *
 * @param steps The number of steps [1-10] to use for each side of the generated divergent stepped palette
 * @param variant The colour variant the returned palette should use
 * @param mode The colour mode (light/dark) the returned palette should use
 * @returns An array of colour strings in `rgb(x,y,z)` format
 */
export const getDivergentSteppedPalette = (
	steps: number,
	variant: DivergentPalette = DivergentPalette.RedBlue,
	mode: ColourMode = ColourMode.Light
) => {
	const MIN_STEPS = 1;
	const MAX_STEPS = 10;
	if (steps > MAX_STEPS || steps < MIN_STEPS) {
		throw new Error(
			'Divergent stepped palettes can have between one and nine steps (in each direction).'
		);
	}

	const OFFSET = 7;

	const gradient = getDivergentPalette(variant, mode).slice(
		Math.max(0, MAX_STEPS - steps - OFFSET),
		Math.min(MAX_STEPS + steps + OFFSET + 1, MAX_STEPS * 2 + 1)
	);
	const gradientColours = gradient.map(getNamedColour);
	const interpolator = piecewise(interpolateRgb, gradientColours);
	const palette = new Array<string>(steps * 2 + 1).fill(undefined).map((_, i) => {
		const pct = i / (steps * 2);
		return interpolator(pct);
	});

	return palette;
};
