module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'import/no-duplicates': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
