import { ReactNode } from "react";
import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  error?: string;
  touched?: boolean;
  children: ReactNode;
}

export const FormField = ({
  label,
  error,
  touched,
  children,
}: FormFieldProps) => {
  const showError = touched && error;

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
      {showError && <span className={styles.error}>{error}</span>}
    </div>
  );
};