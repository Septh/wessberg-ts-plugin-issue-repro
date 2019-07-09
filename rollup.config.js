'use strict';

import { dirname, resolve, join } from 'path'
import { existsSync } from 'fs'
import wessberg from '@wessberg/rollup-plugin-ts'
import official from 'rollup-plugin-typescript'

/** @type {import('rollup').PluginImpl} */
const evidence = () => {
	return {
		name: 'evidence',
		// Very simple resolver, just what we need here though
		resolveId: (source, importer) => {
			if (importer) {
				const path = dirname(resolve(importer)),
				      file = join(path, `${source}.ts`)
				if (existsSync(file)) {
					return file
				}
			}
			return null
		},
		// Prints the names of all the bundled files to the console
		writeBundle: (bundle) => {
			for (const info of Object.values(bundle)) {
				// @ts-ignore
				if (info.modules) {
					// @ts-ignore
					for (const mod of Object.keys(info.modules)) {
						console.log(mod)
					}
				}
			}
		}
	}
}

const jsconfig = {
	input: 'test-js/index.js',
	output: {
		file: 'bundle-js.js',
		target: 'esnext',
		format: 'esm'
	},
	plugins: [
		evidence()
	]
}

const tsconfig1 = {
	input: 'test-ts/index.ts',
	output: {
		file: 'bundle-wessberg.js',
		target: 'esnext',
		format: 'esm'
	},
	plugins: [
		evidence(),
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
		evidence(),
		official({
			target: 'esnext'
		})
	]
}

export default [ jsconfig, tsconfig1, tsconfig2 ]
