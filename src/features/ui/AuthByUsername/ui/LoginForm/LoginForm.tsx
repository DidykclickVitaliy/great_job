import { selectUser } from "entities/User";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import { selectLoginData } from "../../model/selectors/selectLoginData";
import { loginByUserName } from "../../model/services/loginByUserName";
import { loginActions } from "../../model/slice/loginSlice";

import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
  onCloseModal?: () => void
}

export const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className, onCloseModal } = props;
    const { t } = useTranslation();
    const dispacth = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(selectLoginData);
    const { isAuth } = useSelector(selectUser);

    const onChangeUserName = useCallback((value: string) => {
        dispacth(loginActions.setUserName(value));
    }, []);

    const onChangeUserPassword = useCallback((value: string) => {
        dispacth(loginActions.setUserPassword(value));
    }, []);

    const onLogin = () => {
        dispacth(loginByUserName({ username, password }));

        if (isAuth) {
            onCloseModal();
        }
    };

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t("Authorization form")} />

            {error && <Text text={error} variant="error" />}
            {/* formik or react hook form */}

            <Input
                autoFocus
                className={cls.input}
                type="text"
                placeholder={t("Enter username")}
                value={username}
                onChange={onChangeUserName}
            />

            <Input
                className={cls.input}
                type="text"
                placeholder={t("Enter password")}
                value={password}
                onChange={onChangeUserPassword}
            />

            <Button
                className={cls.loginBtn}
                variant="outlined"
                onClick={onLogin}
                disabled={isLoading}
            >
                {t("Log in")}
            </Button>
        </form>
    );
});
