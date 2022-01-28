<svelte:head>
	<link rel="stylesheet" href="/fonts.css" />
</svelte:head>

<div class="wrapper">
	<h1>ABC News Digital Data Visualisation Themes</h1>
	<slot />
</div>

<style>
	:global(body, html) {
		font-family: ABCSans, sans-serif;
		background-color: #fff;
		font-size: 16px;
		line-height: 1.5;
	}

	.wrapper {
		max-width: 1000px;
		margin: 0 auto;
		padding: 30px;
	}
</style>
