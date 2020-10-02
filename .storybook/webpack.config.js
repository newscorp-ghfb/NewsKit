const path = require('path');
 
module.exports = {
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          /src\/icons\/(filled|outlined)\/material\/\.*/
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'import-glob',
        include: [path.resolve(__dirname)],
        exclude: [
          /src\/icons\/(filled|outlined)\/material\/\.*/
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};