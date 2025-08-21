module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11'],
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // This enables the new JSX transform for React 17+
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [],
};