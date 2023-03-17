import path from "path";
import type { Configuration, ModuleOptions, RuleSetRule } from "webpack";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: {config: Configuration}) => {
    const configModule: ModuleOptions = config.module!;
    const configResolve = config.resolve!;

    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    configResolve.extensions?.push(".tsx", ".ts", ".js");
    configResolve.modules?.push(paths.src);

    configModule.rules = config.module?.rules?.map((rule: RuleSetRule | "...") => {
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

    return config;
};
