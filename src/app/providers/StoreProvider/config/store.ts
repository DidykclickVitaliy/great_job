import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/ui/AuthByUsername";
import { RootStateSchema } from "./RootStateSchema";

export function createReduxStore(initialState: RootStateSchema) {
    const rootReducers: ReducersMapObject<RootStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };
    return configureStore<RootStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
