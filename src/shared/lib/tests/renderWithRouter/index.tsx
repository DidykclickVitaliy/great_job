import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import { renderWithTranslations } from "../renderWithTranslations";

export interface renderWithRouterOptions {
    route?: string
}

export const renderWithRouter = (
    component: ReactNode,
    options: renderWithRouterOptions = {},
) => {
    const {
        route = "/",
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            {renderWithTranslations(component)}
        </MemoryRouter>,
    );
};
