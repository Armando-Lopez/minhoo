const flowbite = require("flowbite-react/tailwind")
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1840px",
      },
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          1: "#FBB03B",
        },
        black: {
          1: "#1B161C",
          2: "#1B161C80",
        },
        green: {
          1: "#00CE78",
        },
        red: {
          1: "#FD494A",
        },
        gray: {
          1: "#8D8B8E",
          150: "#F0F0F0",
          170: "#FDFDFF",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
