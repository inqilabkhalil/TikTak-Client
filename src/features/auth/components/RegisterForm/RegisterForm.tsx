"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { AuthTabs } from "../AuthTabs";
import { PhoneField } from "../PhoneField";
import { useAuthForm } from "../../hooks/useAuthForm";
import { useAuthStore } from "@/features/auth/store";
import { registerSchema } from "../../utils/validation";
import { ROUTES } from "@/shared/constants";
import type { RegisterValues } from "@/features/auth/types/authType";
import styles from "../../styles/AuthForm.module.css";

export const RegisterForm = () => {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);

  const {
    formik,
    getFieldProps,
    getFieldError,
    getPhoneFieldProps,
    isLoading,
    error,
  } = useAuthForm<RegisterValues>({
    initialValues: { full_name: "", phone: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      const payload = { ...values, phone: `+994${values.phone}` };
      const success = await register(payload);

      if (success) {
        router.push(ROUTES.LOGIN);
      }
    },
  });

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

      <PhoneField
        {...getFieldError("phone")}
        {...getPhoneFieldProps("phone")}
      />

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
        loading={isLoading}
        block
        className={styles.submitButton}
      >
        Tamamla
      </Button>

      <p className={styles.bottomText}>
        Hesabın varsa
        <Link href={ROUTES.LOGIN} className={styles.link}>
          Daxil ol
        </Link>
      </p>
    </form>
  );
};