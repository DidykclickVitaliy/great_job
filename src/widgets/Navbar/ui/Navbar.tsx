import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" variant={AppLinkVariant.SECONDARY}>
                    {t("Main")}
                </AppLink>
                <AppLink to="/about" variant={AppLinkVariant.SECONDARY}>
                    {t("About")}
                </AppLink>
            </div>
        </div>
    );
};

// 16:36 12 les
