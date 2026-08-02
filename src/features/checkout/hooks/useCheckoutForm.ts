"use client";

import { useFormik, FormikConfig, FormikValues } from "formik";

export const useCheckoutForm = <T extends FormikValues>(
  config: FormikConfig<T>
) => {
  const formik = useFormik<T>(config);

  const getFieldProps = (name: keyof T) => ({
    name: name as string,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    status: (formik.touched[name] && formik.errors[name]
      ? "error"
      : undefined) as "error" | undefined,
  });

  const getFieldError = (name: keyof T) => ({
    error: formik.errors[name] as string | undefined,
    touched: formik.touched[name] as boolean | undefined,
  });

  return { formik, getFieldProps, getFieldError };
};