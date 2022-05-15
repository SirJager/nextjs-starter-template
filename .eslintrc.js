module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],

  rules: {
    "require-jsdoc": 0,
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "18.0.0",
    },
  },
};
