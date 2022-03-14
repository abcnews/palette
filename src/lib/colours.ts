/* Named colours */

export type PartyColourName =
	| 'ptyred'
	| 'ptyblue'
	| 'ptyblack'
	| 'ptygreen'
	| 'ptylightgreen'
	| 'ptygold'
	| 'ptybrown'
	| 'ptylightblue'
	| 'ptyaqua'
	| 'ptyorange'
	| 'ptypurple';

export type SequentialColourName =
	| 'sequential-grey-0'
	| 'sequential-black-10'
	| 'sequential-blue-1'
	| 'sequential-blue-2'
	| 'sequential-blue-3'
	| 'sequential-blue-4'
	| 'sequential-blue-5'
	| 'sequential-blue-6'
	| 'sequential-blue-7'
	| 'sequential-blue-8'
	| 'sequential-blue-9'
	| 'sequential-red-1'
	| 'sequential-red-2'
	| 'sequential-red-3'
	| 'sequential-red-4'
	| 'sequential-red-5'
	| 'sequential-red-6'
	| 'sequential-red-7'
	| 'sequential-red-8'
	| 'sequential-red-9'
	| 'sequential-green-1'
	| 'sequential-green-2'
	| 'sequential-green-3'
	| 'sequential-green-4'
	| 'sequential-green-5'
	| 'sequential-green-6'
	| 'sequential-green-7'
	| 'sequential-green-8'
	| 'sequential-green-9'
	| 'sequential-purple-1'
	| 'sequential-purple-2'
	| 'sequential-purple-3'
	| 'sequential-purple-4'
	| 'sequential-purple-5'
	| 'sequential-purple-6'
	| 'sequential-purple-7'
	| 'sequential-purple-8'
	| 'sequential-purple-9'
	| 'sequential-aa-blue-1'
	| 'sequential-aa-blue-2'
	| 'sequential-aa-blue-3'
	| 'sequential-aa-blue-4'
	| 'sequential-aa-red-1'
	| 'sequential-aa-red-2'
	| 'sequential-aa-red-3'
	| 'sequential-aa-red-4'
	| 'sequential-aa-green-1'
	| 'sequential-aa-green-2'
	| 'sequential-aa-green-3'
	| 'sequential-aa-green-4'
	| 'sequential-aa-purple-1'
	| 'sequential-aa-purple-2'
	| 'sequential-aa-purple-3'
	| 'sequential-aa-purple-4';

export type BasicColourName =
	| 'blue-1'
	| 'blue-2'
	| 'blue-3'
	| 'blue-4'
	| 'red-1'
	| 'green-1'
	| 'green-2'
	| 'grey-1'
	| 'grey-4'
	| 'orange-1'
	| 'purple-1'
	| 'purple-2'
	| 'pink-1'
	| 'slate-2'
	| 'taupe-2'
	| 'aqua-1';

export type ColourName = SequentialColourName | PartyColourName | BasicColourName;

// The naming of the colours here serves two purposes.
const namedColours: [ColourName, string][] = [
	['blue-1', '#009de5'],
	['blue-2', '#1c64b8'],
	['blue-3', '#00238b'],
	['blue-4', '#002b66'],
	['red-1', '#d45f5f'],
	['green-1', '#2d8289'],
	['green-2', '#007a51'],
	['grey-1', '#8495a9'],
	['grey-4', '#001533'],
	['orange-1', '#f26d00'],
	['purple-1', '#6450b3'],
	['purple-2', '#623980'],
	['pink-1', '#be6aa5'],
	['slate-2', '#675e73'],
	['taupe-2', '#857276'],
	['aqua-1', '#00a1ba'],
	['ptyred', '#e11f30'],
	['ptyblue', '#0a52bf'],
	['ptyblack', '#757575'],
	['ptygreen', '#007056'],
	['ptylightgreen', '#51A802'],
	['ptygold', '#CC8500'],
	['ptybrown', '#804A40'],
	['ptylightblue', '#00A1C7'],
	['ptyaqua', '#005D82'],
	['ptyorange', '#E5660B'],
	['ptypurple', '#985EB5'],
	['sequential-grey-0', '#f2f2f2'],
	['sequential-black-10', '#000'],
	['sequential-blue-1', '#C0D8DB'],
	['sequential-blue-2', '#92C1CC'],
	['sequential-blue-3', '#69A8C1'],
	['sequential-blue-4', '#4C8FBB'],
	['sequential-blue-5', '#3B77B0'],
	['sequential-blue-6', '#2D60A3'],
	['sequential-blue-7', '#1E4A96'],
	['sequential-blue-8', '#0E3482'],
	['sequential-blue-9', '#001E5E'],
	['sequential-red-1', '#F0CCBA'],
	['sequential-red-2', '#E5A794'],
	['sequential-red-3', '#DB8678'],
	['sequential-red-4', '#D16562'],
	['sequential-red-5', '#C24652'],
	['sequential-red-6', '#A8314D'],
	['sequential-red-7', '#8C1F44'],
	['sequential-red-8', '#6E0E37'],
	['sequential-red-9', '#4C0026'],
	['sequential-green-1', '#C2D9D3'],
	['sequential-green-2', '#9BBFB7'],
	['sequential-green-3', '#79A8A1'],
	['sequential-green-4', '#59918E'],
	['sequential-green-5', '#3F7C7D'],
	['sequential-green-6', '#2B656B'],
	['sequential-green-7', '#1A515C'],
	['sequential-green-8', '#0B3C4A'],
	['sequential-green-9', '#002636'],
	['sequential-purple-1', '#DCCFE0'],
	['sequential-purple-2', '#C8AFD1'],
	['sequential-purple-3', '#B490C2'],
	['sequential-purple-4', '#A175B5'],
	['sequential-purple-5', '#905CAB'],
	['sequential-purple-6', '#7D45A1'],
	['sequential-purple-7', '#672E91'],
	['sequential-purple-8', '#4F1980'],
	['sequential-purple-9', '#33085E'],
	['sequential-aa-blue-1', '#5C9CBE'],
	['sequential-aa-blue-2', '#3974AF'],
	['sequential-aa-blue-3', '#214F99'],
	['sequential-aa-blue-4', '#092C75'],
	['sequential-aa-red-1', '#D87B71'],
	['sequential-aa-red-2', '#C24652'],
	['sequential-aa-red-3', '#952547'],
	['sequential-aa-red-4', '#630A32'],
	['sequential-aa-green-1', '#6B9E99'],
	['sequential-aa-green-2', '#3E7A7C'],
	['sequential-aa-green-3', '#205862'],
	['sequential-aa-green-4', '#083644'],
	['sequential-aa-purple-1', '#AD87BE'],
	['sequential-aa-purple-2', '#905CAB'],
	['sequential-aa-purple-3', '#6F3697'],
	['sequential-aa-purple-4', '#471476']
];

const labelColours: [ColourName, string][] = [
	['blue-1', '#037cc2'],
	['red-1', '#ca4d48'],
	['grey-1', '#68788e'],
	['orange-1', '#cc4e00'],
	['ptylightgreen', '#508423'],
	['ptygold', '#A36A00'],
	['ptylightblue', '#0E81A0'],
	['ptyorange', '#BD5800']
];

const namedColoursMap: Map<ColourName, string> = new Map(namedColours);
const labelColoursMap: Map<ColourName, string> = new Map(labelColours);

export const getLabelColour = (colour: ColourName): string =>
	labelColoursMap.get(colour) || namedColoursMap.get(colour);

export const getColourName = (hex: string): ColourName =>
	Array.from(namedColoursMap.entries()).find(([, colour]) => colour === hex)[0];

export const getNamedColour = (name: ColourName): string => namedColoursMap.get(name);
