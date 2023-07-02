/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretandard: ["Pretendard-Regular"],
      },
      colors: {
        custom: {
          blue: "#0CAFFF", //#0CAFFF
          darkgray: "#1C1C1C",
          lightgray: "#DCDEE3",
          black: "#121212",
        },
      },
      keyframes: {
        "appear-bottom-to-top": {
          from: {
            opacity: 0,
            transform: "translateY(100px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "appear-bottom-to-top":
          "0.6s appear-bottom-to-top ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
