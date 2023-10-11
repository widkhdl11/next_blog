import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yjpg: "YEONGJUPunggiGinsengTTF",
      },
      colors: {
        "d-purple": "#be93c5",
        "d-green": "#7bc6cc",
      },
    },
  },
  plugins: [],
};
export default config;
