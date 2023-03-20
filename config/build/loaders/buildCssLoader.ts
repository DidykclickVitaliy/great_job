import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

export function buildCssLoader(isDev: boolean): RuleSetRule {
    return {
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
}
