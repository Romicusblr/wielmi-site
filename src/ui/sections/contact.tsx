"use client";

import { useState, type FC } from "react";
import ResponsiveImage from "@/ui/common/responsive-image";
import { GridLineH } from "@/ui/sections/grid-lines";
import BrandedButton from "@/ui/common/button";
import SocialLinks from "@/ui/sections/social-links";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Image from "next-export-optimize-images/image";

const ContactSection: FC = function () {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Wielmi Contact Form",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section className="relative grid-layout w-full bg-cover bg-center" id="contact">
        <Image
          alt="Kontakt Background Image"
          className="-z-10 object-cover"
          fill
          priority
          quality={100}
          src="/images/kontakt-bg.jpeg"
          sizes="100%"
        />
      <div className="sm:col-start-2 sm:row-start-3 lg:row-start-1 py-16 px-8">
        <h2 className="text-dark-grey text-3xl">Czy masz jakiś pomysł?</h2>
        <div className="shadow-lg rounded-lg mt-8">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Podaj imię..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Podaj email..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Podaj numer telefonu..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                {...register("message", { required: true })}
                placeholder="Informacje dla nas..."
                className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center text-dark-grey">
              <BrandedButton className="px-12 bg-brand">Wysłać</BrandedButton>
            </div>
          </form>
        </div>
      </div>
      <ResponsiveImage
        className="h-full lg:col-start-3 object-bottom hidden lg:block"
        src="/images/kontakt-image.jpeg"
        alt="macbook"
      />
      <GridLineH className="col-span-full row-start-2" />
      <div className="text-dark-grey lg:col-start-3 sm:col-start-2 row-start-1 lg:row-start-3 px-8 py-16">
        <h3 className="text-2xl">Współpraca</h3>
        <p className="mt-4">Zapraszamy architektów do kontaktu z nami.</p>
        <p className="mt-4">
          Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.{" "}
        </p>
        <p>Z naszymi specjalistami możesz skonsultować się w każdej sprawie.</p>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
