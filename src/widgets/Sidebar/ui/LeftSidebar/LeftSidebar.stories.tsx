import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { LeftSidebar } from ".";

export default {
    title: "widgets/LeftSidebar",
    component: LeftSidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LeftSidebar>;

const Template: ComponentStory<typeof LeftSidebar> = (args) => <LeftSidebar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];
