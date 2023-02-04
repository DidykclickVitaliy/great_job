import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

import { BuildOptions } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
    }),
  ];
}
