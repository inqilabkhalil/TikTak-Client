"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { loginSchema } from "../../utils/validation";
import styles from "../../styles/AuthForm.module.css";
import { AuthTabs } from "../AuthTabs";
import { useAuthForm } from "../../hooks/useAuthForm";
import { LoginValues } from "../../types/authType";
import { authService } from "../../services";
import { useAuthStore } from "../../store/authStore";

export const LoginForm = () => {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const { formik, getFieldProps, getFieldError, getPhoneFieldProps } =
    useAuthForm<LoginValues>({
      initialValues: { phone: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: async (values, { setErrors }) => {
        const payload = { ...values, phone: `+994${values.phone}` };
        const success = await login(payload);

        if (success) {
          router.push("/landing");
        } else {
          setErrors({ password: "Telefon və ya parol yanlışdır" });
        }
      },
    });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AuthTabs active="login" />

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
        <Link href="/register" className={styles.link}>
          Qeydiyyatdan keç
        </Link>
      </p>
    </form>
  );
};
