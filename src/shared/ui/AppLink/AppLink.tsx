import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "../../lib/classNames";

import cls from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "secondary"

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        variant = "primary",
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
