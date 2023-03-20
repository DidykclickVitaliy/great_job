import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from "path";

import { BuildOptions } from "./types/config";

export function buildPlugins(
    options: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, isDev, analyzeBundle } = options;

    return [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.html),
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyzeBundle ? "server" : "disabled",
            openAnalyzer: false,
        }),
    // new webpack.HotModuleReplacementPlugin(), "hot: true" automatically applies HMR plugin
    ];
}
