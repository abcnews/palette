import {
	getDivergentContinuousPaletteInterpolator,
	getSequentialContinuousPaletteInterpolator
} from './palettes.js';
import { isDivergentPalette, isSequentialPalette } from './utils.js';
import type { SequentialPalette, DivergentPalette, ColourMode } from './palettes.js';
import { scaleDiverging, scaleSequential } from 'd3-scale';

const isCouple = (tupple: number[]): tupple is [number, number] => tupple.length === 2;
const isTriple = (tupple: number[]): tupple is [number, number, number] => tupple.length === 3;

/**
 * A convenience wrapper around d3's `scaleDiverging` and `scaleSequential` for creating
 * scales with {@link getDivergentContinuousPaletteInterpolator | diverging} or 
 * {@link getSequentialContinuousPaletteInterpolator | sequential} palettes and a supplied domain. 
 * For a sequential scale, the domain will usually be the minimum and maximum values in the input
 * data. For diverging scales, the domain will usually be minimum, neutral, maximum values in the
 * input data.
 * 
 * @param palette The colour and type of palette for which to generate a scale function
 * @param mode The page colour mode (light/dark) the generated scale function should be suitable for
 * @param domain The domain used by the scale function.
 * 
 * @see [d3 diverging scales](https://observablehq.com/@d3/diverging-scales)
 * @see [d3 sequential scales](https://observablehq.com/@d3/sequential-scales)
 * @group Sequential Palettes
 * @group Divergent Palettes
 */
export const createContinuousScale = (
	palette: SequentialPalette | DivergentPalette,
	mode: ColourMode,
	domain: [number, number] | [number, number, number]
) => {
	if (isDivergentPalette(palette)) {
		if (isTriple(domain)) {
			return scaleDiverging<string>(
				domain,
				getDivergentContinuousPaletteInterpolator(palette, mode)
			);
		} else {
			throw new Error('Divergent palettes require a domain of length 3.');
		}
	}
	if (isSequentialPalette(palette)) {
		if (isCouple(domain)) {
			return scaleSequential<string>(
				domain,
				getSequentialContinuousPaletteInterpolator(palette, mode)
			);
		} else {
			throw new Error('Sequential palettes require a domain of length 2.');
		}
	}
	throw new Error(`Unknown palette type: ${palette}`);
};
