import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { settings: { react: { version: "detect" } } },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
  },
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "semi": "warn",
    },
  },
];