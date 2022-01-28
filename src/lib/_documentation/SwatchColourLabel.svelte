<script type="ts">
	export let name: string;
	export let hex: string;
</script>

<h3>{name}</h3>
<span>{hex}</span>

<style>
	h3 {
		font-size: 1rem;
		font-weight: bold;
		white-space: nowrap;
		margin: 0;
	}

	span {
		font-size: 0.8rem;
		font-weight: normal;
	}
</style>
