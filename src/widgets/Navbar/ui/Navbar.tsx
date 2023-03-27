import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.auth} onClick={onToggleModal} variant="clear">
                {t("Log in")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t("Lorem ipsum dolor sit amet")}
            </Modal>
        </div>
    );
};

// 16:36 12 les
