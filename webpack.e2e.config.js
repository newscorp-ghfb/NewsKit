/*
This module is used by the visual regression tests to run the demos.

Type checking is disabled by default for speed, it's 5x slower!
If type checking is desired for debugging remove both cache-loader and thread-loader and set transpileOnly to false',
*/

const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

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
        use: [
          {loader: 'cache-loader'},
          {loader: 'thread-loader'},
          {
            loader: 'ts-loader',
            options: {
              configFile: 'e2e/tsconfig.json',
              transpileOnly: true,
            },
          },
        ],
        exclude: [
          /src\/icons\/(filled|outlined)\/(material|material-outlined)\/\.*/,
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'import-glob',
        exclude: [
          /src\/icons\/(filled|outlined)\/(material|material-outlined)\/\.*/,
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3)$/,
        loader: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: 'static', to: ''}],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
