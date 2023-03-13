import { render, screen } from "@testing-library/react";
import { Button, ButtonVariant } from "./Button";

describe("Button", () => {
    test("to be in the document", () => {
        render(<Button>test</Button>);
        const button = screen.getByText("test");

        expect(button).toBeInTheDocument();
    });

    test("with clear variant", () => {
        render(<Button variant={ButtonVariant.CLEAR} />);
        const button = screen.getByRole("button");

        expect(button).toHaveClass("clear");
        screen.debug();
    });
});
