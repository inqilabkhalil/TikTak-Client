'use client';

import { useFormik } from 'formik';
import { Input as AntInput } from 'antd';
import { Button } from '@/shared/components/Button/Button';
import { UserInfoDisplay } from '@/Features/checkout/components/UserInfoDisplay';
import { PaymentMethod } from '@/Features/checkout/components/PaymentMethod';
import { checkoutSchema } from '@/Features/checkout/validation';
import type {
  CheckoutFormProps,
  CheckoutFormValues,
} from '@/Features/checkout/types';
import styles from './CheckoutForm.module.css';

export const CheckoutForm = ({ user, onSubmit }: CheckoutFormProps) => {
  const formik = useFormik<CheckoutFormValues>({
    initialValues: {
      note: '',
      paymentMethod: 'CASH',
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.row}>
        <UserInfoDisplay user={user} />

        <div className={styles.noteSection}>
          <label className={styles.label}>Əlavə qeyd</label>
          <AntInput.TextArea
            name="note"
            placeholder="Əlavə qeydiniz varsa buraya daxil edin"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={6}
            className={styles.textarea}
            status={
              formik.touched.note && formik.errors.note ? 'error' : undefined
            }
          />
          {formik.touched.note && formik.errors.note && (
            <span className={styles.error}>{formik.errors.note}</span>
          )}
        </div>
      </div>

      <PaymentMethod
        value={formik.values.paymentMethod}
        onChange={(method) => formik.setFieldValue('paymentMethod', method)}
      />

      <div className={styles.submitWrapper}>
        <Button
          htmlType="submit"
          onClick={() => formik.handleSubmit()}
          className={styles.submitButton}
        >
          Sifarişi tamamla
        </Button>
      </div>
    </form>
  );
};
