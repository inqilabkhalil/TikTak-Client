import { useFormik, FormikConfig, FormikValues } from "formik";

export const useAuthForm = <T extends FormikValues>(config: FormikConfig<T>) => {
  const formik = useFormik<T>(config);

  const getFieldProps = (name: keyof T) => ({
    name: name as string,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    status: (formik.touched[name] && formik.errors[name] ? "error" : undefined) as
      | "error"
      | undefined,
  });

  const getFieldError = (name: keyof T) => ({
    error: formik.errors[name] as string | undefined,
    touched: formik.touched[name] as boolean | undefined,
  });

  const getPhoneFieldProps = (name: keyof T) => ({
    name: name as string,
    value: formik.values[name],
    onBlur: formik.handleBlur,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 9);
      formik.setFieldValue(name as string, digitsOnly);
    },
    status: (formik.touched[name] && formik.errors[name] ? "error" : undefined) as
      | "error"
      | undefined,
  });

  return { formik, getFieldProps, getFieldError, getPhoneFieldProps };
};