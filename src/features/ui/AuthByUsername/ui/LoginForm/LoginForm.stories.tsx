import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { LoginFormLazy } from "./LoginForm.lazy";

export default {
    title: "features/LoginForm",
    component: LoginFormLazy,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        StoreDecorator(
            {
                loginForm: {
                    username: "admin",
                    password: "123",
                },
            },
        )],
} as ComponentMeta<typeof LoginFormLazy>;

const Template: ComponentStory<typeof LoginFormLazy> = (args) => <LoginFormLazy {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];
