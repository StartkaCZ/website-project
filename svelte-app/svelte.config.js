import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'website-project'; // Replace with your actual repository name

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : `/${repoName}`
		  },
		  prerender: {
			default: true
		  }
	}
};

export default config;
