import { DivergentPalette, SequentialPalette } from './palettes.js';

export const isSequentialPalette = (palette: string | string[]): palette is SequentialPalette =>
	typeof palette === 'string' && Object.values<string>(SequentialPalette).includes(palette);

export const isDivergentPalette = (palette: string | string[]): palette is DivergentPalette =>
	Array.isArray(palette) &&
	!!Object.values<string[]>(DivergentPalette).find(
		(d) => d[0] === palette[0] && d[1] === palette[1]
	);
