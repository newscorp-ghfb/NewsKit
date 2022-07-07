module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  plugins: ['cup', 'header', 'prettier', 'import'],
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    window: true,
  },
  rules: {
    'no-undef': 'off',
    // The latest eslint package will flag type imports and cannot be fixed by setting devDependencies to true.
    // There is an open pr for this: https://github.com/import-js/eslint-plugin-import/issues/1618
    // This rule has been disabled in individual files instead
    'import/no-extraneous-dependencies': [
      'error',
      {optionalDependencies: false, devDependencies: true},
    ],
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': ['error', {ignore: ['csstype']}],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        arrowParens: 'avoid',
      },
    ],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
  },
};
