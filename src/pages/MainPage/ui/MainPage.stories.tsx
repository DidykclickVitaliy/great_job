import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import {
    ErrorBoundryDecorator,
} from "shared/config/storybook/decorators/ErrorBoundryDecorator";
import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import MainPage from "./MainPage";

export default {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [ErrorBoundryDecorator()],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator("dark")];
