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
    plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "i18next",
    ],
    rules: {
        indent: [2, 4],
        quotes: ["error", "double"],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["to", "data-testid", "variant", "size", "schemaKey"],
            },
        ],
        "linebreak-style": ["error", "windows"],
        "max-len": ["error", { code: 100, comments: 150 }],
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-props-no-spreading": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "no-unused-vars": "warn",
        "no-unneeded-ternary": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "no-param-reassign": "off",
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ["**src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
            },
        },
    ],
};
