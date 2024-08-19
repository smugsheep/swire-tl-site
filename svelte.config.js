import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: ['.md'],
    layout: 'src/posts/__layout/__layout.svelte',
    highlight: {
        // https://github.com/pngwn/MDsveX/issues/100#issuecomment-671019661
        highlighter: (code, lang) => {
            if (lang?.includes('lyrics')) {
                const escaped = code.replace(/{/g, '&#123;').replace(/}/g, '&#125;')
                return `<Components.pre><code>${escaped}</code></Components.pre>`
            }

            return `<pre><code>${code}</code></pre>`
        },
    },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
}

export default config
