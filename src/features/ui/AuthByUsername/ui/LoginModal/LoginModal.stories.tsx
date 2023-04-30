import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/decorators/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { LoginModal } from "./LoginModal";

export default {
    title: "features/LoginModal",
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [StoreDecorator(
        {
            loginForm: {
                username: "admin",
                password: "123",
            },
        },
    )],
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator("dark")];
