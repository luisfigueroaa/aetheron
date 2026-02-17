/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#5F9598",
				secondary: "#1D546D", 
			}
		},
	},
	fontFamily: {
		sans: ["ui-sans-serif", "system-ui", "sans-serif"],
	},
	plugins: [],
}

