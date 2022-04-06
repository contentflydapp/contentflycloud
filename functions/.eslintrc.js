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
    "require-jsdoc": 0,
    "arrow-parens": 0,
    eqeqeq: 0,
    "no-await-in-loop": 2,
    "no-shadow": 0,
    "no-use-before-define": 0,
    "no-unused-vars": 2,
    "no-undef": 2,
    "no-throw-literal": 2,
    "react/forbid-prop-types": 0,
    "react/jsx-curly-newline": 0,
    "react/prefer-stateless-function": 0,
    "react/state-in-constructor": 0,
    "react/sort-comp": 0,
    "default-case": 0,
    "no-param-reassign": 0,
    "class-methods-use-this": 0,
    "no-restricted-syntax": 0,
    "arrow-body-style": 0,
    "prefer-const": 1,
    "max-len": ["off", { code: 120 }]
  },
  parserOptions: {
    ecmaVersion: 12
  }
}
