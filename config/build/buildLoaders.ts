import type { RuleSetRule } from "webpack";

import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const babelLoader: RuleSetRule = buildBabelLoader();

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
                // replace for asset module webpack, cause file loader deprecated
            },
        ],
    };

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoader: RuleSetRule = buildCssLoader(isDev);

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
