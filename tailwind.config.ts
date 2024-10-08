import { config as _config } from "@/config/config";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#090C08",
				light: "#fff",
				secondaryLight: "#e5e5e5",
				primary: "#FF0090",
				secondary: "#090C9B",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
				center: true,
				screens: {
					sm: "600px",
					md: "728px",
					lg: "984px",
					xl: "1024px",
					"2xl": "1280px",
				},
			},
		},
	},
	plugins: [],
};
export default config;
