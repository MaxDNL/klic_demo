const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common,{
  output:{
    filename:'[name].[chunkhash].js',
    path:path.resolve(__dirname,'dist')
  },
  devtool:'source-map',
  plugins:[
    new UglifyJSPlugin({
      sourceMap:true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});