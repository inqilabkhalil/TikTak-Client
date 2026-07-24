import * as Yup from "yup";

export const loginSchema = Yup.object({
    phone: Yup.string()
    .required("Telefon nömrəsi mütləqdir")
    .min(9,"Telefon nömrəsi düzgün deyil"),
    password: Yup.string()
    .required("Parol mütləqdir")
    .min(6, "Parol ən az 6 simvol olmalıdır")
});