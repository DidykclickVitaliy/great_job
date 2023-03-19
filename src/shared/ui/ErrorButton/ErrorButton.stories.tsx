import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import {
    ErrorBoundryDecorator,
} from "shared/config/storybook/decorators/ErrorBoundryDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { ErrorButton } from "./ErrorButton";

export default {
    title: "shared/ErrorButton",
    component: ErrorButton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ErrorBoundryDecorator()],
} as ComponentMeta<typeof ErrorButton>;

const Template: ComponentStory<typeof ErrorButton> = (args) => <ErrorButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Link",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Link",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];
