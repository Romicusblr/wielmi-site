"use client";

import { useState, type FC } from "react";
import ResponsiveImage from "@/ui/common/responsive-image";
import { GridLineH } from "@/ui/sections/grid-lines";
import BrandedButton from "@/ui/common/button";
import SocialLinks from "@/ui/sections/social-links";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Image from "next-export-optimize-images/image";
import Heading from "../common/heading";
import Link from "next/link";
import { PHONENUMBER } from "@/constants";
import { formatNumber } from "./navbar";

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
    <section className="relative grid-layout w-full bg-cover bg-center text-dark-grey py-20" id="contact">
      <Image
        alt="Kontakt Background Image"
        className="-z-10 object-cover"
        fill
        priority
        quality={100}
        src="/images/kontakt-bg.jpeg"
        sizes="100%"
      />
      <div className="sm:col-start-2 px-12">
        <Heading
          title={
            <span>
              Czy masz
              <br />
              jakiś pomysł?
            </span>
          }
        />
        <div className="shadow-lg rounded-lg mt-20">
          <form className="flex flex-col justify-between gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-none">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Podaj imię..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-none">
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Podaj email..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-none">
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Podaj numer telefonu..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <textarea
                {...register("message", { required: true })}
                placeholder="Informacje dla nas..."
                className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex-none flex justify-center text-dark-grey">
              <BrandedButton className="px-12 w-full bg-brand">Wysłać</BrandedButton>
            </div>
          </form>
        </div>
      </div>
      <div className="text-dark-grey lg:col-start-3 sm:col-start-2 px-12">
        <h3 className="text-5xl lg:mt-12 mt-20">Współpraca</h3>
        <p className="lg:mt-24 mt-12 text-xl">
          ZAPRASZAMY ARCHITEKTÓW <br /> DO KONTAKTU Z NAMI.
        </p>
        <div className="lg:max-w-80">
        <p className="lg:mt-16 mt-12">
          Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.{" "}
        </p>
        <p>Z naszymi specjalistami możesz skonsultować się w każdej sprawie.</p>
        </div>
        <div className="lg:mt-16 mt-12 text-2xl">
          <Link href={`tel:${PHONENUMBER}`}>{formatNumber(PHONENUMBER)}</Link>
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
