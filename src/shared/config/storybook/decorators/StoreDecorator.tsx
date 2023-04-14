import { DeepPartial } from "@reduxjs/toolkit";
import { PartialStoryFn } from "@storybook/addons";

import { RootStateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<RootStateSchema>) => (story: PartialStoryFn) => (
    <StoreProvider initialState={state}>
        {story()}
    </StoreProvider>
);
