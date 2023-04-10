import {
    ChangeEvent, FC, InputHTMLAttributes, memo,
} from "react";

import { classNames } from "shared/lib/classNames";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        type,
        className,
        value,
        onChange,
        ...otherProps
    } = props;

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames("", {}, [className])}
            type={type}
            value={value}
            onChange={inputHandler}
            {...otherProps}
        />

    );
});
