var webpack = require("webpack");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
        main: ['babel-polyfill',__dirname +'/src/index.js']
    },
  output: {
    path:__dirname + '/dist',
    filename:'app.js',
    publicPath:'/'
  },
  devServer:{
    historyApiFallback: true,
     contentBase: __dirname + "/dist/",
     inline: true,
    port: 9000
  },
  module: {
    rules: [
         {
            test: /\.css$/,
             use: [
                 {
                   loader: "style-loader"
                 },
                 {
                   loader: "css-loader",
                   options: {
                     modules: true
                   }
                 }
              ]
          },
      {
        test:  /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: ["babel-loader"],
        
      },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }

    ]
  }

}