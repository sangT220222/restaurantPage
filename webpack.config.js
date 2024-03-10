const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins :[
    new HtmlWebpackPLugin({
        template: './src/index.html',
    })
  ]
};