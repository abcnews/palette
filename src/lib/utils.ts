import { DivergentPalette, SequentialPalette } from './palettes.js';
import { color } from 'd3-color';

export const isSequentialPalette = (palette: string | string[]): palette is SequentialPalette =>
	typeof palette === 'string' && Object.values<string>(SequentialPalette).includes(palette);

export const isDivergentPalette = (palette: string | string[]): palette is DivergentPalette =>
	Array.isArray(palette) &&
	!!Object.values<string[]>(DivergentPalette).find(
		(d) => d[0] === palette[0] && d[1] === palette[1]
	);

export const colourLuminance = (c: string) => {
	const rgb = color(c);
	const l = ['r', 'g', 'b']
		.map((d) => {
			const ratio = rgb[d] / 255;
			const v = ratio <= 0.04045 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
			return v;
		})
		.reduce((t, d, i, arr) => {
			switch (i) {
				case 0:
					return t + 0.2126 * d;
				case 1:
					return t + 0.7152 * d;
				case 2:
					return t + 0.0722 * d;
			}
		}, 0);
	return l;
};
