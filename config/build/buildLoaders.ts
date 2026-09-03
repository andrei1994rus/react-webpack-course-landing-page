import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoaderWithSourceMap = {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  };

  const cssLoader = {
    test: /\.sss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithSourceMap,
    ],
  };

  const babelLoader = buildBabelLoader();

  return [cssLoader, babelLoader];
}
