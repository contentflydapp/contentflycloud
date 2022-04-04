module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "object-curly-spacing": 0,
    "comma-dangle": 0,
    "quote-props": 0,
    semi: 0,
    quotes: 0,
    indent: ["error", 2],
    "require-jsdoc": 0
  },
  parserOptions: {
    ecmaVersion: 12
  }
}
