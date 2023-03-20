import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { LangSwitcher } from "features/ui/LangSwitcher";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "app/providers/router/config/routeConfig";

import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import cls from "./LeftSidebar.module.scss";

interface LeftSidebarProps {
  className?: string;
}

export const LeftSidebar: FC<LeftSidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="left-sidebar"
            className={
                classNames(cls.LeftSidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <Button
                className={cls.toggleButton}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                variant="backgroundInverted"
                size="size_xl"
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink className={cls.item} to={RoutePath.main} variant="secondary">
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t("Main")}
                    </span>
                </AppLink>

                <AppLink className={cls.item} to={RoutePath.about} variant="secondary">
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t("About")}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
