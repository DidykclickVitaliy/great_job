module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        // 'plugin:@typescript-eslint/recommended',
        "plugin:react/jsx-runtime",
        "plugin:i18next/recommended",
        "airbnb",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "@typescript-eslint", "i18next"],
    rules: {
        indent: [2, 4],
        quotes: ["error", "double"],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["to", "data-testid", "variant"],
            },
        ],
        "linebreak-style": ["error", "windows"],
        "max-len": ["error", { code: 95, comments: 150 }],
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "no-unused-vars": "warn",
        "react/jsx-props-no-spreading": "warn",
        "no-unneeded-ternary": "warn",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": "off",
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ["**src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
