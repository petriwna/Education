const path = require('node:path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const envs = dotenv.config();
dotenvExpand.expand(envs);

console.log(process.env.NODE_ENV);

function resolve(filepath, fileName) {
  return path.resolve(process.cwd(), 'src', 'pages', filepath, fileName)
}

const isDevMode = process.env.DEV_STAGE !== "production";

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    main: resolve('Main', 'index.ts')
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name]-[fullhash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json', 'js']
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(process.cwd(), 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: ["@babel/env", "@babel/preset-typescript"],
          plugins: [],
        },
      },
      {
        test: /\.scss$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [new CleanWebpackPlugin({verbose: true}),
    new CopyPlugin({patterns: [{from: "public", to: "public"}]}),
    !isDevMode && new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "main.html",
      template: resolve('Main', 'main.html')
    })
  ].filter(Boolean),
  devtool: 'source-map'
}
