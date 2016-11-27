const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.png$/,
        loaders: [
          path.resolve(__dirname, '../dist/index.js?cols=80'),
        ],
      },
    ],
  },
  debug: true,
  stats: {
    color: true,
    reasons: true,
  },
};
