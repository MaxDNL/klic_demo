const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common,{
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev')
      }
    })
  ]
});