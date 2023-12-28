import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#AB23FF",
          200: "#3D8BFF",
        },
        dark: {
          100: "#13171D",
          200: "#13171d99",
        },
        "dark-rgba": "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
