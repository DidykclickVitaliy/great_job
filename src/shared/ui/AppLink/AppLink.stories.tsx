import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { AppLink } from "./AppLink";

export default {
    title: "shared/AppLink",
    component: AppLink,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: {
        to: "/",
    },
    decorators: [(story: Story) => RouterDecorator(story)],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Link",
    variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Link",
    variant: "secondary",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Link",
    variant: "primary",
};
PrimaryDark.decorators = [ThemeDecorator("dark")];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Link",
    variant: "secondary",
};
SecondaryDark.decorators = [ThemeDecorator("dark")];
