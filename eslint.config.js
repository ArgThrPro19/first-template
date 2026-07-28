// eslint.config.js
import { defineConfig, includeIgnoreFile } from "eslint/config";
import js from "@eslint/js";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  js.configs.recommended,
]);
