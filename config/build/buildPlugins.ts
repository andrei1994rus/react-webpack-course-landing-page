import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import Dotenv from 'dotenv-webpack';

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration['plugins'] {
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      title: 'Course landing page on React+Webpack',
    }),
    new DefinePlugin({
      __ENV__: JSON.stringify(mode),
    }),
    new Dotenv(),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css',
      })
    );
    plugins.push(new TerserWebpackPlugin());
  }

  return plugins;
}
