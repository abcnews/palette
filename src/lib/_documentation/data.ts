import { csvParse } from 'd3-dsv';

export const parseGlobalAverageTemperatureCsv = (txt) => {
	const data = [];

	csvParse(txt, (d, i, columns) => {
		for (let i = 1; i < 13; ++i) {
			data.push({
				date: new Date(Date.UTC(+d.Year, i - 1, 1)),
				value: +d[columns[i]]
			});
		}
		return {};
	});
	return data as { date: Date; value: number }[];
};
