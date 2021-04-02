module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['cup', 'header', 'prettier', 'react-hooks'],
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    cy: true,
    Cypress: true,
    window: true
  },
  rules: {
    'no-undef': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {optionalDependencies: false, devDependencies: true},
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': ['error', {ignore: ['csstype']}],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        arrowParens: 'avoid',
      }
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.tsx'],
      env: {
        browser: true,
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['src/!(test)/*.ts', 'src/!(test)/*.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {optionalDependencies: false, devDependencies: false},
        ],
      },
    },
    {
      files: ['site/**/*.ts', 'site/**/*.tsx'],
      rules: {
        'react/display-name': 'off',
        'import/no-unresolved': [
          'error',
          {ignore: ['newskit', 'csstype', '@components/page-title']},
        ],
      },
    },
    {
      files: ['cypress/**/*.spec.js'],
      env: {
        mocha: true,
      },
    },
  ],
};
