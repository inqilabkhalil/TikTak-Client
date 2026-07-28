'use client';

import { Input as AntInput } from 'antd';
import { Button } from '@/shared/components/Button/Button';
import { UserInfoDisplay } from '@/Features/checkout/components/UserInfoDisplay';
import { PaymentMethod } from '@/Features/checkout/components/PaymentMethod';
import { useCheckoutForm } from '@/Features/checkout/hooks';
import { checkoutSchema } from '@/Features/checkout/validation';
import type {
  CheckoutFormProps,
  CheckoutFormValues,
} from '@/Features/checkout/types';
import styles from './CheckoutForm.module.css';

export const CheckoutForm = ({ user, onSubmit }: CheckoutFormProps) => {
  const { formik, getFieldProps, getFieldError } =
    useCheckoutForm<CheckoutFormValues>({
      initialValues: {
        note: '',
        paymentMethod: 'CASH',
      },
      validationSchema: checkoutSchema,
      onSubmit: (values) => {
        onSubmit(values);
      },
    });

  const noteError = getFieldError('note');

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.row}>
        <UserInfoDisplay user={user} />

        <div className={styles.noteSection}>
          <label className={styles.label}>Əlavə qeyd</label>
          <AntInput.TextArea
            {...getFieldProps('note')}
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
        onChange={(method) => formik.setFieldValue('paymentMethod', method)}
      />

      <div className={styles.submitWrapper}>
        <Button htmlType="submit" className={styles.submitButton}>
          Sifarişi tamamla
        </Button>
      </div>
    </form>
  );
};
