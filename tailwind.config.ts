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
        CFBlack: 'var(--CFBlack)',
        CFDarkPurple: 'var(--CFDarkPurple)',
        CFPurple: 'var(--CFPurple)',
        CFPink: 'var(--CFPink)',
        CFYellow: 'var(--CFYellow)',
        CFWhite: 'var(--CFWhite)'
      },
      boxShadow: {
        "CFDefault": "0px 8px 0px 0px var(--CFBlack)",
        "CFHover": "0px 8px 0px 0px var(--CFDarkPurple)"
      },
      fontSize: {
        CFl: ["56px", "71px"],
        CFxs: ["16px", "21px"],
      },
      fontFamily: {
        figtree: ['Figtree', 'sans'],
        'bold-poppins': ['var(--font-bold-poppins)'],
        'poppins': ['var(--font-poppins)'],
        'poppins-italic': ['var(--font-poppins-italic)'],
        'extra-bold-italic-poppins': ['var(--font-extra-bold-italic-poppins)'],
        'space-grove-medium': ['var(--font-space-grove-medium)'],
        'space-grove-bold': ['var(--font-space-grove-bold)'],
        'space-grove-variable': ['var(--font-space-grove-variable)']
      }
    },
  },
  plugins: [],
};
export default config;
