import { fireEvent, screen } from "@testing-library/react";

import { renderWithRouter } from "shared/lib/tests/renderWithRouter";
import { LeftSidebar } from ".";

describe("LeftSidebar", () => {
    test("to be in the document", () => {
        renderWithRouter(<LeftSidebar />);

        const sidebar = screen.getByTestId("left-sidebar");

        expect(sidebar).toBeInTheDocument();
    });

    test("clicked 2 times on toggle", () => {
        renderWithRouter(<LeftSidebar />);

        const sidebar = screen.getByTestId("left-sidebar");
        const toggle = screen.getByTestId("sidebar-toggle");

        fireEvent.click(toggle);

        expect(sidebar).toHaveClass("collapsed");

        fireEvent.click(toggle);

        expect(sidebar).not.toHaveClass("collapsed");
    });
});
