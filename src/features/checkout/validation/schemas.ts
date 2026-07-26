import * as Yup from "yup";
import { noteField, paymentMethodField } from "./fields";

export const checkoutSchema = Yup.object({
  note: noteField,
  paymentMethod: paymentMethodField,
});