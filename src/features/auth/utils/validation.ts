import * as Yup from "yup";

const phoneValidation = Yup.string()
  .required("Telefon nömrəsi mütləqdir")
  .matches(/^[0-9]{9}$/, "Telefon nömrəsi 9 rəqəmdən ibarət olmalıdır");

const passwordValidation = Yup.string()
  .required("Parol mütləqdir")
  .min(4, "Parol ən az 4 simvol olmalıdır");

const nameValidation = Yup.string()
  .required("Ad mütləqdir")
  .min(2, "Ad ən az 2 simvol olmalıdır");

export const loginSchema = Yup.object({
  phone: phoneValidation,
  password: passwordValidation,
});

export const registerSchema = Yup.object({
  full_name: nameValidation,
  phone: phoneValidation,
  password: passwordValidation,
});