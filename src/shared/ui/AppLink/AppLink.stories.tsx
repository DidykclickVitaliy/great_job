import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Theme } from "shared/lib/theme/ThemeContext";
import { AppLink, AppLinkVariant } from "./AppLink";

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
    variant: AppLinkVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Link",
    variant: AppLinkVariant.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: "Link",
    variant: AppLinkVariant.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Link",
    variant: AppLinkVariant.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
