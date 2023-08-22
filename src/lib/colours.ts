/* Named colours */

/*

Colours are named for a few reasons:
- it serves as a canonical list of all colours used in the palettes and 
  indicates how that colour is used, providing better clarity
- for some palettes, it's useful to be able to retrieve additional data about a 
  colour (e.g. the parties associated with a given political party colour)
- Some colours have an associated 'label' colour that should be used for 
  associated text
- It makes type safety around colours possible.

Sequential, divergent and ordinal colour names follow a specific format:
<palette type(s)>[-<base colour>]-<index>-<light/dark variant>
*/

export type PartyColourName =
	| 'p-red-l'
	| 'p-blue-l'
	| 'p-black-l'
	| 'p-green-l'
	| 'p-lightgreen-l'
	| 'p-gold-l'
	| 'p-brown-l'
	| 'p-lightblue-l'
	| 'p-aqua-l'
	| 'p-orange-l'
	| 'p-purple-l'
	| 'p-red-d'
	| 'p-blue-d'
	| 'p-black-d'
	| 'p-green-d'
	| 'p-lightgreen-d'
	| 'p-gold-d'
	| 'p-brown-d'
	| 'p-lightblue-d'
	| 'p-aqua-d'
	| 'p-orange-d'
	| 'p-purple-d';

export type SequentialColourName =
	| 'sd-0-l'
	| 'so-10-l'
	| 'sd-0-d'
	| 'so-10-d'
	| 's-blue-1-l'
	| 's-blue-2-l'
	| 's-blue-3-l'
	| 's-blue-4-l'
	| 's-blue-5-l'
	| 's-blue-6-l'
	| 's-blue-7-l'
	| 's-blue-8-l'
	| 's-blue-9-l'
	| 's-red-1-l'
	| 's-red-2-l'
	| 's-red-3-l'
	| 's-red-4-l'
	| 's-red-5-l'
	| 's-red-6-l'
	| 's-red-7-l'
	| 's-red-8-l'
	| 's-red-9-l'
	| 's-green-1-l'
	| 's-green-2-l'
	| 's-green-3-l'
	| 's-green-4-l'
	| 's-green-5-l'
	| 's-green-6-l'
	| 's-green-7-l'
	| 's-green-8-l'
	| 's-green-9-l'
	| 's-purple-1-l'
	| 's-purple-2-l'
	| 's-purple-3-l'
	| 's-purple-4-l'
	| 's-purple-5-l'
	| 's-purple-6-l'
	| 's-purple-7-l'
	| 's-purple-8-l'
	| 's-purple-9-l'
	| 's-blue-1-d'
	| 's-blue-2-d'
	| 's-blue-3-d'
	| 's-blue-4-d'
	| 's-blue-5-d'
	| 's-blue-6-d'
	| 's-blue-7-d'
	| 's-blue-8-d'
	| 's-blue-9-d'
	| 's-red-1-d'
	| 's-red-2-d'
	| 's-red-3-d'
	| 's-red-4-d'
	| 's-red-5-d'
	| 's-red-6-d'
	| 's-red-7-d'
	| 's-red-8-d'
	| 's-red-9-d'
	| 's-green-1-d'
	| 's-green-2-d'
	| 's-green-3-d'
	| 's-green-4-d'
	| 's-green-5-d'
	| 's-green-6-d'
	| 's-green-7-d'
	| 's-green-8-d'
	| 's-green-9-d'
	| 's-purple-1-d'
	| 's-purple-2-d'
	| 's-purple-3-d'
	| 's-purple-4-d'
	| 's-purple-5-d'
	| 's-purple-6-d'
	| 's-purple-7-d'
	| 's-purple-8-d'
	| 's-purple-9-d';

export type DivergentColourName =
	| 'sd-0-l'
	| 'd-red-1-l'
	| 'd-red-2-l'
	| 'd-red-3-l'
	| 'd-red-4-l'
	| 'd-red-5-l'
	| 'd-red-6-l'
	| 'd-red-7-l'
	| 'd-red-8-l'
	| 'd-red-9-l'
	| 'd-red-10-l'
	| 'd-blue-1-l'
	| 'd-blue-2-l'
	| 'd-blue-3-l'
	| 'd-blue-4-l'
	| 'd-blue-5-l'
	| 'd-blue-6-l'
	| 'd-blue-7-l'
	| 'd-blue-8-l'
	| 'd-blue-9-l'
	| 'd-blue-10-l'
	| 'd-purple-1-l'
	| 'd-purple-2-l'
	| 'd-purple-3-l'
	| 'd-purple-4-l'
	| 'd-purple-5-l'
	| 'd-purple-6-l'
	| 'd-purple-7-l'
	| 'd-purple-8-l'
	| 'd-purple-9-l'
	| 'd-purple-10-l'
	| 'd-violet-1-l'
	| 'd-violet-2-l'
	| 'd-violet-3-l'
	| 'd-violet-4-l'
	| 'd-violet-5-l'
	| 'd-violet-6-l'
	| 'd-violet-7-l'
	| 'd-violet-8-l'
	| 'd-violet-9-l'
	| 'd-violet-10-l'
	| 'd-green-1-l'
	| 'd-green-2-l'
	| 'd-green-3-l'
	| 'd-green-4-l'
	| 'd-green-5-l'
	| 'd-green-6-l'
	| 'd-green-7-l'
	| 'd-green-8-l'
	| 'd-green-9-l'
	| 'd-green-10-l'
	| 'sd-0-d'
	| 'd-red-1-d'
	| 'd-red-2-d'
	| 'd-red-3-d'
	| 'd-red-4-d'
	| 'd-red-5-d'
	| 'd-red-6-d'
	| 'd-red-7-d'
	| 'd-red-8-d'
	| 'd-red-9-d'
	| 'd-red-10-d'
	| 'd-blue-1-d'
	| 'd-blue-2-d'
	| 'd-blue-3-d'
	| 'd-blue-4-d'
	| 'd-blue-5-d'
	| 'd-blue-6-d'
	| 'd-blue-7-d'
	| 'd-blue-8-d'
	| 'd-blue-9-d'
	| 'd-blue-10-d'
	| 'd-purple-1-d'
	| 'd-purple-2-d'
	| 'd-purple-3-d'
	| 'd-purple-4-d'
	| 'd-purple-5-d'
	| 'd-purple-6-d'
	| 'd-purple-7-d'
	| 'd-purple-8-d'
	| 'd-purple-9-d'
	| 'd-purple-10-d'
	| 'd-violet-1-d'
	| 'd-violet-2-d'
	| 'd-violet-3-d'
	| 'd-violet-4-d'
	| 'd-violet-5-d'
	| 'd-violet-6-d'
	| 'd-violet-7-d'
	| 'd-violet-8-d'
	| 'd-violet-9-d'
	| 'd-violet-10-d'
	| 'd-green-1-d'
	| 'd-green-2-d'
	| 'd-green-3-d'
	| 'd-green-4-d'
	| 'd-green-5-d'
	| 'd-green-6-d'
	| 'd-green-7-d'
	| 'd-green-8-d'
	| 'd-green-9-d'
	| 'd-green-10-d';

export type OrdinalColourName =
	| 'o-blue-1-l'
	| 'o-blue-2-l'
	| 'o-blue-3-l'
	| 'o-blue-4-l'
	| 'o-red-1-l'
	| 'o-red-2-l'
	| 'o-red-3-l'
	| 'o-red-4-l'
	| 'o-green-1-l'
	| 'o-green-2-l'
	| 'o-green-3-l'
	| 'o-green-4-l'
	| 'o-purple-1-l'
	| 'o-purple-2-l'
	| 'o-purple-3-l'
	| 'o-purple-4-l'
	| 'so-10-l'
	| 'o-blue-1-d'
	| 'o-blue-2-d'
	| 'o-blue-3-d'
	| 'o-blue-4-d'
	| 'o-red-1-d'
	| 'o-red-2-d'
	| 'o-red-3-d'
	| 'o-red-4-d'
	| 'o-green-1-d'
	| 'o-green-2-d'
	| 'o-green-3-d'
	| 'o-green-4-d'
	| 'o-purple-1-d'
	| 'o-purple-2-d'
	| 'o-purple-3-d'
	| 'o-purple-4-d'
	| 'so-10-d';

export type BasicColourName =
	| 'blue-l'
	| 'midblue-l'
	| 'darkblue-l'
	| 'pink-l'
	| 'purple-l'
	| 'teal-l'
	| 'red-l'
	| 'midred-l'
	| 'darkred-l'
	| 'green-l'
	| 'orange-l'
	| 'grey-l'
	| 'darkgrey-l'
	| 'taupe-l'
	| 'blue-d'
	| 'midblue-d'
	| 'lightblue-d'
	| 'pink-d'
	| 'lightpink-d'
	| 'purple-d'
	| 'teal-d'
	| 'red-d'
	| 'midred-d'
	| 'green-d'
	| 'orange-d'
	| 'grey-d'
	| 'lightgrey-d'
	| 'taupe-d';

export type ColourName =
	| SequentialColourName
	| DivergentColourName
	| OrdinalColourName
	| PartyColourName
	| BasicColourName;

const basicColours: [BasicColourName, string][] = [
	['blue-l', '#007BC7'],
	['midblue-l', '#0051AD'],
	['darkblue-l', '#00297E'],
	['pink-l', '#A61268'],
	['purple-l', '#664CB3'],
	['teal-l', '#006B75'],
	['red-l', '#CF4452'],
	['midred-l', '#A6073C'],
	['darkred-l', '#6B003B'],
	['green-l', '#687A00'],
	['orange-l', '#E52A00'],
	['grey-l', '#6E7787'],
	['darkgrey-l', '#0D0F12'],
	['taupe-l', '#80666C'],
	//---
	['blue-d', '#0092ED'],
	['midblue-d', '#47B8FF'],
	['lightblue-d', '#AFD6FD'],
	['pink-d', '#BA4A9F'],
	['lightpink-d', '#E9C4D3'],
	['purple-d', '#AB96EB'],
	['teal-d', '#1DB4CB'],
	['red-d', '#D04351'],
	['midred-d', '#E88791'],
	['green-d', '#8FBF77'],
	['orange-d', '#FF571A'],
	['grey-d', '#848D9A'],
	['lightgrey-d', '#F3F5F6'],
	['taupe-d', '#B29BA0']
];

const partyColours: [PartyColourName, string][] = [
	['p-red-l', '#E11F30'],
	['p-blue-l', '#0A52BF'],
	['p-black-l', '#757575'],
	['p-green-l', '#007056'],
	['p-lightgreen-l', '#51A802'],
	['p-gold-l', '#CC8500'],
	['p-brown-l', '#804A40'],
	['p-lightblue-l', '#00A1C7'],
	['p-aqua-l', '#005D82'],
	['p-orange-l', '#E5660B'],
	['p-purple-l', '#985EB5'],
	['p-red-d', '#E51D2E'],
	['p-blue-d', '#166EF3'],
	['p-black-d', '#757575'],
	['p-green-d', '#008566'],
	['p-lightgreen-d', '#51A802'],
	['p-gold-d', '#E8A830'],
	['p-brown-d', '#AA6255'],
	['p-lightblue-d', '#1CBDE3'],
	['p-aqua-d', '#0080B2'],
	['p-orange-d', '#F46C0B'],
	['p-purple-d', '#965EB5']
];

const sequentialColours: [SequentialColourName, string][] = [
	['sd-0-l', '#F2F2F2'],
	['so-10-l', '#000000'],
	['s-blue-1-l', '#C6DBDD'],
	['s-blue-2-l', '#9CC3CE'],
	['s-blue-3-l', '#79A9C3'],
	['s-blue-4-l', '#5E8EBA'],
	['s-blue-5-l', '#4A71B0'],
	['s-blue-6-l', '#3C55A2'],
	['s-blue-7-l', '#2E3993'],
	['s-blue-8-l', '#201E80'],
	['s-blue-9-l', '#0D0364'],
	['s-red-1-l', '#F1D1C1'],
	['s-red-2-l', '#EAAFA4'],
	['s-red-3-l', '#E08D8C'],
	['s-red-4-l', '#D46878'],
	['s-red-5-l', '#C63F69'],
	['s-red-6-l', '#A22863'],
	['s-red-7-l', '#7D1855'],
	['s-red-8-l', '#570E43'],
	['s-red-9-l', '#310A2C'],
	['s-green-1-l', '#C8DCCD'],
	['s-green-2-l', '#A3C5B1'],
	['s-green-3-l', '#7EAD9B'],
	['s-green-4-l', '#589487'],
	['s-green-5-l', '#3A7B82'],
	['s-green-6-l', '#296077'],
	['s-green-7-l', '#1B476C'],
	['s-green-8-l', '#0E2D5F'],
	['s-green-9-l', '#01144D'],
	['s-purple-1-l', '#E2D2E1'],
	['s-purple-2-l', '#D1B4D3'],
	['s-purple-3-l', '#BC96C5'],
	['s-purple-4-l', '#A47AB7'],
	['s-purple-5-l', '#895FAC'],
	['s-purple-6-l', '#6A47A2'],
	['s-purple-7-l', '#483193'],
	['s-purple-8-l', '#221B82'],
	['s-purple-9-l', '#0E1052'],
	['sd-0-d', '#141414'],
	['so-10-d', '#FFFFFF'],
	['s-blue-1-d', '#26243E'],
	['s-blue-2-d', '#303865'],
	['s-blue-3-d', '#364F8D'],
	['s-blue-4-d', '#3667B3'],
	['s-blue-5-d', '#2D80D7'],
	['s-blue-6-d', '#3B9EE4'],
	['s-blue-7-d', '#50BBEF'],
	['s-blue-8-d', '#6AD8F8'],
	['s-blue-9-d', '#87F5FF'],
	['s-red-1-d', '#381F2F'],
	['s-red-2-d', '#5E2A41'],
	['s-red-3-d', '#853652'],
	['s-red-4-d', '#AC4262'],
	['s-red-5-d', '#D45171'],
	['s-red-6-d', '#E47583'],
	['s-red-7-d', '#F19897'],
	['s-red-8-d', '#FABAB0'],
	['s-red-9-d', '#FFDDCB'],
	['s-green-1-d', '#242730'],
	['s-green-2-d', '#2E3D4C'],
	['s-green-3-d', '#355469'],
	['s-green-4-d', '#386F7C'],
	['s-green-5-d', '#398B90'],
	['s-green-6-d', '#48A598'],
	['s-green-7-d', '#56C2A0'],
	['s-green-8-d', '#89DAB2'],
	['s-green-9-d', '#B8F1C5'],
	['s-purple-1-d', '#262740'],
	['s-purple-2-d', '#413763'],
	['s-purple-3-d', '#5E4686'],
	['s-purple-4-d', '#7D57A7'],
	['s-purple-5-d', '#9E69C5'],
	['s-purple-6-d', '#BC7FDA'],
	['s-purple-7-d', '#D69AEA'],
	['s-purple-8-d', '#EDB7F6'],
	['s-purple-9-d', '#FFD9FC']
];

const divergentColours: [DivergentColourName, string][] = [
	['sd-0-l', '#F2F2F2'],
	['d-red-1-l', '#efd8cb'],
	['d-red-2-l', '#eabead'],
	['d-red-3-l', '#e4a394'],
	['d-red-4-l', '#dc887e'],
	['d-red-5-l', '#d46c6a'],
	['d-red-6-l', '#c94e58'],
	['d-red-7-l', '#b6334b'],
	['d-red-8-l', '#9c2143'],
	['d-red-9-l', '#810e37'],
	['d-red-10-l', '#660027'],
	['d-blue-1-l', '#cadddf'],
	['d-blue-2-l', '#a7c7d3'],
	['d-blue-3-l', '#85b1c7'],
	['d-blue-4-l', '#6b98be'],
	['d-blue-5-l', '#567fb5'],
	['d-blue-6-l', '#4567aa'],
	['d-blue-7-l', '#384e9d'],
	['d-blue-8-l', '#2b358f'],
	['d-blue-9-l', '#1c1d7a'],
	['d-blue-10-l', '#0D0364'],
	['d-purple-1-l', '#E4D7E4'],
	['d-purple-2-l', '#D5BCD9'],
	['d-purple-3-l', '#C7A2CC'],
	['d-purple-4-l', '#B787C0'],
	['d-purple-5-l', '#A46FB4'],
	['d-purple-6-l', '#8F58A7'],
	['d-purple-7-l', '#794298'],
	['d-purple-8-l', '#632D87'],
	['d-purple-9-l', '#4B1876'],
	['d-purple-10-l', '#330265'],
	['d-violet-1-l', '#E4D7E4'],
	['d-violet-2-l', '#D5BCD9'],
	['d-violet-3-l', '#C7A2CC'],
	['d-violet-4-l', '#B787C0'],
	['d-violet-5-l', '#A46FB4'],
	['d-violet-6-l', '#8F58A7'],
	['d-violet-7-l', '#794298'],
	['d-violet-8-l', '#632D87'],
	['d-violet-9-l', '#4B1876'],
	['d-violet-10-l', '#330265'],
	['d-green-1-l', '#D0E1D4'],
	['d-green-2-l', '#B2CEBD'],
	['d-green-3-l', '#94BBA9'],
	['d-green-4-l', '#78A998'],
	['d-green-5-l', '#5A9689'],
	['d-green-6-l', '#3D837C'],
	['d-green-7-l', '#266F73'],
	['d-green-8-l', '#175A68'],
	['d-green-9-l', '#0C475B'],
	['d-green-10-l', '#01344D'],
	['sd-0-d', '#141414'],
	['d-red-1-d', '#2f2124'],
	['d-red-2-d', '#4e2d33'],
	['d-red-3-d', '#74363f'],
	['d-red-4-d', '#9a3e46'],
	['d-red-5-d', '#ba4e4f'],
	['d-red-6-d', '#d3645a'],
	['d-red-7-d', '#e87c69'],
	['d-red-8-d', '#f7987e'],
	['d-red-9-d', '#ffb79b'],
	['d-red-10-d', '#FFD6C2'],
	['d-blue-1-d', '#24233a'],
	['d-blue-2-d', '#2e345e'],
	['d-blue-3-d', '#344880'],
	['d-blue-4-d', '#365da3'],
	['d-blue-5-d', '#3274c5'],
	['d-blue-6-d', '#338ddc'],
	['d-blue-7-d', '#41a7e7'],
	['d-blue-8-d', '#55c1f1'],
	['d-blue-9-d', '#6ddbf9'],
	['d-blue-10-d', '#87F5FF'],
	['d-purple-1-d', '#2B2135'],
	['d-purple-2-d', '#412f53'],
	['d-purple-3-d', '#5b3c73'],
	['d-purple-4-d', '#754c8f'],
	['d-purple-5-d', '#905cae'],
	['d-purple-6-d', '#ad6ccd'],
	['d-purple-7-d', '#c780e5'],
	['d-purple-8-d', '#db9af5'],
	['d-purple-9-d', '#e9b7fb'],
	['d-purple-10-d', '#f5d6ff'],
	['d-violet-1-d', '#22252e'],
	['d-violet-2-d', '#333452'],
	['d-violet-3-d', '#494475'],
	['d-violet-4-d', '#615498'],
	['d-violet-5-d', '#7a66b2'],
	['d-violet-6-d', '#9479c8'],
	['d-violet-7-d', '#af8de1'],
	['d-violet-8-d', '#c8a3f3'],
	['d-violet-9-d', '#debdfc'],
	['d-violet-10-d', '#f1d9ff'],
	['d-green-1-d', '#1f2628'],
	['d-green-2-d', '#273a3d'],
	['d-green-3-d', '#2f5053'],
	['d-green-4-d', '#346668'],
	['d-green-5-d', '#377d7e'],
	['d-green-6-d', '#40958f'],
	['d-green-7-d', '#56ad9a'],
	['d-green-8-d', '#72c4a7'],
	['d-green-9-d', '#92dbb5'],
	['d-green-10-d', '#b8f1c5']
];

const ordinalColours: [OrdinalColourName, string][] = [
	['o-blue-1-l', '#6D9BB0'],
	['o-blue-2-l', '#456EAC'],
	['o-blue-3-l', '#2D3F9E'],
	['o-blue-4-l', '#090A86'],
	['o-red-1-l', '#CD7E86'],
	['o-red-2-l', '#B8436A'],
	['o-red-3-l', '#871858'],
	['o-red-4-l', '#500038'],
	['o-green-1-l', '#779C92'],
	['o-green-2-l', '#3D7580'],
	['o-green-3-l', '#1F4C6D'],
	['o-green-4-l', '#002459'],
	['o-purple-1-l', '#AB88B9'],
	['o-purple-2-l', '#835BAC'],
	['o-purple-3-l', '#5230A4'],
	['o-purple-4-l', '#110785'],
	['so-10-l', '#000000'],
	['o-blue-1-d', '#4D558F'],
	['o-blue-2-d', '#5782B9'],
	['o-blue-3-d', '#5DB2DC'],
	['o-blue-4-d', '#5DE9FF'],
	['o-red-1-d', '#81466B'],
	['o-red-2-d', '#BC6584'],
	['o-red-3-d', '#E98F9A'],
	['o-red-4-d', '#FFC6B8'],
	['o-green-1-d', '#455982'],
	['o-green-2-d', '#448C9B'],
	['o-green-3-d', '#3AC0B3'],
	['o-green-4-d', '#75F0CD'],
	['o-purple-1-d', '#525489'],
	['o-purple-2-d', '#8C72BC'],
	['o-purple-3-d', '#C695E2'],
	['o-purple-4-d', '#FFBDFF'],
	['so-10-d', '#ffffff']
];

const namedColours: [ColourName, string][] = [
	...basicColours,
	...partyColours,
	...sequentialColours,
	...divergentColours,
	...ordinalColours
];

const labelColours: [ColourName, string][] = [
	['p-lightgreen-l', '#508423'],
	['p-gold-l', '#A36A00'],
	['p-lightblue-l', '#0E81A0'],
	['p-orange-l', '#BD5800'],
	['o-blue-1-l', '#4E7D91'],
	['o-red-1-l', '#B15E67'],
	['o-green-1-l', '#597E75'],
	['o-purple-1-l', '#8A6C96'],
	['o-blue-1-d', '#6B70A7'],
	['o-red-1-d', '#956682'],
	['o-green-1-d', '#5E759C'],
	['o-purple-1-d', '#6C719F']
];

const namedColoursMap: Map<ColourName, string> = new Map(namedColours);
const labelColoursMap: Map<ColourName, string> = new Map(labelColours);

export const getLabelColour = (colour: ColourName): string =>
	labelColoursMap.get(colour) || namedColoursMap.get(colour);

export const getColourName = (hex: string): ColourName =>
	namedColours.find(([_, colour]) => colour === hex)[0];

export const getNamedColour = (name: ColourName): string => namedColoursMap.get(name);
