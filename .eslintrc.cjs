module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint", "unused-imports"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "prettier/prettier": ["error", { semi: false }],
    semi: ["error", "never"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
