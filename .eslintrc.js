module.exports = {
  extends: ["next", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "src/generated/",
    "**/*.wasm.js",
    "**/*.runtime.js",
    "**/*.index.js",
    "**/*.edge.js",
    "**/*.react-native.js"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-empty-object-type": "off"
  }
};
