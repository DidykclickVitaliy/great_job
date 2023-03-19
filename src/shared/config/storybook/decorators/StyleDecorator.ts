import { PartialStoryFn } from "@storybook/addons";

import "app/styles/index.scss";

export const StyleDecorator = () => (story: () => PartialStoryFn) => story();
