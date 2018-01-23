const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'dist'),
  getEntryPath: (standalone) => standalone ? `./src/${standalone}/standalone.js` : './src/index.js',
};