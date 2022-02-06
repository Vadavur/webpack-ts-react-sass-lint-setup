const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'js/main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'}
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/public/index.html'
  }), new ForkTsCheckerWebpackPlugin()],

  devServer: {
    port: 8000,
    static: './dist'
  },
  devtool: 'source-map'
}