import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { RootStateSchema } from "./RootStateSchema";

export function createReduxStore(initialState: RootStateSchema) {
    const rootReducers: ReducersMapObject<RootStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<RootStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
