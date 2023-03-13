/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"cupcake",
			"emerald",
			"synthwave",
			"business",
			"acid",
			"lemonade",
			"winter",
		],
	},
};
