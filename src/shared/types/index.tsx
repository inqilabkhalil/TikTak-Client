import { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    closeOnOverlayClick?: boolean;
}

export interface HeaderProps {
    showPlace?: boolean;
    showInput?: boolean;
}
