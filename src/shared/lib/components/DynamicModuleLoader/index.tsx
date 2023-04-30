import { FC, useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useStore } from "react-redux";

import { RootStateSchemaKey, StoreWithManager } from "app/providers/StoreProvider";

export type ReducersList = {
  [schemaKey in RootStateSchemaKey]?: Reducer
 }

type ReducersListEntry = [RootStateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
   reducers: ReducersList,
   removeAfterUnmount?:boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as StoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([schemaKey, reducer] : ReducersListEntry) => {
            store.reducerManager.add(schemaKey, reducer);
            dispatch({ type: `@INIT ${schemaKey} reducer` });
        });

        return () => {
            // without removeAfterUnmount bug 2 and more times reducer is initialized, watch in redux devtools
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((schemaKey: RootStateSchemaKey) => {
                    store.reducerManager.remove(schemaKey);
                    dispatch({ type: `@REMOVE ${schemaKey} reducer` });
                });
            }
        };
    }, []);

    return (
        <div>{children}</div>
    );
};
