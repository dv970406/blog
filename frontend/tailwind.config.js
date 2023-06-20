/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: "#3457D5", //#0CAFFF
          darkgray: "#868B94",
          lightgray: "#DCDEE3",
          black: "#121212",
        },
      },
    },
  },
  plugins: [],
};
