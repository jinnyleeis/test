import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			// A. Typography
			fontFamily: {
				suit: ['var(--font-suit)', 'sans-serif'],
				pretendard: ['var(--font-pretendard)', 'sans-serif'],
			},

			colors: {
				background: 'var(cyan)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
};
export default config;
