'use strict';

import wessberg from '@wessberg/rollup-plugin-ts'
import official from 'rollup-plugin-typescript'

const jsconfig = {
	input: 'test-js/index.js',
	output: {
		file: 'bundle-js.js',
		target: 'esnext',
		format: 'esm'
	}
}

const tsconfig1 = {
	input: 'test-ts/index.ts',
	output: {
		file: 'bundle-wessberg.js',
		target: 'esnext',
		format: 'esm'
	},
	plugins: [
		wessberg({
			tsconfig: {
				target: 'esnext'
			}
		})
	]
}

const tsconfig2 = {
	input: 'test-ts/index.ts',
	output: {
		file: 'bundle-official.js',
		target: 'esnext',
		format: 'esm'
	},
	plugins: [
		official({
			target: 'esnext'
		})
	]
}

const tsconfig3 = {
	input: 'tsc-out/index.js',
	output: {
		file: 'bundle-tscout-tsc.js',
		target: 'esnext',
		format: 'esm'
	}
}

export default [ jsconfig, tsconfig1, tsconfig2, tsconfig3 ]
