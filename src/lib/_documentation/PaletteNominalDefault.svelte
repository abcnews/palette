<script type="ts">
	import { getNominalCategoricalPalette } from '$lib/palettes';
	import SwatchGrid from '$lib/_documentation/SwatchGrid.svelte';
</script>

<SwatchGrid palette={getNominalCategoricalPalette(5)} showEmphasisColours={true} />
