module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '"parser": "@typescript-eslint/parser"',
  parserOptions: {
    // parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: ['.vue'],
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
