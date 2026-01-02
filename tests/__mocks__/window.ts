import { createRequire } from 'node:module';
import TurndownService from 'turndown';

export const require = createRequire(import.meta.url);
export { TurndownService };
