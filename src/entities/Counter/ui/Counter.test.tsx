import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { componentRender } from "shared/lib/tests/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
    test("counter value from state should be in the document", () => {
        componentRender(<Counter />, {
            initialStore: { counter: { value: 10 } },
        });

        const counterValue = screen.getByTestId("counter-value");

        expect(counterValue).toBeInTheDocument();
        expect(counterValue).toHaveTextContent("10");
    });

    test("increment state counter value", () => {
        componentRender(<Counter />, {
            initialStore: { counter: { value: 10 } },
        });

        const buttonIncrement = screen.getByTestId("increment");
        const counterValue = screen.getByTestId("counter-value");

        userEvent.click(buttonIncrement);

        expect(counterValue).toHaveTextContent("11");
    });

    test("decrement state counter value", () => {
        componentRender(<Counter />, {
            initialStore: { counter: { value: 10 } },
        });

        const buttonDecrement = screen.getByTestId("decrement");
        const counterValue = screen.getByTestId("counter-value");

        userEvent.click(buttonDecrement);

        expect(counterValue).toHaveTextContent("9");
    });
});
