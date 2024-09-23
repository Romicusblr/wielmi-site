import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Imię jest wymagane"),
  email: yup.string().email("Nieprawidłowy adres email").required("Email jest wymagany"),
  phone: yup.string().required("Numer telefonu jest wymagany"),
  message: yup.string().min(4, "Wiadomość musi mieć co najmniej 4 znaków").required("Wiadomość jest wymagana"),
});
