import { addDecorator } from "@storybook/react";

import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(ThemeDecorator("light"));
