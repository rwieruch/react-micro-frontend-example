const webpack = require('webpack');

const commonPaths = require('./common-paths');

const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.png/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ]
};

module.exports = config;