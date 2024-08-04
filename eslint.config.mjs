import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: ["**/*.config.ts"],
    rules: {
      semi: "error",
      "no-var": "error",
      "no-redeclare": "error",
      "no-unused-vars": "error",
      "no-cond-assign": "error",
      "block-scoped-var": "error",
      "no-duplicate-imports": "error",
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": true,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }],
      "eqeqeq": "warn",
      "no-console": "warn",
      "valid-typeof": "warn",
      "prefer-const": "warn",
      "no-dupe-else-if": "warn",
      "prefer-template": "warn",
      "no-unneeded-ternary": "warn",
      "arrow-body-style": ["warn", "as-needed"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];