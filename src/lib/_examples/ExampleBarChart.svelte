<script lang="ts">
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
