import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("Oooops... Something went wrong")}</p>
            <Button onClick={reloadPage}>{t("Refresh page")}</Button>
        </div>
    );
};
