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

export const Dark = Template.bind({});
Dark.args = {
    children: "Lorem ipsum dolor sit amet",
    isOpen: true,
};
Dark.decorators = [ThemeDecorator("dark")];
