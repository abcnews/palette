import {
	getDivergentPaletteInterpolator,
	getContinuousPaletteInterpolator,
	isDivergentPalette,
	isSequentialPalette
} from './palettes.js';
import type { SequentialPalette, DivergentPalette } from './palettes.js';
import { scaleDiverging, scaleSequential } from 'd3-scale';

const isCouple = (tupple: number[]): tupple is [number, number] => tupple.length === 2;
const isTriple = (tupple: number[]): tupple is [number, number, number] => tupple.length === 3;

/**
 * A convenience wrapper around d3's scaleDiverging and scaleSequential for creating
 * scales with diverging or sequential palettes and a supplied domain.
 */
export const createContinuousScale = (
	palette: SequentialPalette | DivergentPalette,
	domain: [number, number] | [number, number, number]
) => {
	if (isDivergentPalette(palette)) {
		if (isTriple(domain)) {
			return scaleDiverging<string>(domain, getDivergentPaletteInterpolator(palette));
		} else {
			throw new Error('Divergent palettes require a domain of length 3.');
		}
	}
	if (isSequentialPalette(palette)) {
		if (isCouple(domain)) {
			return scaleSequential<string>(domain, getContinuousPaletteInterpolator(palette));
		} else {
			throw new Error('Sequential palettes require a domain of length 2.');
		}
	}
	throw new Error(`Unknown palette type: ${palette}`);
};
