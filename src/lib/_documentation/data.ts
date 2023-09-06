import { csvParse } from 'd3-dsv';

export const parseGlobalAverageTemperatureCsv = (txt: string) => {
	const data: { date: Date; value: number }[] = [];

	csvParse(txt, (d, i, columns) => {
		for (let i = 1; i < 13; ++i) {
			// Ignore bad data
			if (typeof d.Year === 'undefined' || typeof d[columns[i]] !== 'string') return;

			data.push({
				date: new Date(Date.UTC(+d.Year, i - 1, 1)),
				value: +(d[columns[i]] || 0) // This is dumb, but typescript can't typecheck the dynamic column, or something?
			});
		}
		return {};
	});
	return data;
};
