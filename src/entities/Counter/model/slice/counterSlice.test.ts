import { CounterSchema } from "../types/counterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("counter Reducer", () => {
    test("increment counter value", () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test("decrement counter value", () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test("should work with empty state increment", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });

    test("should work with empty state decrement", () => {
        expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
    });
});
