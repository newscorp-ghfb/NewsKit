module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  settings: {
    next: {
      rootDir: 'site/',
    },
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  plugins: ['cup', 'header', 'prettier', 'react-hooks', 'import'],
  env: {
    jest: true,
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    cy: true,
    Cypress: true,
    window: true,
  },
  rules: {
    'no-undef': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    // The latest eslint package will flag type imports and cannot be fixed by setting devDependencies to true.
    // There is an open pr for this: https://github.com/import-js/eslint-plugin-import/issues/1618
    // This rule has been disabled in individual files instead
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false,
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['csstype'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        arrowParens: 'avoid',
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
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
          {
            optionalDependencies: false,
            devDependencies: false,
          },
        ],
      },
    },
    {
      files: ['site/**/*.ts', 'site/**/*.tsx'],
      rules: {
        'react/display-name': 'off',
        'import/no-unresolved': [
          'error',
          {
            ignore: ['newskit', 'csstype', '@components/page-title'],
          },
        ],
      },
    },
    {
      files: ['cypress/**/*.spec.js'],
      env: {
        mocha: true,
      },
    },
    {
      files: ['site/**/*.tsx'],
      rules: {
        'import/no-anonymous-default-export': [
          'error',
          {
            allowArrowFunction: false,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
          },
        ],
      },
    },
  ],
};
