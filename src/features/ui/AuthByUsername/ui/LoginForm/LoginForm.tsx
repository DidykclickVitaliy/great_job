import {
    FC, memo, useCallback, useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "entities/User";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader";
import { selectLoginError, selectLoginIsLoading } from "../../model/selectors/selectLoginData";
import { loginByUserDetails } from "../../model/services/loginByUserDetails";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import cls from "./LoginForm.module.scss";
import { LoginDetails } from "../../model/types/loginSchema";

interface LoginFormProps {
  className?: string;
  onCloseModal?: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { className, onCloseModal } = props;
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const isLoading = useSelector(selectLoginIsLoading);
    const loginError = useSelector(selectLoginError);
    const { isAuth } = useSelector(selectUser);
    const userDetails: LoginDetails = { username, password };

    const dispacth = useDispatch();

    const { t } = useTranslation();

    const onChangeUserName = useCallback((value: string) => {
        setUserName(value);
    }, []);

    const onChangeUserPassword = useCallback((value: string) => {
        setPassword(value);
    }, []);

    const onLogin = () => {
        dispacth(loginByUserDetails(userDetails));
        dispacth(loginActions.setLoginDetails(userDetails));

        // if (isAuth) {
        //     onCloseModal();
        // }  modalka not closed
    };

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <form className={classNames(cls.LoginForm, {}, [className])}>
                {/* custom shared Form component */}
                <Text title={t("Authorization form")} />

                {loginError && <Text text={loginError} variant="error" />}
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
