import { FC } from "react";

import { classNames } from "shared/lib/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;

    return (
        <Modal
            className={classNames("", {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};
