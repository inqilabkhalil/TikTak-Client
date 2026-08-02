import { useEffect } from "react";
import { useFormik, FormikConfig, FormikValues } from "formik";
import { useAuthStore } from "@/features/auth/store";

export const useAuthForm = <T extends FormikValues>(config: FormikConfig<T>) => {
  const formik = useFormik<T>(config);
  
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  useEffect(() => {
    clearError();
    return () => {
      clearError();
    };
  }, [clearError]);

  const getStatus = (name: keyof T) =>
    (formik.touched[name] && formik.errors[name] ? "error" : undefined) as
      | "error"
      | undefined;

  const getFieldProps = (name: keyof T) => ({
    name: name as string,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    status: getStatus(name),
  });

  const getFieldError = (name: keyof T) => ({
    error: formik.errors[name] as string | undefined,
    touched: formik.touched[name] as boolean | undefined,
  });

  const getPhoneFieldProps = (name: keyof T) => ({
    ...getFieldProps(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 9);
      formik.setFieldValue(name as string, digitsOnly);
    },
  });

  return {
    formik,
    getFieldProps,
    getFieldError,
    getPhoneFieldProps,
    isLoading,
    error,
  };
};