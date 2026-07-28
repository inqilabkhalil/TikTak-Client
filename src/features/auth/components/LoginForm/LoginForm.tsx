"use client";

import { useFormik } from "formik";
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

export const LoginForm = () => {
  const router = useRouter();

  const { formik, getFieldProps, getFieldError } = useAuthForm<LoginValues>({
    initialValues: { phone: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login data:", values);
      router.push("/home");
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AuthTabs active="login" />

      <FormField
        label="Telefon nömrəsi"
        {...getFieldError("phone")}
      >
        <Input
          type="tel"
          placeholder="(+994) __ / __ / __ / __"
          size="large"
          className={styles.input}
          {...getFieldProps("phone")}
        />
      </FormField>

      <FormField
        label="Parol"
        {...getFieldError("password")}
      >
        <AntInput.Password
          placeholder="********************"
          size="large"
          className={styles.input}
          {...getFieldProps("password")}
        />
      </FormField>

      <Button htmlType="submit" block className={styles.submitButton}>
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
