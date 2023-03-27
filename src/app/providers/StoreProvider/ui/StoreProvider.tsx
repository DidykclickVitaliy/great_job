import { FC } from "react";
import { Provider } from "react-redux";

import { RootStateSchema } from "../config/RootStateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
  initialState?: RootStateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
