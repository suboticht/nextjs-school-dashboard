import type { Config } from "tailwindcss";

const config: Config = {
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
        HTSky: "#70e4ef",
        HTSkyLight: "#bde0fe",
        HTPurple: "#EF709D",
        HTPurpleLight: "#e7c6ff",
        HTYellow: "#e2ef70",
        HTYellowLight: "#fefae0",
      }
    },
  },
  plugins: [],
};
export default config;
