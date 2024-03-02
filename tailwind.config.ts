//import type { Config } from "tailwindcss";
//const config: Config = {
//  content: [

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "base-bg-light": "#F2F2F2",
        "base-font-light-50": "#F9F9F9",
        "base-brand-primary-600": "#672F93",
        "base-global-blue-600": "#0053A1",
        "base-global-blue-700": "#0083C9",
        "base-font-dark-800": "#1D1D1D",
        "base-font-warning-500": "#6F6F6F",
        "base-button": "#E6E5E5",
        "base-bg-bg": "#f4f4f4",

        "base-bg-dark-800": "#000000",
        "base-text-dark-800": "#FFFFFF",
      },

      animation: {
        blink: "blink 2s infinite",
      },

      boxShadow: {
        'custom': '0 0 0 1px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};

//export default config;
