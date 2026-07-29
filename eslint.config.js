// eslint.config.js
import { defineConfig, includeIgnoreFile } from "eslint/config";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import globals from "globals";
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, 
        ...globals.node, 
        ...globals.jest,
      },
    },
  },
]);
