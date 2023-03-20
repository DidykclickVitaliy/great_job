import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Button.module.scss";

export type ButtonVariant = "clear" | "outlined" | "background" | "backgroundInverted"

export type ButtonSize = "size_m" | "size_l" | "size_xl"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  square?: boolean
  variant?: ButtonVariant;
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        square,
        size = "size_m",
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additionalClasses: string[] = [
        className,
        cls[variant],
        cls[size],
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
