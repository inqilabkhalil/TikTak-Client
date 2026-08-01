"use client";

import { Input as AntInput } from "antd";
import { Button } from "@/shared/components/Button/Button";
import { UserInfoDisplay } from "@/features/checkout/components/UserInfoDisplay";
import { PaymentMethod } from "@/features/checkout/components/PaymentMethod";
import { useCheckoutForm } from "@/features/checkout/hooks";
import { checkoutSchema } from "@/features/checkout/validation";
import type {
  CheckoutFormProps,
  CheckoutFormValues,
} from "@/features/checkout/types";
import styles from "./CheckoutForm.module.css";

export const CheckoutForm = ({
  user,
  onSubmit,
  isLoading = false,
  error = null,
}: CheckoutFormProps) => {
  const { formik, getFieldProps, getFieldError } =
    useCheckoutForm<CheckoutFormValues>({
      initialValues: {
        note: "",
        paymentMethod: "CASH",
      },
      validationSchema: checkoutSchema,
      onSubmit: (values) => {
        onSubmit(values);
      },
    });

  const noteError = getFieldError("note");

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.row}>
        <UserInfoDisplay user={user} />

        <div className={styles.noteSection}>
          <label className={styles.label}>Əlavə qeyd</label>
          <AntInput.TextArea
            {...getFieldProps("note")}
            placeholder="Əlavə qeydiniz varsa buraya daxil edin"
            rows={6}
            className={styles.textarea}
          />
          {noteError.touched && noteError.error && (
            <span className={styles.error}>{noteError.error}</span>
          )}
        </div>
      </div>

      <PaymentMethod
        value={formik.values.paymentMethod}
        onChange={(method) => formik.setFieldValue("paymentMethod", method)}
      />

      {error && <div className={styles.apiError}>{error}</div>}

      <div className={styles.submitWrapper}>
        <Button
          htmlType="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Göndərilir..." : "Sifarişi tamamla"}
        </Button>
      </div>
    </form>
  );
};