import { PartialStoryFn } from "@storybook/addons";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { Theme } from "shared/lib/theme/ThemeContext";

import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (story: PartialStoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            {story()}
        </div>
    </ThemeProvider>
);
