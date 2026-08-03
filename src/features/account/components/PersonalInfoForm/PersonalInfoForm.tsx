// src/features/account/components/PersonalInfoForm/PersonalInfoForm.tsx
"use client";

<<<<<<< HEAD
import React, { useEffect } from "react";
import { Form, Input, App } from "antd";
import { Button } from "@/shared/components/Button";
import styles from "./PersonalInfoForm.module.css";
// Komanda yoldaşının yazdığı store-u import edirik:
=======
import React from 'react';
import { App, Form, Input } from 'antd';
import { Button } from '@/shared/components/Button';
import styles from './PersonalInfoForm.module.css';
>>>>>>> fdfd3a926c5a14a5db0be2caed1a26f3ff13c425

export interface PersonalInfoFormValues {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export function PersonalInfoForm() {
  const { message } = App.useApp();
  const [form] = Form.useForm<PersonalInfoFormValues>();

  // Komanda yoldaşının store-undan lazım olanları çəkirik
  const { user, isLoading, fetchProfile } = useProfileStore();

  const { message } = App.useApp();

  useEffect(() => {
    if (!user) {
      fetchProfile();
    }
  }, [fetchProfile, user]);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.full_name || "",
        phone: user.phone || "",
        email: user.email || "",
        address: user.address || "",
      });
    }
  }, [user, form]);

  const onFinish = async (values: PersonalInfoFormValues) => {
    try {
      if (values.newPassword && values.newPassword !== values.confirmPassword) {
        message.error("Şifrələr bir-biri ilə eyni deyil!");
        return;
      }

      // Əgər profil yeniləmə servisi komanda yoldaşı tərəfindən hələ yazılmayıbsa,
      // buraya öz update funksiyanı əlavə edə bilərsən.
      message.success("Məlumatlar uğurla yeniləndi!");
    } catch (err: any) {
      message.error(err.message || "Yenilənmə zamanı xəta baş verdi");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.sectionTitle}>Əlaqə məlumatlarınız</h2>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className={styles.gridRow}>
          <Form.Item
            label="Adınız"
            name="name"
            rules={[{ required: true, message: "Adınızı daxil edin!" }]}
          >
            <Input placeholder="Adınız" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            label="Telefon nömrəsi"
            name="phone"
            rules={[
              { required: true, message: "Telefon nömrəsini daxil edin!" },
            ]}
          >
            <Input
              placeholder="(+994) __ ___ __ __"
              className={styles.inputField}
            />
          </Form.Item>
        </div>

        <div className={styles.gridRow}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "E-mail daxil edin!" },
              { type: "email", message: "Düzgün e-mail daxil edin!" },
            ]}
          >
            <Input placeholder="E-mail" className={styles.inputField} />
          </Form.Item>

          <Form.Item
            label="Ünvan"
            name="address"
            rules={[{ required: true, message: "Ünvanı daxil edin!" }]}
          >
            <Input placeholder="Ünvanınız" className={styles.inputField} />
          </Form.Item>
        </div>

        <div className={styles.passwordSection}>
          <h3 className={styles.subTitle}>Şifrənin yenilənməsi</h3>
          <span className={styles.subText}>Ehtiyac yoxdursa boş buraxın</span>

          <div className={styles.gridRow}>
            <Form.Item label="Yeni Şifrə" name="newPassword">
              <Input.Password
                placeholder="Yeni Şifrə"
                className={styles.inputField}
              />
            </Form.Item>

            <Form.Item label="Yeni Şifrənin təkrarı" name="confirmPassword">
              <Input.Password
                placeholder="Yeni Şifrənin təkrarı"
                className={styles.inputField}
              />
            </Form.Item>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            htmlType="submit"
            color="#84cc16"
            className={styles.submitButton}
          >
            {isLoading ? "Yüklənir..." : "Məlumatları yenilə"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
