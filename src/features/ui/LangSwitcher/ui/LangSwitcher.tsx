import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      variant={ButtonVariant.CLEAR}
      onClick={toggleLanguage}
    >
      {t("Language")}
    </Button>
  );
};
