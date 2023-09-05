import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// export default {
// 	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: [vitePreprocess()]
// };

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess()
};

// export default {
// 	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: vitePreprocess({
// 		css: {
// 			preprocessorOptions: {
// 				scss: {
// 					prependData: '@import "./src/styles/variables.scss";'
// 				}
// 			}
// 		}
// 	})
// };
