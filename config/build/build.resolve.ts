import { ResolveOptions } from "webpack";

export function BuildResolve(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
