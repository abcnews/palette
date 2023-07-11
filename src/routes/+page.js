import { error } from '@sveltejs/kit';
import { parseGlobalAverageTemperatureCsv } from '$lib/_documentation/data';
export async function load({ fetch }) {
	try {
		const txt = await fetch('/global-average-temp.csv').then((r) => r.text());
		const data = parseGlobalAverageTemperatureCsv(txt);
		return { globalAverageTemperature: data };
	} catch (e) {
		throw error(500, `Could not load data: ${e.message}`);
	}
}
