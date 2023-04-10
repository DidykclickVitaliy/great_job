import {
    FC, useCallback, useEffect, useRef, useState,
} from "react";

import { classNames } from "../../lib/classNames";
import { Portal } from "../Portal/Portal";

import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

const ANIMATION_TIMEOUT = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef(null);

    const onCloseModal = useCallback(() => {
        setIsClosing(true);

        timeoutRef.current = setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, ANIMATION_TIMEOUT);
    }, [onClose]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCloseModal();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onCloseModal]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseModal}>
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
