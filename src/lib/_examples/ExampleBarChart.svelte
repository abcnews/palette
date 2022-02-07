<script type="ts">
	import { LayerCake, Html, Svg } from 'layercake';
	import AxisX from '$lib/_chart-components/AxisX.svelte';
	import BarChart from '$lib/_chart-components/BarChart.svelte';
	import ChartContainer from '$lib/_chart-components/ChartContainer.svelte';

	// Define some data
	const points = [
		{ label: 'Sydney', value: 0 },
		{ label: 'Melbourne', value: 10 },
		{ label: 'Adelaide', value: 20 },
		{ label: 'Brisbane', value: 30 },
		{ label: 'Perth', value: 40 }
	];
</script>

<ChartContainer>
	<BarChart data={points} />
</ChartContainer>

<style>
	/*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
	.chart-container {
		width: 100%;
		height: 300px;
	}
</style>
