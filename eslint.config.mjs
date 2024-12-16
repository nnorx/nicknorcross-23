import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";
import react from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/dist"],
  },
  react.configs.flat.recommended,
  reactRefresh.configs.vite,
  ...tailwind.configs["flat/recommended"],
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended"
    )
  ),
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "tailwindcss/no-arbitrary-value": "error",
    },
  },
];
