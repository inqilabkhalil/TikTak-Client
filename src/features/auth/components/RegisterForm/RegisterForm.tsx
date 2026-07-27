"use client";

import Link from "next/link";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { registerSchema } from "../../utils/validation";
import styles from "../../styles/AuthForm.module.css";
import { AuthTabs } from "../AuthTabs";
import { useAuthForm } from "../../hooks/useAuthForm";
import { RegisterValues } from "../../types/authType";

export const RegisterForm = () => {
  const { formik, getFieldProps, getFieldError } = useAuthForm<RegisterValues>({
    initialValues: { name: "", phone: "", password: "" },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register data:", values);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AuthTabs active="register" />

      <FormField label="Ad" {...getFieldError("name")}>
        <Input
          type="text"
          placeholder="Ad, Soyad"
          size="large"
          className={styles.input}
          {...getFieldProps("name")}
        />
      </FormField>

      <FormField label="Telefon nömrəsi" {...getFieldError("phone")}>
        <Input
          type="tel"
          placeholder="(+994) __ / __ / __ / __"
          size="large"
          className={styles.input}
          {...getFieldProps("phone")}
        />
      </FormField>

      <FormField label="Parol" {...getFieldError("password")}>
        <AntInput.Password
          placeholder="********************"
          size="large"
          className={styles.input}
          {...getFieldProps("password")}
        />
      </FormField>

      <Button htmlType="submit" block className={styles.submitButton}>
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
