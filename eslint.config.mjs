import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import parser from "@typescript-eslint/parser";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: { globals: globals.es2022, parser },
  },
  {
    rules: {
      "sort-imports": "off",
      "no-unused-vars": "off",
      "n/no-missing-import": "off",
      "no-use-before-define": "off",
      "n/prefer-global/process": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          caughtErrors: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: ["lib", "dist", "build", "node_modules"],
  },
]);
