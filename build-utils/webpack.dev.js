const webpack = require('webpack');
const commonPaths = require('./common-paths');

function getConfig(standalone) {
  return config = {
    entry: [
      'react-hot-loader/patch',
      commonPaths.getEntryPath(standalone),
    ],
    module: {
      rules: [
        {
          test: /\.less/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    },
    devtool: 'eval-source-map'
  };
}


module.exports = getConfig;