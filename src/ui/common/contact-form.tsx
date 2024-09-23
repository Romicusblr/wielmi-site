"use client";

import { useState, type FC } from "react";
import BrandedButton from "@/ui/common/button";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./contact-form.schema";

const successMessage = "Dziękujemy! Formularz został pomyślnie wysłany.";
const errorMessage = "Niestety, formularz nie został wysłany. Skontaktuj się z nami innym sposobem.";

const ContactForm: FC = function () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(contactFormSchema),
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Wielmi Contact Form",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
    },
  });

  return (
    <div className="shadow-lg rounded-lg mt-12">
      <form className="flex flex-col justify-between gap-4 text-grey" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-none">
          <input
            {...register("name")}
            type="text"
            placeholder="Podaj imię..."
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div className="flex-none">
          <input
            {...register("email")}
            type="email"
            placeholder="Podaj email..."
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="flex-none">
          <input
            type="tel"
            {...register("phone")}
            placeholder="Podaj numer telefonu..."
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div className="flex-1">
          <textarea
            {...register("message")}
            placeholder="Informacje dla nas..."
            className={`w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <div className="flex-none flex justify-center text-dark-grey">
          <BrandedButton className="px-12 w-full bg-brand">Wysłać</BrandedButton>
        </div>
      </form>
      {isSubmitSuccessful && isSuccess && (
        <div className="mt-4 p-4 text-green-600 bg-green-100 rounded-md">{successMessage}</div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-4 p-4 text-red-600 bg-red-100 rounded-md">{errorMessage}</div>
      )}
    </div>
  );
};

export default ContactForm;
