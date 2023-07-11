<script lang="ts">
	export let title = 'Chart title';
	export let description = 'Chart description';
	export let notes = 'Chart notes';
	export let attribution = 'Chart attribution';
</script>

<div class="chart-container">
	<h1>{title}</h1>
	<p class="description">{description}</p>
	<div class="plot-container">
		<slot />
	</div>
	<p class="notes">{notes}</p>
	<p class="attribution">{attribution}</p>
</div>

<style>
	.chart-container {
		padding: 10px;
		background: #fff;
	}

	.plot-container {
		margin: 1em 0;
	}

	h1 {
		font-size: 1.25rem;
		font-weight: 900;
	}

	.notes {
		font-style: italic;
		line-height: 18px;
		font-size: 13px;
	}

	.attribution {
		font-size: 12px;
		color: #aaa;
	}
</style>
