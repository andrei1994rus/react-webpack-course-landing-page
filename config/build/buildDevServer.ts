import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const isDev = options.mode === 'development';
  return {
    port: options.port ?? 3000,
    hot: isDev,
    open: true,
  };
}
