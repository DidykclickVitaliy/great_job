import { ThemeSwitcher } from "features/ui/ThemeSwitcher";
import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkVariant } from "shared/ui/AppLink/AppLink";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to="/" variant={AppLinkVariant.SECONDARY}>
          Main
        </AppLink>
        <AppLink to="/about" variant={AppLinkVariant.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};

//16:36 12 les
