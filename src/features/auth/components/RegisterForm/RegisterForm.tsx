"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { registerSchema } from "./validation";
import styles from "../../styles/AuthForm.module.css";

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register data:", values);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.tabs}>
        <Link href="/login" className={`${styles.tab} ${styles.tabInactive}`}>
          Daxil ol
        </Link>
        <button
          type="button"
          className={`${styles.tab} ${styles.tabActive}`}
        >
          Qeydiyyatdan keç
        </button>
      </div>

      <FormField
        label="Ad"
        error={formik.errors.name}
        touched={formik.touched.name}
      >
        <Input
          name="name"
          type="text"
          placeholder="Ad, Soyad"
          size="large"
          className={styles.input}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          status={
            formik.touched.name && formik.errors.name ? "error" : undefined
          }
        />
      </FormField>

      <FormField
        label="Telefon nömrəsi"
        error={formik.errors.phone}
        touched={formik.touched.phone}
      >
        <Input
          name="phone"
          type="tel"
          placeholder="(+994) __ / __ / __ / __"
          size="large"
          className={styles.input}
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          status={
            formik.touched.phone && formik.errors.phone ? "error" : undefined
          }
        />
      </FormField>

      <FormField
        label="Parol"
        error={formik.errors.password}
        touched={formik.touched.password}
      >
        <AntInput.Password
          name="password"
          placeholder="********************"
          size="large"
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          status={
            formik.touched.password && formik.errors.password
              ? "error"
              : undefined
          }
        />
      </FormField>

      <Button
        htmlType="submit"
        block
        className={styles.submitButton}
        onClick={() => formik.handleSubmit()}
      >
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