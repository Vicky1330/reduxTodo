import {  blackA, green, mauve, violet } from "@radix-ui/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				...blackA,
				...green,
				...mauve,
				...violet,
			},
    },
  },
  plugins: [],
};
