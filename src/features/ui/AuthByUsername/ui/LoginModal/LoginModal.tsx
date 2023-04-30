import { FC, Suspense } from "react";

import { classNames } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

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
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onCloseModal={onClose} />
            </Suspense>
        </Modal>
    );
};
