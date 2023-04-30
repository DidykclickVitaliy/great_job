import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";

import { ReducerManager, RootStateSchema, RootStateSchemaKey } from "./RootStateSchema";

//   0.58 map delete
//  https://www.youtube.com/watch?v=p2XwutS85DY&list=PL2Qu7afmbLQJ_i48-SMjBVPZ02udAB860&index=18&ab_channel=DanilaBagrovIT%F0%9F%9A%80
//

export function createReducerManager(
    initialReducers: ReducersMapObject<RootStateSchema>,
): ReducerManager {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: Array<RootStateSchemaKey> = [];

    return {
        getReducerMap: () => reducers,

        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: RootStateSchema, action: AnyAction) => {
        // If any reducers  have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };

                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                // for (const key ofkeysToRemove) {
                //     delete state[key];
                // }
                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: RootStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: RootStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}
