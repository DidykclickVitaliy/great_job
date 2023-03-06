import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { LangSwitcher } from "features/ui/LangSwitcher";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onToggle}>{t("toggle")}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
