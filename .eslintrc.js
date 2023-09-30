module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["react-app"],
  plugins: ["react", "jsx-a11y"],
  rules: {
    "no-console": "off",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prefer-stateless-function": 0,
  },
};
