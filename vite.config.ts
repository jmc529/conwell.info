import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				// Only Sass variables/mixins belong here. Font faces are imported
				// once via `$lib/fonts` so they are not re-emitted into every
				// component's compiled stylesheet.
				additionalData: `
					@use '$lib/scss/variables' as *;
					@use '$lib/scss/mixins' as *;
				`
			}
		}
	}
});
