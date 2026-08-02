import * as Yup from "yup";

const phoneValidation = Yup.string()
.required("Telefon nömrəsi mütləqdir")
  .min(9, "Telefon nömrəsi düzgün deyil");

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
  name: nameValidation,
  phone: phoneValidation,
  password: passwordValidation,
});