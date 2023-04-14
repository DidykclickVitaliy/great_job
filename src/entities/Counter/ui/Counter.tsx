import { useDispatch, useSelector } from "react-redux";

import { Button } from "shared/ui/Button/Button";
import { selectCounterValue } from "../model/selectors/selectCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectCounterValue);

    const inc = () => {
        dispatch(counterActions.increment());
    };

    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {value}
            </h1>
            <Button data-testid="increment" onClick={inc}>+</Button>
            <Button data-testid="decrement" onClick={dec}>-</Button>
        </div>
    );
};
