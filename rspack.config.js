/* eslint-disable @typescript-eslint/no-unused-vars */
const {composePlugins, withNx, withReact} = require('@nrwl/rspack');

// Nx plugins for Rspack.
module.exports = composePlugins(
  withNx(),
  withReact({
    stylePreprocessorOptions: ['src'],
  }),
  (config, {options, context}) =>
    // Update the Rspack config as needed here.
    // e.g. config.plugins.push(new MyPlugin())
    config,
);
