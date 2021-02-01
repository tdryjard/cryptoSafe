const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve('build'),
    filename: 'App.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Rules to load scss
      {
      // Some change here
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // New rules to load css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  externals: {
    react: "react"
  },
  plugins: [new HtmlWebpackPlugin()]
};