// Load the mock implementation and expose it as global window
import * as mockWindow from './__mocks__/window.js';
import mock from 'mock-require';
import { JSDOM } from 'jsdom';
import * as fs from 'node:fs';

// "node:original-fs" の require を "node:fs" に差し替え
mock('node:original-fs', fs);

const { DOMParser } = new JSDOM().window;


// @ts-ignore - tests run in Node; create a global window object
// Assign all named exports (and default) to window
const w: any = { ...mockWindow };

Object.assign(global as any, {
	DOMParser,
	window: w,
});
Object.assign(globalThis as any, {
	DOMParser,
	window: w,
});
