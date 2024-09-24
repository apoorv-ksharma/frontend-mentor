import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "var(--yellow)",
        grayLight: "var(--grayLight)",
        white: "var(--white)",
        offWhite: "var(--offWhite)",
        lightGrey: "var(--lightGrey)",
        smokeyGrey: "var(--smokeyGrey)",
        offBlack: "var(--offBlack)",
        purple: "var(--purple)",
        lightRed: "var(--lightRed)",
      },
      fontFamily: {
        figtree: ['Figtree', 'sans'],
        'bold-poppins': ['var(--font-bold-poppins)'],
        'poppins': ['var(--font-poppins)'],
        'poppins-italic': ['var(--font-poppins-italic)'],
        'extra-bold-italic-poppins': ['var(--font-extra-bold-italic-poppins)']
      }
    },
  },
  plugins: [],
};
export default config;
