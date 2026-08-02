import styles from "./FormField.module.css";
import { FormFieldProps } from "@/shared/types";


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