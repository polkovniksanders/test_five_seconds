module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": "plugin:react/recommended",
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "react/prop-types": [ "off" ],
    "semi" : [ 1, "never" ],
    "spaced-comment": 0,
    "space-before-function-paren": 0,
    "jsx-quotes": 0,
    "no-class-assign": 0,
    "react/jsx-indent": [ 2, 2 ],
    "react/jsx-indent-props": [ 2,2 ],
    "react/jsx-tag-spacing": 0,
    "brace-style": 0,
    "no-return-assign": 0,
    "no-trailing-spaces": 0,
    "curly": [ 0, "multi" ],
    "template-curly-spacing" : "off",
    "indent": [ "warn", 2, {
      "ignoredNodes": [ "TemplateLiteral" ],
      "SwitchCase": 1,
    } ],
    "comma-dangle": [ "warn", "always-multiline" ],
    "array-bracket-spacing": [ "error", "always" ],
  },
}
