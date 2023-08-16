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
type GreenPurple = ['green', 'purple'];

/** A purple/red divergent palette combination */
type PurpleRed = ['purple', 'red'];

/** A type representing a map of divergent palette names to values */
export type DivergentPaletteOptions = {
	RedBlue: RedBlue;
	GreenPurple: GreenPurple;
	PurpleRed: PurpleRed;
};

/** Divergent palette names */
export type DivergentPalette = RedBlue | GreenPurple | PurpleRed;

/** A map of divergent palette colour combination names to values */
export const DivergentPalette: DivergentPaletteOptions = {
	RedBlue: ['red', 'blue'],
	GreenPurple: ['green', 'purple'],
	PurpleRed: ['purple', 'red']
};

/**
 * A type representing a mapping of colour value (hex string) to a description
 * of its meaning in a given context.
 */
export type ColourWithUsage = { colour: string; usage: string };

/**
 * Get a colour palette suitable for use visualisation categorical data.
 *
 * @param n The number of categories [1-7] for which to get a colour palette
 * @returns An array of colour values (in hex format)
 */
export const getNominalCategoricalPalette = (n: number): string[] => {
	const defaultPalette: ColourName[] = ['blue-1', 'blue-2', 'green-1', 'blue-2', 'grey-4'];
	const extendedPalette: ColourName[] = [
		'blue-1',
		'red-1',
		'blue-4',
		'purple-1',
		'pink-1',
		'slate-2',
		'green-2'
	];

	if (n <= defaultPalette.length) {
		return defaultPalette.slice(0, n).map(getNamedColour);
	}

	if (n <= extendedPalette.length) {
		return extendedPalette.slice(0, n).map(getNamedColour);
	}

	throw new Error(
		`Cannot generate nominal categorical palette of size ${n}. The maximum palette size is ${extendedPalette.length}.`
	);
};

/**
 * Get colours suitable for emphasising or deemphasising elements in a data visualisation
 *
 * @returns An object with `emphasise` and `deemphasise` keys and hex colour values
 */
export const getEmphasisColours = () => ({
	emphasise: getNamedColour('orange-1'),
	deemphasise: getNamedColour('grey-1')
});

/**
 * Get a colour palette suitable for visualising gender
 *
 * @returns An object defining a palette suitable for visualising gender
 */
export const getGenderPalette = (): Record<string, ColourWithUsage> => {
	return {
		nonbinary: { colour: getNamedColour('taupe-2'), usage: 'Non-binary' },
		female: { colour: getNamedColour('purple-2'), usage: 'Female' },
		male: { colour: getNamedColour('blue-1'), usage: 'Male' }
	};
};

/**
 * Get a colour palette suitable for visualising sentiment
 *
 * @returns An object defining a colour palette suitable for visualising sentiment
 */
export const getSentimentPalette = (): Record<string, ColourWithUsage> => {
	return {
		positive: { colour: getNamedColour('aqua-1'), usage: 'Positive / Up' },
		negative: { colour: getNamedColour('red-1'), usage: 'Negative / Down' },
		neutral: { colour: getNamedColour('grey-1'), usage: 'Neutral / Steady' }
	};
};

/**
 * Get a colour palette suitable for visualising political parties.
 *
 * @returns An object defining a colour palette suitable for visualising political parties
 */
export const getPoliticalPalette = (): Record<string, ColourWithUsage> => {
	return {
		ptyred: { colour: getNamedColour('ptyred'), usage: 'Labor' },
		ptyblue: { colour: getNamedColour('ptyblue'), usage: 'Liberal/Coalition (except Nationals)' },
		ptyblack: { colour: getNamedColour('ptyblack'), usage: 'Independents, others' },
		ptygreen: { colour: getNamedColour('ptygreen'), usage: 'Nationals' },
		ptylightgreen: { colour: getNamedColour('ptylightgreen'), usage: 'Greens' },
		ptygold: { colour: getNamedColour('ptygold'), usage: 'United Australia / Country Lib (NT)' },
		ptybrown: {
			colour: getNamedColour('ptybrown'),
			usage: "Katter's Australia Party / Shooters, Fishers & Farmers"
		},
		ptylightblue: {
			colour: getNamedColour('ptylightblue'),
			usage: 'Family First / Christian Democrats'
		},
		ptyaqua: { colour: getNamedColour('ptyaqua'), usage: 'Territory Alliance (NT)' },
		ptyorange: { colour: getNamedColour('ptyorange'), usage: 'One Nation' },
		ptypurple: { colour: getNamedColour('ptypurple'), usage: 'Rarely used' }
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
	palette.push(`s-10-${mode}`);
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
	palette.push(`o-5-${mode}`);
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
		if (left === 'purple') {
			if (mode === ColourMode.Dark) {
				palette.push(`d-${left}-${d}-${mode}-2`);
			} else {
				palette.push(`d-${left}-${d}-${mode}`);
			}
		} else {
			palette.push(`d-${left}-${d}-${mode}`);
		}
	});
	palette.push(`sd-0-${mode}`);
	numbers.reverse().forEach((d) => {
		if (right === 'purple') {
			if (mode === ColourMode.Dark) {
				palette.push(`d-${right}-${d}-${mode}-1`);
			} else {
				palette.push(`d-${right}-${d}-${mode}`);
			}
		} else {
			palette.push(`d-${right}-${d}-${mode}`);
		}
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
