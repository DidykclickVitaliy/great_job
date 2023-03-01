module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        // 'plugin:@typescript-eslint/recommended',
        "plugin:react/jsx-runtime",
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
        "@typescript-eslint",
    ],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        indent: [2, 4],
        quotes: ["error", "double"],
        "linebreak-style": ["error", "windows"],
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".tsx"] }],
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
};
