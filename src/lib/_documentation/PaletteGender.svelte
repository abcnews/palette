<script lang="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getGenderPalette } from '$lib/palettes.js';
</script>

<SwatchTable palette={Object.entries(getGenderPalette()).map(([name, colour]) => colour)} />
