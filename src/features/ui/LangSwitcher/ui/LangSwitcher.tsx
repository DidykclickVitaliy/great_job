import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            variant="clear"
            onClick={toggleLanguage}
        >
            {t("Language")}
        </Button>
    );
};
