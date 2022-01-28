import { globalStyle, createVar, style } from '@vanilla-extract/css';

globalStyle('html', {
	fontSize: '1.1rem',
	color: 'red'
});

globalStyle(':root', {
	/* Named colours */
	vars: {
		'--dv-blue-1': '#009de5',
		'--dv-blue-1-label': '#037cc2',
		'--dv-blue-2': '#1c64b8',
		'--dv-blue-2-label': 'var(--dv-blue-2)',
		'--dv-blue-3': '#00238b',
		'--dv-blue-3-label': 'var(--dv-blue-3)',
		'--dv-blue-4': '#002b66',
		'--dv-blue-4-label': 'var(--dv-blue-4)',

		'--dv-red-1': '#d45f5f',
		'--dv-red-1-label': '#ca4d48',

		'--dv-green-1': '#2d8289',
		'--dv-green-1-label': 'var(--dv-green-1)',
		'--dv-green-2': '#007a51',
		'--dv-green-2-label': 'var(--dv-green-2)',

		'--dv-grey-1': '#8495a9',
		'--dv-grey-1-label': '#68788e',
		'--dv-grey-4': '#001533',
		'--dv-grey-4-label': 'var(--dv-grey-4)',

		'--dv-orange-1': '#f26d00',
		'--dv-orange-1-label': '#cc4e00',

		'--dv-purple-1': '#6450b3',
		'--dv-purple-1-label': 'var(--dv-purple-1)',
		'--dv-purple-2': '#623980',
		'--dv-purple-2-label': 'var(--dv-purple-2)',

		'--dv-pink-1': '#be6aa5',
		'--dv-pink-1-label': 'var(--dv-pink-1)',

		'--dv-slate-2': '#675e73',
		'--dv-slate-2-label': 'var(--dv-slate-2)',

		'--dv-taupe-2': '#857276',
		'--dv-taupe-2-label': 'var(--dv-taupe-2)',

		/* Nominal default palette */

		'--dv-nominal-default-1': 'var(--dv-blue-1)',
		'--dv-nominal-default-2': 'var(--dv-blue-3)',
		'--dv-nominal-default-3': 'var(--dv-green-1)',
		'--dv-nominal-default-4': 'var(--dv-blue-2)',
		'--dv-nominal-default-5': 'var(--dv-grey-4)'

		/* Nominal extended palette */

		/* Nominal gender palette */

		/* Nominal sentiment palette */

		/* Nominal political palette */

		/* Ordianl blue palette */

		/* Ordinal red palette */

		/* Ordinal green palette */

		/* Ordianl purple palette */
	}
});

export const palette = style({
	fontSize: '1.5rem'
});
