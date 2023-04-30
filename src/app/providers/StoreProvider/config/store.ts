import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { RootStateSchema, StoreWithManager } from "./RootStateSchema";

export function createReduxStore(initialState: RootStateSchema): StoreWithManager {
    const rootReducers: ReducersMapObject<RootStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    // @ts-ignore
    const store: StoreWithManager = configureStore<RootStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    store.reducerManager = reducerManager;

    return store;
}
