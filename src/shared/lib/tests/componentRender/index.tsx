import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import { RootStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { renderWithTranslations } from "../renderWithTranslations";

export interface renderWithRouterOptions {
    route?: string,
    initialStore?: RootStateSchema
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOptions = {},
) => {
    const {
        route = "/",
        initialStore,
    } = options;

    return render(
        <StoreProvider initialState={initialStore}>
            <MemoryRouter initialEntries={[route]}>
                {renderWithTranslations(component)}
            </MemoryRouter>
        </StoreProvider>,

    );
};
