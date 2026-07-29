"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { registerSchema } from "../../utils/validation";
import styles from "../../styles/AuthForm.module.css";
import { AuthTabs } from "../AuthTabs";
import { useAuthForm } from "../../hooks/useAuthForm";
import type { RegisterValues } from "@/features/auth/types/authType";
import { useAuthStore } from "@/features/auth/store";
import { useEffect } from "react";

export const RegisterForm = () => {
   const router = useRouter();
  const register = useAuthStore((state) => state.register);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const { formik, getFieldProps, getFieldError, getPhoneFieldProps } = useAuthForm<RegisterValues>({
    initialValues: { full_name: "", phone: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const payload = { ...values, phone: `+994${values.phone}` };
      const success = await register(payload);

      if (success) {
        router.push("/login");
      }
    },
  });

  useEffect(() => {
    return () => {
      clearError();
    };
  }, [clearError]);
 
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AuthTabs active="register" />

      <FormField label="Ad" {...getFieldError("full_name")}>
        <Input
          type="text"
          placeholder="Ad, Soyad"
          size="large"
          className={styles.input}
          {...getFieldProps("full_name")}
        />
      </FormField>

      <FormField label="Telefon nömrəsi" {...getFieldError("phone")}>
         <div className={styles.phoneWrapper}>
          <span className={styles.phonePrefix}>+994</span>
          <Input
            type="tel"
            placeholder="__ ___ __ __"
            size="large"
            className={styles.phoneInput}
            {...getPhoneFieldProps("phone")}
          />
        </div>
      </FormField>

      <FormField label="Parol" {...getFieldError("password")}>
        <AntInput.Password
          placeholder="********************"
          size="large"
          className={styles.input}
          {...getFieldProps("password")}
        />
      </FormField>
      {error && <p className={styles.errorText}>{error}</p>}
      <Button 
      htmlType="submit" 
      block className={styles.submitButton} 
      loading={isLoading}>
        Tamamla
      </Button>

      <p className={styles.bottomText}>
        Hesabın varsa
        <Link href="/login" className={styles.link}>
          Daxil ol
        </Link>
      </p>
    </form>
  );
};