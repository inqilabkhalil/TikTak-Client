// src/features/account/components/PersonalInfo/PersonalInfoForm.tsx
'use client';

import React from 'react';
import { Form, Input, message } from 'antd';
import { Button } from '@/shared/components/Button';
import styles from './PersonalInfoForm.module.css';
import { PersonalInfoFormValues } from '../../types';



export function PersonalInfoForm() {
  const [form] = Form.useForm<PersonalInfoFormValues>();

  const onFinish = (values: PersonalInfoFormValues) => {
    console.log('Form data:', values);
    message.success('Məlumatlar uğurla yeniləndi!');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Əlaqə məlumatlarınız</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          email: 'rahimlisarkhan@gmail.com', // Nümunə məlumat (şəkildən)
        }}
      >
        <div className={styles.gridRow}>
          <Form.Item
            label="Adınız"
            name="name"
            rules={[{ required: true, message: 'Adınızı daxil edin!' }]}
          >
            <Input placeholder="Adınız" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            label="Telefon nömrəsi"
            name="phone"
            rules={[{ required: true, message: 'Telefon nömrəsini daxil edin!' }]}
          >
            <Input placeholder="(+994) __ ___ __ __" className={styles.inputField} />
          </Form.Item>
        </div>

        <div className={styles.gridRow}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: 'E-mail daxil edin!' },
              { type: 'email', message: 'Düzgün e-mail daxil edin!' },
            ]}
          >
            <Input placeholder="E-mail" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            label="Unvan"
            name="address"
            rules={[{ required: true, message: 'Ünvanı daxil edin!' }]}
          >
            <Input placeholder="Unvaniniz" className={styles.inputField} />
          </Form.Item>
        </div>

        <div className={styles.passwordSection}>
          <h3 className={styles.subTitle}>Şifrənin yenilənməsi</h3>
          <span className={styles.subText}>Ehtiyac yoxdursa boş buraxın</span>

          <div className={styles.gridRow}>
            <Form.Item label="Yeni Şifrə" name="newPassword">
              <Input.Password placeholder="Yeni Şifrə" className={styles.inputField} />
            </Form.Item>

            <Form.Item label="Yeni Şifrənin təkrarı" name="confirmPassword">
              <Input.Password placeholder="Yeni Şifrənin təkrarı" className={styles.inputField} />
            </Form.Item>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button htmlType="submit" color="#84cc16" className={styles.submitButton}>
            Məlumatları yenilə
          </Button>
        </div>
      </Form>
    </div>
  );
}