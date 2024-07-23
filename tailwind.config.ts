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
      borderRadius: {
        'md': '5px',
      },
      boxShadow: {
        'credit': '0 4px 4px 0 rgba(0,0,0,0.25)',
      },
      textColor: {
        'caspre-blue': '#4361EE',
        'caspre-dark': '#0c1424',
        'caspre-bg': '#0C1424',
        'caspre-primary': '#D9D9D9',
        'caspre-secondary': '#FFFFFF',
        'caspre-accent': '#F1FEFB',
        'C5FFE2': '#C5FFE2',
        'FFD2CB': '#FFD2CB',
        'DCC3FF': '#DCC3FF',
      },
    },
  },
  plugins: [],
};
export default config;
