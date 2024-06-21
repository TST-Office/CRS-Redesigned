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
        "dominant": "#1D1D1D",
        "border": "#4D4D4D",
        "dominant-variant": "#444444",
        "action": "#00C666",
        "text-tint-white": "#FFFFFF",
        "text-shade-white": "#D0D0D0",
        red: "#FF6666 ", 
   
      },
    },
  },
  plugins: [],
};
export default config;
