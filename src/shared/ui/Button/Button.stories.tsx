import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/theme/ThemeContext";
import { Button, ButtonVariant } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});

Clear.args = {
    children: "TEXT",
    variant: ButtonVariant.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "TEXT",
    variant: ButtonVariant.OUTLINED,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "TEXT",
    variant: ButtonVariant.OUTLINED,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
