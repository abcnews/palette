<script type="ts">
	import { onMount } from 'svelte';

	export let data: { date: Date; value: number }[];
	export let scale: (i: number) => number;

	let canvas: HTMLCanvasElement;

	const draw = (ctx) => {
		var i = 0;

		for (const d of data) {
			// console.log(d.value);
			// console.log('scale(d.value) :>> ', scale(d.value));
			ctx.fillStyle = scale(d.value);
			ctx.fillRect(i++, 0, 1, 1);
		}
	};

	onMount(() => {
		const ctx = canvas.getContext('2d');
		draw(ctx);
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
