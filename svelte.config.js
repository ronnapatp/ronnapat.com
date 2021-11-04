import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      define: {
          'env.VITE_SUPABASE_URL': env.VITE_SUPABASE_URL,
          'env.VITE_SUPABASE_ANON_KEY': env.VITE_SUPABASE_ANON_KEY,
      },
    },
    target: '#svelte',
    adapter: vercel(),
  },
}

export default config