import { FC, useEffect } from "react";

import { classNames } from "../../lib/classNames";
import { Portal } from "../Portal/Portal";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={onClose}>
                    <div
                        className={cls.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>

        </Portal>
    );
};
