const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const commonPaths = require('./common-paths');

const config = {
  entry: [
    commonPaths.getEntryPath(standalone),
  ],
  module: {
    rules: [
      {
        test: /\.less/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader'
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css'),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devtool: 'source-map'
};

module.exports = config;