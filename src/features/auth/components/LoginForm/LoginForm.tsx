"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input as AntInput } from "antd";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { AuthTabs } from "../AuthTabs";
import { PhoneField } from "../PhoneField";
import { useAuthForm } from "../../hooks/useAuthForm";
import { useAuthStore } from "@/features/auth/store";
import { loginSchema } from "../../utils/validation";
import { AUTH_MESSAGES } from "../../constants";
import { ROUTES } from "@/shared/constants";
import type { LoginValues } from "@/features/auth/types/authType";
import styles from "../../styles/AuthForm.module.css";

export const LoginForm = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const {
    formik,
    getFieldProps,
    getFieldError,
    getPhoneFieldProps,
    isLoading,
    error,
  } = useAuthForm<LoginValues>({
    initialValues: { phone: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values, { setErrors }) => {
      const payload = { ...values, phone: `+994${values.phone}` };
      const success = await login(payload);

      if (success) {
        router.push(ROUTES.LANDING);
      } else {
        setErrors({ password: AUTH_MESSAGES.LOGIN_ERROR });
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AuthTabs active="login" />

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
        Daxil ol
      </Button>

      <p className={styles.bottomText}>
        Hesabın yoxdursa
        <Link href={ROUTES.REGISTER} className={styles.link}>
          Qeydiyyatdan keç
        </Link>
      </p>
    </form>
  );
};