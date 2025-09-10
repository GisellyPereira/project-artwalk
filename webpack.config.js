const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js', // ponto de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // limpa dist a cada build
    assetModuleFilename: 'assets/[hash][ext][query]', // organiza imagens no dist
  },
  module: {
    rules: [
      {
        test: /\.js$/, // processa arquivos JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // processa arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // processa imagens
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // base do HTML
      filename: 'index.html',       // gera no dist/
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
  },
};
