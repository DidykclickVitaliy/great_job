import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                className={cls.input}
                type="text"
                placeholder={t("Enter username")}
            />

            <Input
                className={cls.input}
                type="text"
                placeholder={t("Enter password")}
            />

            <Button
                className={cls.loginBtn}
                variant="outlined"
            >
                {t("Log in")}
            </Button>
        </form>
    );
};
