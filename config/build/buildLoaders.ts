import type { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  // 5 lesson for git
  const cssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates "style" node from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:4]"
              : "[hash:base64:4]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [typescriptLoader, cssLoader];
}
