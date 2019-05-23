const path = require('path');
const merge = require('webpack-merge');
const baseConfig=require('./webpack.base');

module.exports =merge(baseConfig, {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: path.resolve(__dirname, './dist')
  },
  devtool: '#eval-source-map'
});
