const SKIP_GITHUB_CHECK = process.env.SKIP_PERCY_CHECK === 'true';

console.log('whaaaaat is this----------------------------------');
console.log({SKIP_GITHUB_CHECK});
module.exports = {
  version: 2,
  snapshot: {
    widths: [375, 1280],
  },
  storybook: {
    ...(SKIP_GITHUB_CHECK ? {include: 'skip-percy-tests'} : {}),
  },
};
