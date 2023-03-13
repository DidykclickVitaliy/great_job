import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { LangSwitcher } from "features/ui/LangSwitcher";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

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
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t("toggle")}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
