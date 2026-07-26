"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { FormField } from "@/shared/components/FormField";
import { loginSchema } from "./validation";
import styles from "../../styles/AuthForm.module.css";

export const LoginForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login data:", values);
      router.push("/home");
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${styles.tabActive}`}
        >
          Daxil ol
        </button>
        <Link
          href="/register"
          className={`${styles.tab} ${styles.tabInactive}`}
        >
          Qeydiyyatdan keç
        </Link>
      </div>

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