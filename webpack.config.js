/* eslint-disable import/no-extraneous-dependencies */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default

const styledComponentsTransformer = createStyledComponentsTransformer({})

module.exports = function config(env) {
  if (env && env.analyzer) plugins.push(new BundleAnalyzerPlugin())

  return {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'mjs']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'build/index.html'
      }),
      new MiniCssExtractPlugin({ filename: 'index.css' })
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            getCustomTransformers: () => ({
              before: [styledComponentsTransformer]
            })
          }
        },
        {
          test: /\.svg$/,
          use: 'url-loader'
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    }
  }
}
