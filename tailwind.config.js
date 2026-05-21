/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        fah: "2px 2px 2px -3px black, -2px -2px 2px -3px white, inset -2px -2px 3px -3px black, inset 2px 2px 3px -3px white",
        fahHover: "2px 2px 2px -3px black, -2px -2px 2px -3px white, inset -2px -2px 2px -3px black, inset 2px 2px 2px -3px white",
        fahActive: "0 0 0 0 black, 0 0 0 0 white, inset -1px -2px 2px -3px white, inset 1px 2px 2px -3px black"
      }
    },
  },
  plugins: [],
}

