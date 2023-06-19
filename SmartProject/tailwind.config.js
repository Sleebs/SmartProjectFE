/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { color: {} },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00407f",

          secondary: "#AFD2E9",

          accent: "#ee7b30",

          neutral: "#fefefe",

          "base-100": "#f0f6fc",

          info: "#67e0a3",

          success: "#72ed5a",

          warning: "#ffd166",

          error: "#a31621",
        },
      },
    ],
  },
  fontFamily: { sans: "chillax-light" },
  plugins: [require("daisyui")],
};
