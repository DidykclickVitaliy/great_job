import { fireEvent, screen } from "@testing-library/react";

import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations";
import { LeftSidebar } from ".";

describe("LeftSidebar", () => {
    test("to be in the document", () => {
        renderWithTranslations(<LeftSidebar />);

        const sidebar = screen.getByTestId("left-sidebar");

        expect(sidebar).toBeInTheDocument();
    });

    test("clicked 2 times on toggle", () => {
        renderWithTranslations(<LeftSidebar />);

        const sidebar = screen.getByTestId("left-sidebar");
        const toggle = screen.getByTestId("sidebar-toggle");

        fireEvent.click(toggle);

        expect(sidebar).toHaveClass("collapsed");

        fireEvent.click(toggle);

        expect(sidebar).not.toHaveClass("collapsed");
    });
});
