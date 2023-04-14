import path from "path";
import webpack, { Configuration, ModuleOptions, RuleSetRule } from "webpack";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: {config: Configuration}) => {
    const configModule: ModuleOptions = config.module!;
    const configResolve = config.resolve!;
    const configPlugins = config.plugins;

    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    configResolve.extensions?.push(".tsx", ".ts", ".js");
    configResolve.modules = [path.resolve(paths.src), "node_modules"];

    configModule.rules = configModule.rules?.map((rule: RuleSetRule | "...") => {
        const findDefaultSvgLoader = rule !== "..." && rule.test instanceof RegExp
         && rule.test.toString().includes("svg");

        if (findDefaultSvgLoader) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    configModule.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    }, buildCssLoader(true));

    configPlugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
        }),
    );

    return config;
};
