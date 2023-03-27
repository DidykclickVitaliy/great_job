import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Lorem ipsum dolor sit amet",
    isOpen: true,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Lorem ipsum dolor sit amet",
    isOpen: true,
};
SecondaryDark.decorators = [ThemeDecorator("dark")];
