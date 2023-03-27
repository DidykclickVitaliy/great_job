import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";
import { RootStateSchema } from "./RootStateSchema";

export function createReduxStore(initialState: RootStateSchema) {
    return configureStore<RootStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
