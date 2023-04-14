import { FC } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Text.module.scss";

type TextVariant = "primary" | "error"

interface TextProps {
  className?: string;
  title?:string;
  text?: string;
  variant?: TextVariant
}

export const Text: FC<TextProps> = (props) => {
    const {
        text,
        title,
        className,
        variant = "primary",
    } = props;

    const additionalClasses: string[] = [
        className,
        cls[variant],
    ];

    return (
        <div className={classNames("", {}, additionalClasses)}>
            {title && <h2 className={cls.title}>{title}</h2>}
            {text && <p className={cls.text}>{text}</p> }
        </div>
    );
};
