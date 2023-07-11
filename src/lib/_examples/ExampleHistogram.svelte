<script lang="ts">
	import { LayerCake, Svg } from 'layercake';
	import { scaleBand } from 'd3-scale';
	import { extent as getExtent } from 'd3-array';
	import AxisX from '$lib/_chart-components/AxisX.svelte';

	import ChartContainer from '$lib/_chart-components/ChartContainer.svelte';
	import Histogram from '$lib/_chart-components/Histogram.svelte';

	// Define some data
	const data = [
		{ price: 5000, sales: 0 },
		{ price: 10000, sales: 10 },
		{ price: 16000, sales: 20 },
		{ price: 2000, sales: 30 },
		{ price: 1000, sales: 40 }
	];

	const extent = getExtent(data, (d) => d.sales);
</script>

<ChartContainer>
	<div class="plot-container">
		<LayerCake
			{data}
			x="sales"
			y="price"
			xScale={scaleBand().paddingInner(0.02).round(true)}
			xDomain={extent}
		>
			<Svg>
				<Histogram />
			</Svg>
			<Svg>
				<AxisX />
			</Svg>
		</LayerCake>
	</div>
</ChartContainer>

<style>
	/*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
	.plot-container {
		height: 300px;
	}
</style>
