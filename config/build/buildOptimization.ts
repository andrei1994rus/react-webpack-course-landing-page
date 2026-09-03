import TerserWebpackPlugin from 'terser-webpack-plugin';

export function buildOptimization(): any {
  const config = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name(module: { context: { match: (arg0: RegExp) => any[] } }) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.tsx?$/,
        parallel: true,
      }),
    ],
  };

  return config;
}
