import webpack from "webpack";

import { BuildWebpackConfig } from "./config/build/build.webpack.config";
import { BuildENV, BuildPaths } from "./config/build/types/config";
import path from "path";

export default (env: BuildENV) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = +env.mode || 3000;

  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
  return config;
};
