module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "mocha-no-only",
    "promise",
    "chai-friendly"
  ],
  extends: [
    "react-app",
    "plugin:chai-friendly/recommended"
  ],
  env: {
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true
  },
  globals: {
    "artifacts": false,
    "contract": false,
    "assert": false,
    "web3": false
  },
  rules: {
    "strict": [
      "error",
      "global"
    ],
    "array-bracket-spacing": [
      "off"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": true,
        "allowPattern": ""
      }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "generator-star-spacing": [
      "error",
      "before"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      120,
      2
    ],
    "no-debugger": "error",
    "no-console": "warn",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-mixed-spaces-and-tabs": [
      "error",
      "smart-tabs"
    ],
    "no-redeclare": [
      "error",
      {
        "builtinGlobals": true
      }
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": false
      }
    ],
    "no-undef": "error",
    "no-use-before-define": "off",
    "no-var": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": "error",
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "promise/always-return": "off",
    "promise/avoid-new": "off",
    "prefer-arrow-callback": "error",
    "no-var": "error",
  },
}
