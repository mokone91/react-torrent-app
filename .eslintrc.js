module.exports = {
  "plugins": [
    "react"
  ],
  "extends": [
    "plugin:react/all"
  ],
  "parser": "babel-eslint",
  "rules": {
    "quotes": [1, "double"],
    "semi": [1, "always"],
    "no-unused-vars": 1,
    "react/prop-types": 1,
    "react/jsx-handler-names": 0,
    "react/forbid-component-props": 0,
    "react/jsx-space-before-closing": 0,
    "react/jsx-tag-spacing": 0,
    "react/sort-prop-types": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-sort-props": 0,
    "react/no-unused-prop-types": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
  },
  "parserOptions": {
    "sourceType": "module"
  }
};