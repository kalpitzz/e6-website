import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const fs = require("fs");
const path = require("path");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

function utils({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-dot-thick": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="12" height="12" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
        )}")`,
      }),
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="60" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2" height="2" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

function encodeImageToBase64(filePath: any) {
  const image = fs.readFileSync(filePath);
  return `data:image/svg+xml;base64,${image.toString("base64")}`;
}

const background1 = encodeImageToBase64(
  path.join(__dirname, "assets/icons/gradient-back.svg")
);

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "text-color1": "var(--text-color-1)",
        "text-color2": "var(--text-color-2)",
        "text-color3": "var(--text-color-3)",
        "text-color4": "var(--text-color-4)",
        "text-color5": "var(--text-color-5)",
        "text-color6": "var(--text-color-6)",
        "text-color7": "var(--text-color-7)",
        "text-color8": "var(--text-color-8)",
        "text-color9": "var(--text-color-9)",
        "text-color10": "var(--text-color-10)",
        "text-color11": "var(--text-color-11)",
      },
      screens: {
        sm: "640px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "1024px", // Large screens and up
        xl: "1280px", // Extra large screens and up,
        "2xl": "1536px", // Large desktops
      },
      boxShadow: {
        t1: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        t2: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        t3: "rgba(0, 0, 0, 0.4) 0px 2px 30px, rgba(0, 0, 0, 0.3) 0px 7px 13px -2px, rgba(0, 0, 0, 0.2) 0px -2px 0px inset;",
        t4: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
      },
      backgroundImage: {
        b1: `url(${background1})`,
      },

      transitionDuration: {
        "2000": "2000ms", // Adding a custom duration
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors, utils],
};

export default config;
