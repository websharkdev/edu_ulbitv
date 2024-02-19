import webpack from "webpack";

import { BuildWebpackConfig } from "./config/build/build.webpack.config";
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = BuildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
