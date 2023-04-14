import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/decorators/ThemeDecorator";
import { Button } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});

Clear.args = {
    children: "TEXT",
    variant: "clear",
};

export const Outline = Template.bind({});
Outline.args = {
    children: "TEXT",
    variant: "outlined",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "TEXT",
    variant: "outlined",
};
OutlineDark.decorators = [ThemeDecorator("dark")];

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: "TEXT",
    variant: "outlined",
    size: "size_m",
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: "TEXT",
    variant: "outlined",
    size: "size_l",
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: "TEXT",
    variant: "outlined",
    size: "size_xl",
};

export const Background = Template.bind({});
Background.args = {
    children: "TEXT",
    variant: "background",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "TEXT",
    variant: "backgroundInverted",
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: "TEXT",
    variant: "background",
};
BackgroundDark.decorators = [ThemeDecorator("dark")];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: "TEXT",
    variant: "backgroundInverted",
};
BackgroundInvertedDark.decorators = [ThemeDecorator("dark")];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: ">",
    variant: "backgroundInverted",
    size: "size_m",
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    variant: "backgroundInverted",
    size: "size_l",
    square: true,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    variant: "backgroundInverted",
    size: "size_xl",
    square: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: ">",
    variant: "backgroundInverted",
    size: "size_xl",
    square: true,
    disabled: true,
};
