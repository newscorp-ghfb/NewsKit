const SKIP_GITHUB_CHECK = process.env.SKIP_PERCY_CHECK === 'true';

module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 1280],
  },
  storybook: {
    [SKIP_GITHUB_CHECK ? 'include' : 'exclude']: ['skip-percy-tests'],
  },
};
