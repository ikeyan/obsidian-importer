import moment from 'moment';

export const Platform = {
	isDesktopApp: true,
};
// Re-export the installed moment so code that imports `moment` from
// 'obsidian' gets a working implementation.
export { moment };
