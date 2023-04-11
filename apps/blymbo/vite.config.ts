import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [imagetools({
		defaultDirectives: id => {
      if (id.searchParams.has('fullwidth')) { // the `hero` directive was set on the image
         return new URLSearchParams('?width=1340;674&format=webp&srcset')
      }
      return new URLSearchParams()
   }
	}
	), sveltekit()]
});
