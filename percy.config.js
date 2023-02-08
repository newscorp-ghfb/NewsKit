const SKIP_GITHUB_CHECK = process.env.SKIP_PERCY_CHECK === 'true';
const storybookConfig = require('./percy-storybook.config.json');

module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 1280],
  },
  storybook: {
    ...storybookConfig,
    ...(SKIP_GITHUB_CHECK ? {include: 'skip-percy-tests'} : {}),
  },
};
