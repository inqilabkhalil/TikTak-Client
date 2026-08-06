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
import { AUTH_MESSAGES, translateAuthError } from "../../constants";
import { ROUTES } from "@/shared/constants";
import type { LoginValues } from "@/features/auth/types/authType";
import styles from "../../styles/AuthForm.module.css";
import { useToast } from "@/shared/hooks";

export const LoginForm = () => {
  const router = useRouter();
  const toast = useToast();
  const login = useAuthStore((state) => state.login);

  const {
    formik,
    getFieldProps,
    getFieldError,
    getPhoneFieldProps,
    isLoading,
  } = useAuthForm<LoginValues>({
    initialValues: { phone: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const payload = { ...values, phone: `+994${values.phone}` };
      const success = await login(payload);

      if (success) {
        toast.success(AUTH_MESSAGES.LOGIN_SUCCESS);
        router.push(ROUTES.LANDING);
      } else {
        const errorMsg = useAuthStore.getState().error;
        toast.error(translateAuthError(errorMsg ?? AUTH_MESSAGES.LOGIN_ERROR))
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