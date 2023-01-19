const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
        controls: true,
        actions: false,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.tsx$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          parser: 'typescript', //This might not be needed
          prettierConfig: {printWidth: 80, singleQuote: false},
        },
      },
    },
    'storybook-addon-performance/register',
    './addons/tealium/preset.js',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-a11y',
  ],
  // https://github.com/storybookjs/storybook/issues/13277
  // Remove Emotion aliases once the issue above is resolved
  webpackFinal: async config => {
    // These dependencies are not transpiled so they do not work on IE11
    // that's why we need to exclude them  (include in transpilation)
    config.module.rules[0].exclude = /node_modules\/(?!(yup|react-hook-form|goober)\/).*/;

    return {
      ...config,
      module: {
        rules: [...config.module.rules],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          '@emotion/provider': toPath('node_modules/@emotion/provider'),
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          'babel-plugin-emotion': toPath('node_modules/@emotion/babel-plugin'),
        },
      },
    };
  },
  typescript: {
    reactDocgen: false, // added to negate https://github.com/styleguidist/react-docgen-typescript/issues/356
  },
  staticDirs: ['../fonts', '../static', 'private-fonts'],
  // we need the stories.json file to be generated so that we can check that all
  // Storybook urls in the doc site build are valid
  features: {buildStoriesJson: true,}
};
