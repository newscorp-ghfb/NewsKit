const path = require('path');

// This module is used by the visual regression tests to run the demos.
module.exports = {
  entry: './e2e/index',
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    path: path.join(__dirname, 'e2e/dist'),
    filename: 'index.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'e2e/tsconfig.json',
        },
        exclude: [/src\/icons\/(filled|outlined)\/material\/\.*/],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'import-glob',
        exclude: [/src\/icons\/(filled|outlined)\/material\/\.*/],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
