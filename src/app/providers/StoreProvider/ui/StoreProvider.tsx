import { DeepPartial } from "@reduxjs/toolkit";
import { FC } from "react";
import { Provider } from "react-redux";

import { RootStateSchema } from "../config/RootStateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  initialState?: DeepPartial<RootStateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as RootStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
