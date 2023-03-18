import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import { RouterDecorator } from "shared/config/storybook/decorators/RouterDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Navbar } from "./Navbar";

export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [(story: Story) => (RouterDecorator(story))],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];
