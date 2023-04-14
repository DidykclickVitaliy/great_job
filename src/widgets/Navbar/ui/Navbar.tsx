import {
    FC, useCallback, useEffect, useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, User, userActions } from "entities/User";
import { LoginModal } from "features/ui/AuthByUsername";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { USER_LOCALSTORAGE_KEY } from "shared/constant/localStorage";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();
    const dispacth = useDispatch();
    const { isAuth } = useSelector(selectUser);

    const onCloseModal = () => {
        setIsAuthModal(false);
    };

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = () => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        dispacth(userActions.removeAuthData());
    };

    useEffect(() => {
        const user: User = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));

        if (user) {
            dispacth(userActions.setAuthData(user));
        }
    }, []);

    const authButton = !isAuth ? (
        <Button className={cls.auth} onClick={onShowModal} variant="clear">
            {t("Log in")}
        </Button>
    )
        : (
            <Button className={cls.auth} onClick={onLogout} variant="clear">
                { t("Log out")}
            </Button>
        );

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {authButton}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
