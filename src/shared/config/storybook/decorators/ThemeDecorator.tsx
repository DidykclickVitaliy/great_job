import { Story } from "@storybook/api";

import { ThemeProvider } from "app/providers/ThemeProvider";
import { Theme } from "shared/lib/theme/ThemeContext";

import "app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            {story()}
        </div>
    </ThemeProvider>
);
