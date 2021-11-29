import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  "extensions": [".svelte", ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  preprocess: [mdsvex(mdsvexConfig)],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      define: {
        'process.env': process.env,
      },
    },
    target: '#svelte',
    adapter: vercel(),
  },
}

export default config