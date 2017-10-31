const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:{
    index:'./src/index.js',
    another:'./src/another-module.js',
    vendor:[
      'lodash','react','react-dom','babel-polyfill'
    ]
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  resolve: {
    extensions:['.js','.jsx','.scss','.css']
  },
  module:{
    rules:[
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader'}
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        options:{
          outputPath:'images/'
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Enzyme mocha',
      template:'src/index.html',
      inject:'body'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common'
    })
  ]
};