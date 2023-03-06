import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { Theme } from "shared/lib/theme/ThemeContext";
import { useTheme } from "shared/lib/theme/useTheme";

import DarkThemeIcon from "../assets/icons/theme-dark.svg";
import LightThemeIcon from "../assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames("", {}, [className])}
            variant={ButtonVariant.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
        </Button>
    );
};
