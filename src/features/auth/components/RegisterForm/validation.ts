import * as Yup from "yup";

export const registerSchema = Yup.object({
    name: Yup.string()
    .required("Ad mütləqdir")
    .min(2, "Ad ən az 2 simvol olmalıdır"),
    phone: Yup.string()
    .required("Telefon nömrəsi mütləqdir")
    .min(9, "Telefon nömrəsi düzgün deyil"),
    password: Yup.string()
    .required("Parol mütləqdir")
    .min(6, "Parol ən az 6 simvol olmalıdır"),
})