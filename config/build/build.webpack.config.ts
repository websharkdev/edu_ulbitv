import { Configuration } from "webpack";
import { BuildLoaders } from "./build.loaders";
import { BuildPlugins } from "./build.plugins";
import { BuildResolve } from "./build.resolve";
import { BuildOptions } from "./types/config";
import { BuildDevServer } from "./build.devserver";

export function BuildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode } = options;
  return {
    mode: mode, // development | production
    entry: paths.entry, // Аналогичная запись, но пути могут отличаться по этому используем path './src/index.js'
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: mode === "development" ? "inline-source-map" : undefined,
    plugins: BuildPlugins(options),
    module: {
      rules: BuildLoaders(),
    },
    resolve: BuildResolve(),
    devServer: mode === "development" ? BuildDevServer(options) : undefined,
  };
}
