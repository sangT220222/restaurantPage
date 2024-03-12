const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins :[
    new HtmlWebpackPLugin({
        template: './src/index.html',
        title: 'Development',
    })
  ]
};