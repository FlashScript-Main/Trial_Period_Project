import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
  theme: {
  	extend: {
  		colors: {
			'body-bg-dark': '#070a13',
			'body-bg-light': '#f1f5f9',

			// card
			'nav-card-bg-dark': '#173a55',
			'nav-card-text-dark': '#13b1f8',
			'nav-card-bg-light': '#d7f2fe',
			'nav-card-text-light': '#0f89ca',

			// text
			'main-text-h1-light': '#0f172a',
			'main-text-h1-dark': '#ffffff',
			'main-title': 'rgba(56,189,248,1)',

  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: "class",
  plugins: [
	daisyui,
	tailwindcssAnimate
  ],
};
export default config;
