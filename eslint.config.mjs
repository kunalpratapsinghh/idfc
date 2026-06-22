// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all // optional unless you're using "eslint:all"
});

const configuration = [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/public/**",
      "**/ui/**"
    ]
  }, // Equivalent to "eslint:all"
  ...compat.extends(
    // "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ),
  ...compat.extends("eslint:recommended"),
  {
    plugins: {
      prettier,
      "unused-imports": eslintPluginUnusedImports,
      "simple-import-sort": eslintPluginSimpleImportSort
    },
    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "unused-imports/no-unused-imports": "error",
      "react-hooks/exhaustive-deps": "off",
      // Use the TS-aware rule; allow leading underscore for intentional unused args.
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" }, // Adds a gap **after** imports
        { blankLine: "never", prev: "import", next: "import" }, // Prevents gaps **between** imports
        { blankLine: "always", prev: "*", next: "export" },
        { blankLine: "never", prev: "export", next: "export" } // Prevents gaps **between** imports
      ]
    }
  },
  ...storybook.configs["flat/recommended"]
];

export default configuration;
