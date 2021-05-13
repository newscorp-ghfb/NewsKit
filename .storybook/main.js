const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['./load-stories.js'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
        controls: false,
        actions: false,
      },
    },
  ],
  // https://github.com/storybookjs/storybook/issues/13277
  // Remove Emotion aliases once the issue above is resolved
  webpackFinal: async config => {
    // These dependencies are not transpiled so they do not work on IE11
    // that's why we need to exclude them  (include in transpilation)
    config.module.rules[0].exclude = /node_modules\/(?!(yup|react-hook-form)\/).*/;

    return {
      ...config,
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
};
