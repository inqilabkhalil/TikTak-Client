"use client";

import { useFormik } from "formik";
import Link from "next/link";
import { Input as AntInput } from "antd";
import { Input } from "@/shared/components/Input/Input";
import { Button } from "@/shared/components/Button/Button";
import { loginSchema } from "./validation";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login data:", values);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {/* Tab-lar */}
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

      {/* Telefon nömrəsi */}
      <div className={styles.field}>
        <label className={styles.label}>Telefon nömrəsi</label>
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
        {formik.touched.phone && formik.errors.phone && (
          <span className={styles.error}>{formik.errors.phone}</span>
        )}
      </div>

      {/* Parol */}
      <div className={styles.field}>
        <label className={styles.label}>Parol</label>
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
        {formik.touched.password && formik.errors.password && (
          <span className={styles.error}>{formik.errors.password}</span>
        )}
      </div>

      {/* Button */}
      <Button htmlType="submit" block className={styles.submitButton}>
        Daxil ol
      </Button>

      {/* Alt link */}
      <p className={styles.bottomText}>
        Hesabın yoxdursa
        <Link href="/register" className={styles.link}>
          Qeydiyyatdan keç
        </Link>
      </p>
    </form>
  );
};