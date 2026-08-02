"use client";

import { Input } from "@/shared/components/Input/Input";
import { FormField } from "@/shared/components/FormField";
import styles from "./PhoneField.module.css";
import { PhoneFieldProps } from "../../types/authType";

export const PhoneField = ({
  label = "Telefon nömrəsi",
  error,
  touched,
  ...inputProps
}: PhoneFieldProps) => {
  return (
    <FormField label={label} error={error} touched={touched}>
      <div className={styles.phoneWrapper}>
        <span className={styles.phonePrefix}>+994</span>
        <Input
          type="tel"
          placeholder="__ ___ __ __"
          maxLength={12}
          size="large"
          className={styles.phoneInput}
          {...inputProps}
        />
      </div>
    </FormField>
  );
};