<script lang="ts">
	import { onMount } from 'svelte';
	import { createContinuousScale } from '$lib/scales.js';
	import type { ColourMode, DivergentPalette, SequentialPalette } from '$lib/palettes.js';
	import type { ScaleDiverging, ScaleSequential } from 'd3-scale';
	import { isDivergentPalette } from '$lib/utils.js';

	export let orientation: 'v' | 'h' = 'h';

	export let palette: DivergentPalette | SequentialPalette;
	export let mode: ColourMode;

	let scale: ScaleDiverging<string> | ScaleSequential<string>;

	$: scale = createContinuousScale(
		palette,
		mode,
		isDivergentPalette(palette) ? [0, 500, 1000] : [0, 1000]
	);

	let canvas: HTMLCanvasElement;

	const draw = (ctx, scale) => {
		var i = 0;

		for (var n = 0; n < 1000; n++) {
			ctx.fillStyle = scale(n);
			orientation === 'h' ? ctx.fillRect(n, 0, 1, 10) : ctx.fillRect(0, n, 10, 1);
		}
	};

	$: canvas && draw(canvas.getContext('2d'), scale);

	onMount(() => {
		const ctx = canvas.getContext('2d');
		draw(ctx, scale);
	});
</script>

<canvas
	class={`${orientation} swatch`}
	bind:this={canvas}
	width={orientation === 'v' ? 10 : 1000}
	height={orientation === 'h' ? 10 : 1000}
/>

<style>
	.swatch {
		border-radius: 15px;
	}
	.v {
		height: 100%;
		width: 30px;
	}
	.h {
		width: 100%;
		height: 30px;
		border-radius: 15px;
	}
</style>
