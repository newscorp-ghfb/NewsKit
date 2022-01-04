/* global process */

const prod = process.env.BUILD_ENV === 'production';

// set production env for exact-react-types-loader
if (prod) {
  process.env.WEBSITE_ENV = 'production';
}

export default {
  'process.env.STATIC_ROOT': '/static/',
  'process.env.GITHUB_AUTH_TOKEN': process.env.GITHUB_AUTH_TOKEN || '',
  ...(process.env.BUILD_ENV === 'production'
    ? {
        'process.env.WEBSITE_ENV': 'production',
      }
    : {}),
};
