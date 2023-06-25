module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": 2,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/typedef": [
      "error",
      {
        arrowParameter: false,
        variableDeclaration: false,
      },
    ],
    "no-console": 2,
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "return",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "block",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: "block",
      },
      {
        blankLine: "always",
        next: "block-like",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: "block-like",
      },
    ],
  },
};
