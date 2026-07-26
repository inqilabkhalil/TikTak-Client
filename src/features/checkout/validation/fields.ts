import * as Yup from "yup";

export const noteField = Yup.string().max(
  500,
  "Qeyd ən çox 500 simvol ola bilər",
);

export const paymentMethodField = Yup.string()
  .required("Ödəmə metodu seçin")
  .oneOf(["CASH", "CARD"], "Yanlış ödəmə metodu");
