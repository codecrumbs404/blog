/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
	  extend: {
		colors: {
		  white: '#f8f9fa',
		},
		fontFamily: {
		  body: ['Manrope', ...require('tailwindcss/defaultTheme').fontFamily.sans],
		},
		gridTemplateColumns: {
		  list: 'repeat(auto-fill, minmax(400px, max-content))',
		},
	  },
	},
	plugins: [require('@tailwindcss/typography')],
	mode: 'jit', // Ensure JIT mode is active
  }
  