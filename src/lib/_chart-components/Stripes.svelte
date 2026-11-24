<script lang="ts">
	import { onMount } from 'svelte';

	export let data: { date: Date; value: number }[];
	export let scale: (i: number) => string;

	let canvas: HTMLCanvasElement;

	/** Paints one pixel-wide stripe per data point */
	const draw = (ctx: CanvasRenderingContext2D | null, scale: (i: number) => string) => {
		if (!ctx) return;
		data.forEach((d, i) => {
			ctx.fillStyle = scale(d.value);
			ctx.fillRect(i, 0, 1, 1);
		});
	};

	$: canvas && draw(canvas.getContext('2d'), scale);

	onMount(() => {
		const ctx = canvas.getContext('2d');
		draw(ctx, scale);
	});
</script>

<canvas bind:this={canvas} width={data.length} height="1" />

<style>
	canvas {
		margin: 0 -14px;
		width: calc(100% + 28px);
		height: 40px;
		image-rendering: pixelated;
	}
</style>
