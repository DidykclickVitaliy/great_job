import { PartialStoryFn } from "@storybook/addons";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = () => (story: PartialStoryFn) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
