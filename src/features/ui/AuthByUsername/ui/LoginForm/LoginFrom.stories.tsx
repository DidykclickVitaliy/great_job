import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];
