const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./build-utils/webpack.common');

const getAddons = (addonsArg) => {
  let addons = []
    .concat.apply([], [addonsArg])
    .filter(Boolean);

  return addons.map(name => require(`./build-utils/addons/webpack.${name}.js`))
};

module.exports = (env) => {
  const getEnvConfig = require(`./build-utils/webpack.${env.env}.js`);

  const envConfig = getEnvConfig(env.standalone)
  const addons = getAddons(env.addons);

  return webpackMerge(commonConfig, envConfig, ...addons);
};