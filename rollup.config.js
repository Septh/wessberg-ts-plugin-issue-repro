'use strict';

import wessberg from '@wessberg/rollup-plugin-ts'
import official from 'rollup-plugin-typescript'

const jsconfig = {
	input: 'test-js/index.js',
	output: {
		file: 'bundle-js.js',
		format: 'esm'
	}
}

const tsconfig1 = {
	input: 'test-ts/index.ts',
	output: {
		file: 'bundle-wessberg.js',
		format: 'esm'
	},
	plugins: [
		wessberg()
	]
}

const tsconfig2 = {
	input: 'test-ts/index.ts',
	output: {
		file: 'bundle-official.js',
		format: 'esm'
	},
	plugins: [
		official()
	]
}

export default [ jsconfig, tsconfig1, tsconfig2 ]
