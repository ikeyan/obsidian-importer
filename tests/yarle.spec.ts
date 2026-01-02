import { describe, it } from 'vitest';
import { defaultYarleOptions, dropTheRope } from '../src/formats/yarle/yarle';
import * as path from 'path';
import { YarleOptions } from '../src/formats/yarle/options';
import { NodePickedFile } from '../src/filesystem';
import { ImportContext } from '../src/main';
// import assert from 'node:assert/strict';

describe('dropTheRope', () => {
	it('should process an Evernote .enex file', { timeout: 600_000 }, async ({ signal }) => {
		let yarleOptions: YarleOptions = {
			...defaultYarleOptions,
			...{
				enexSources: [
					new NodePickedFile(path.join(__dirname, 'evernote', 'Initial.enex'))
				],
				outputDir: path.join(__dirname, 'output'),
			},
		};
		const ctx: ImportContext = {
			isCancelled: () => signal.aborted,
			status: (msg: string) => {
				console.log('Status:', msg);
			},
			reportFailed: (notebookPath: string, reason?: any) => {
				console.error(`Failed to process notebook: ${notebookPath}`, reason);
			},
			reportSkipped: (name: string, reason?: any) => {
				console.log(`Skipped note: ${name}`, reason);
			},
			reportNoteSuccess: (name: string) => {
				console.log(`Successfully processed note: ${name}`);
			},
		} as any; // 使わないプロパティはごまかす

		await dropTheRope(yarleOptions, ctx);
	});
});
