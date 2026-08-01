import { ReactNode } from "react";

export * from "./basket.types";

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

export interface FormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  children: ReactNode;
}
