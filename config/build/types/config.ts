export type BuildMode = "development" | "production";
export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
};

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildENV {
  mode: BuildMode;
  port: number;
}
