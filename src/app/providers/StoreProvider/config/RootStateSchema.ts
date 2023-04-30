import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";

import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/ui/AuthByUsername";

export interface RootStateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Async reducers
    loginForm?: LoginSchema
}

export type RootStateSchemaKey = keyof RootStateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootStateSchema>,
    reduce: (state: RootStateSchema, action: AnyAction) => CombinedState<RootStateSchema>,
    add: (key: RootStateSchemaKey, reducer: Reducer) => void,
    remove: (key: RootStateSchemaKey) => void
}

export interface StoreWithManager extends EnhancedStore<RootStateSchema> {
    reducerManager?: ReducerManager
}

// 14-42
