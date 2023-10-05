import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backgroundColor: {
        "custom-pink-500": "rgba(237, 30, 121, 1)",
        "custom-teal": "rgb(193,239,224)",
        "custom-red": "rgb(247, 194, 190)",
        "custom-grey": "rgb(239, 239, 239)",
      },
      textColor: {
        "custom-pink-500": "rgba(237, 30, 121, 1)",
        "button-red": "rgb(224,21,7)",
      },
      borderRadius: {
        custom: "1.5rem", // Adjust the value as needed
      },
    },
  },
  plugins: [],
};
export default config;
