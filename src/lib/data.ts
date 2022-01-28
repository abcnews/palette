import { csvParse } from 'd3-dsv';

export const getData = async () => {
	const data = [];
	// see: https://data.giss.nasa.gov/gistemp/tabledata_v3/GLB.Ts+dSST.csv
	const csv = await fetch('/global-average-temp.csv').then((r) => r.text());
	// .then((txt) => txt.split('\n').slice(1).join('\n'));

	csvParse(csv, (d, i, columns) => {
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
