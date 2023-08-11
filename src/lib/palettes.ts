import { getNamedColour } from './colours.js';
import type { ColourName } from './colours.js';
import { piecewise, interpolateRgb } from 'd3-interpolate';

export enum ColourMode {
	Light = 'l',
	Dark = 'd'
}

export enum SequentialPalette {
	Blue = 'blue',
	Red = 'red',
	Green = 'green',
	Purple = 'purple'
}

export enum OrdinalPalette {
	Blue = 'blue',
	Red = 'red',
	Green = 'green',
	Purple = 'purple'
}

export enum DivergentPalette {
	RedBlue = 'red-blue',
	GreenPurple = 'green-purple',
	PurpleRed = 'purple-red'
}

export const isSequentialPalette = (palette: string): palette is SequentialPalette =>
	Object.values<string>(SequentialPalette).includes(palette);

export const isDivergentPalette = (palette: string): palette is DivergentPalette =>
	Object.values<string>(DivergentPalette).includes(palette);

export type CategoricalPaletteName = 'gender' | 'sentiment' | 'political';
export type ColourWithUsage = { colour: string; usage: string };

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

export const getEmphasisColours = () => ({
	emphasise: getNamedColour('orange-1'),
	deemphasise: getNamedColour('grey-1')
});

export const getGenderPalette = (): Record<string, ColourWithUsage> => {
	return {
		nonbinary: { colour: getNamedColour('taupe-2'), usage: 'Non-binary' },
		female: { colour: getNamedColour('purple-2'), usage: 'Female' },
		male: { colour: getNamedColour('blue-1'), usage: 'Male' }
	};
};

export const getSentimentPalette = (): Record<string, ColourWithUsage> => {
	return {
		positive: { colour: getNamedColour('aqua-1'), usage: 'Positive / Up' },
		negative: { colour: getNamedColour('red-1'), usage: 'Negative / Down' },
		neutral: { colour: getNamedColour('grey-1'), usage: 'Neutral / Steady' }
	};
};
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

const getSequentialPalette = (
	variant: SequentialPalette = SequentialPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	const palette: string[] = [`sd-0-${mode}`];
	for (let i = 1; i < 10; i++) {
		palette.push(`s-${variant}-${i}-${mode}`);
	}
	palette.push(`s-10-${mode}`);
	return palette;
};

const getOrdinalPalette = (
	variant: OrdinalPalette = OrdinalPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	const palette: string[] = [];
	for (let i = 1; i < 5; i++) {
		palette.push(`o-${variant}-${i}-${mode}`);
	}
	palette.push(`o-5-${mode}`);
	return palette;
};

const getDivergentPalette = (
	variant: DivergentPalette = DivergentPalette.RedBlue,
	mode: ColourMode = ColourMode.Light
) => {
	const [left, right] = variant.split('-');
	const palette: string[] = [];
	let i = 10;
	for (; i > 0; i--) {
		palette.push(
			`d-${left}-${i}-${mode}${left === 'purple' && mode === ColourMode.Dark ? '-2' : ''}`
		);
	}
	palette.push(`sd-0-${mode}`);
	for (i++; i < 11; i++) {
		palette.push(
			`d-${right}-${i}-${mode}${right === 'purple' && mode === ColourMode.Dark ? '-1' : ''}`
		);
	}
	return palette;
};

export const getSequentialContinuousPaletteInterpolator = (
	variant: SequentialPalette = SequentialPalette.Blue,
	mode: ColourMode = ColourMode.Light
) => {
	// This is effectively a light weight linear scale (see: https://github.com/d3/d3-interpolate/blob/main/README.md#piecewise)
	return piecewise(interpolateRgb, getSequentialPalette(variant, mode).map(getNamedColour));
};

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

export const getDivergentContinuousPaletteInterpolator = (
	variant: DivergentPalette = DivergentPalette.RedBlue,
	mode: ColourMode = ColourMode.Light
) => {
	// This is effectively a light weight linear scale (see: https://github.com/d3/d3-interpolate/blob/main/README.md#piecewise)
	return piecewise(interpolateRgb, getDivergentPalette(variant, mode).map(getNamedColour));
};

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
