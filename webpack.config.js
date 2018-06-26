const path = require('path');

module.exports = {
  entry: './index.r.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};