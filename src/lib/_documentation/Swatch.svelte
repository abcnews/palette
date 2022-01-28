<script type="ts">
	export let colour: string;
</script>

<div style:background={colour} />

<style>
	div {
		--swatch-size: 30px;
		width: var(--swatch-size);
		height: var(--swatch-size);
		border-radius: 50%;
		margin: auto;
	}
</style>
