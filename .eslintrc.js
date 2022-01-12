module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
  },
};