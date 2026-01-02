import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
	test: {
		alias: {
			obsidian: path.resolve(__dirname, '__mocks__/obsidian.ts'),
		},
		// Load setup file to expose `window` global from __mocks__/window.ts
		setupFiles: [path.resolve(__dirname, 'setup-globals.ts')],
	}
});
