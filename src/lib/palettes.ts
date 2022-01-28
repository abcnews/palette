import { getNamedColour } from '$lib/colours';
import type { ColourName } from '$lib/colours';
import { piecewise, interpolateRgb } from 'd3-interpolate';

type ColourVariantName = 'blue' | 'red' | 'green' | 'purple';
type ColourCombinationVariantName = ['red', 'blue'] | ['green', 'purple'] | ['purple', 'red'];
type CategoricalPaletteName = 'gender' | 'sentiment' | 'political';
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

export const getOrdinalCategoricalPalette = (
	n: number,
	variant: ColourVariantName = 'blue'
): string[] => {
	if (n < 2 || n > 5) {
		throw new Error(
			`Cannot generate ordinal categorical palette of size ${n}. The palette size should be 2-5.`
		);
	}

	const palettes: Record<ColourVariantName, ColourName[][]> = {
		blue: [
			['sequential-aa-blue-2', 'sequential-aa-blue-4'],
			['sequential-aa-blue-1', 'sequential-aa-blue-3', 'sequential-black-10'],
			[
				'sequential-aa-blue-1',
				'sequential-aa-blue-2',
				'sequential-aa-blue-4',
				'sequential-black-10'
			],
			[
				'sequential-aa-blue-1',
				'sequential-aa-blue-2',
				'sequential-aa-blue-3',
				'sequential-aa-blue-4',
				'sequential-black-10'
			]
		],
		red: [
			['sequential-aa-red-2', 'sequential-aa-red-4'],
			['sequential-aa-red-1', 'sequential-aa-red-3', 'sequential-black-10'],
			['sequential-aa-red-1', 'sequential-aa-red-2', 'sequential-aa-red-4', 'sequential-black-10'],
			[
				'sequential-aa-red-1',
				'sequential-aa-red-2',
				'sequential-aa-red-3',
				'sequential-aa-red-4',
				'sequential-black-10'
			]
		],
		green: [
			['sequential-aa-green-2', 'sequential-aa-green-4'],
			['sequential-aa-green-1', 'sequential-aa-green-3', 'sequential-black-10'],
			[
				'sequential-aa-green-1',
				'sequential-aa-green-2',
				'sequential-aa-green-4',
				'sequential-black-10'
			],
			[
				'sequential-aa-green-1',
				'sequential-aa-green-2',
				'sequential-aa-green-3',
				'sequential-aa-green-4',
				'sequential-black-10'
			]
		],
		purple: [
			['sequential-aa-purple-2', 'sequential-aa-purple-4'],
			['sequential-aa-purple-1', 'sequential-aa-purple-3', 'sequential-black-10'],
			[
				'sequential-aa-purple-1',
				'sequential-aa-purple-2',
				'sequential-aa-purple-4',
				'sequential-black-10'
			],
			[
				'sequential-aa-purple-1',
				'sequential-aa-purple-2',
				'sequential-aa-purple-3',
				'sequential-aa-purple-4',
				'sequential-black-10'
			]
		]
	};

	return palettes[variant][n - 2].map(getNamedColour);
};

export const getNamedCategoricalPalette = (name: CategoricalPaletteName) => {
	switch (name) {
		case 'gender':
			return getGenderPalette();
		case 'sentiment':
			return getSentimentPalette();
		case 'political':
			return getPoliticalPalette();
	}
};

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

/* Ordianl palettes */
const ordinalPalettes: Record<ColourVariantName, ColourName[]> = {
	blue: [
		'sequential-blue-1',
		'sequential-blue-2',
		'sequential-blue-3',
		'sequential-blue-4',
		'sequential-blue-5',
		'sequential-blue-6',
		'sequential-blue-7',
		'sequential-blue-8',
		'sequential-blue-9'
	],
	red: [
		'sequential-red-1',
		'sequential-red-2',
		'sequential-red-3',
		'sequential-red-4',
		'sequential-red-5',
		'sequential-red-6',
		'sequential-red-7',
		'sequential-red-8',
		'sequential-red-9'
	],
	green: [
		'sequential-green-1',
		'sequential-green-2',
		'sequential-green-3',
		'sequential-green-4',
		'sequential-green-5',
		'sequential-green-6',
		'sequential-green-7',
		'sequential-green-8',
		'sequential-green-9'
	],
	purple: [
		'sequential-purple-1',
		'sequential-purple-2',
		'sequential-purple-3',
		'sequential-purple-4',
		'sequential-purple-5',
		'sequential-purple-6',
		'sequential-purple-7',
		'sequential-purple-8',
		'sequential-purple-9'
	]
};

export const getContinuousPaletteInterpolator = (variant: ColourVariantName = 'blue') => {
	const palette: string[] = ['sequential-grey-0'];
	for (let i = 1; i < 10; i++) {
		palette.push(`sequential-${variant}-${i}`);
	}
	palette.push('sequential-black-10');
	// This isn't really an interpolator, but a 'light weight linear scale' (see: https://github.com/d3/d3-interpolate/blob/main/README.md#piecewise)

	return piecewise(interpolateRgb, palette.map(getNamedColour));
};

export const getDivergentPaletteInterpolator = (
	variant: ColourCombinationVariantName = ['red', 'blue']
) => {
	const palette: string[] = [];
	let i = 9;
	for (; i > 0; i--) {
		palette.push(`sequential-${variant[0]}-${i}`);
	}
	palette.push('sequential-grey-0');
	for (; i < 10; i++) {
		palette.push(`sequential-${variant[1]}-${i}`);
	}

	return piecewise(interpolateRgb, palette.map(getNamedColour));
};