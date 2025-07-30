import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  react.configs.recommended,
  prettier,
  tailwindcss.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];