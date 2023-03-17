import { addDecorator } from "@storybook/react";

import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "../../src/shared/lib/theme/ThemeContext";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(ThemeDecorator(Theme.LIGHT));
