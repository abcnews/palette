<script lang="ts">
	import { ColourMode, DivergentPalette, getDivergentSteppedPalette } from '$lib/palettes.js';
	import { colourLuminance } from '$lib/utils.js';
	import { color } from 'd3-color';
	export let palette: DivergentPalette;
	export let mode: ColourMode;

	$: lengths = new Array<string[]>(10)
		.fill([''])
		.map((_, i) => getDivergentSteppedPalette(10 - i, palette, mode));

	let height = 50;
	let width = 90;
	let cornerRadius = 5;
	let gap = 20;
	let margin = 55;
	let svgHeight = height * 2 + gap + margin * 2;
</script>

{#each lengths as colours, j}
	{@const svgWidth = Math.floor(colours.length / 2) * width + height + gap / 2 + margin}
	<div class="chart">
		<div class="label">{colours.length - 1} Steps <br />+ 0 (none)</div>
		<svg
			width={svgWidth}
			height={svgHeight}
			viewBox="0 0 {svgWidth} {svgHeight}"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<marker
					id="arrow-{j}"
					viewBox="0 0 {5} {10}"
					refX={3 / 2 + 1}
					refY={6 / 2}
					markerWidth={5}
					markerHeight={10}
					orient="auto-start-reverse"
				>
					<path stroke="black" fill="none" d="M 0 0 L 3 3 L 0 6" />
				</marker></defs
			>
			<g transform="translate(-{margin}, {margin})">
				{#each colours as colourStr, i}
					{@const secondHalf = i >= (colours.length + 1) / 2}
					{@const x =
						svgWidth -
						width * ((secondHalf ? i + 1 : colours.length - i) % ((colours.length + 1) / 2)) -
						height -
						gap / 2}
					{@const y = secondHalf ? height + gap : 0}
					{#if i === 0 || i === colours.length - 1}
						<g transform="translate({x},{y})">
							<path
								d="M{cornerRadius} 0 L{width} 0 L{width} {height} L{cornerRadius} {height} A {cornerRadius} {cornerRadius} 0 0 1 0 {height -
									cornerRadius} L 0 {cornerRadius} A {cornerRadius} {cornerRadius} 0 0 1 {cornerRadius} 0 Z"
								fill={colourStr}
							/>
							<text
								x={width / 2}
								y={height / 2}
								fill={colourLuminance(colourStr) > 0.179 ? '#000' : '#fff'}
								font-size="0.8em"
								text-anchor="middle"
								dominant-baseline="central">{color(colourStr)?.formatHex()}</text
							>
						</g>
					{:else if i === Math.floor(colours.length / 2)}
						<g transform="translate({x},{y})">
							<path
								d="M 0 0 A {(height * 2 + gap) / 2} {(height * 2 + gap) / 2} 0 0 1 0 {height * 2 +
									gap} L 0 {height + gap} A {gap / 2} {gap / 2} 1 0 0 0 {height} Z"
								fill={colourStr}
							/>
							<text
								x={(height + gap) / 2}
								y={height + gap / 2}
								fill={colourLuminance(colourStr) > 0.179 ? '#000' : '#fff'}
								font-size="0.8em"
								text-anchor="middle"
								dominant-baseline="central">{color(colourStr)?.formatHex()}</text
							>
						</g>
					{:else}
						<g transform="translate({x},{y})">
							<rect {width} {height} fill={colourStr} />
							<text
								x={width / 2}
								y={height / 2}
								fill={colourLuminance(colourStr) > 0.179 ? '#000' : '#fff'}
								font-size="0.8em"
								text-anchor="middle"
								dominant-baseline="central">{color(colourStr)?.formatHex()}</text
							>
						</g>
					{/if}
				{/each}
			</g>
			<text
				fill="black"
				font-weight="bold"
				x={svgWidth - margin / 2}
				y={svgHeight / 2}
				text-anchor="middle"
				dominant-baseline="central">None</text
			>
			<text
				fill="black"
				font-weight="bold"
				x={width / 2}
				y={margin / 2}
				text-anchor="middle"
				dominant-baseline="central">Most</text
			>
			<text
				fill="black"
				font-weight="bold"
				x={width / 2}
				y={svgHeight - margin / 2}
				text-anchor="middle"
				dominant-baseline="central">Most</text
			>

			<path
				fill="none"
				stroke="black"
				stroke-width="2"
				marker-end="url(#arrow-{j})"
				marker-start="url(#arrow-{j})"
				stroke-dasharray="{svgWidth -
					margin -
					height -
					gap / 2 -
					width +
					(2 * Math.PI * (height + gap / 2 + margin / 2)) / 4 -
					10 +
					3} 20"
				d="M {width - 3} {margin / 2} 
			   L {svgWidth - margin - height - gap / 2} {margin / 2} 
				 A {height + gap / 2 + margin / 2} {height + gap / 2 + margin / 2} 0 0 1 {svgWidth -
					margin -
					height -
					gap / 2} {svgHeight - margin / 2}
				 L {width - 3} {svgHeight - margin / 2}"
			/>
		</svg>
	</div>
{/each}

<style>
	svg {
		display: block;
	}
	.chart {
		display: flex;
		flex-direction: row;
		justify-content: end;
	}
	.label {
		align-self: center;
		min-width: 7em;
		font-weight: bold;
		font-size: 1.1em;
	}
</style>
