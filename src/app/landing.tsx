import type { FC } from "react";
import BrandedButton from "../ui/button";
import GridLineH from "@/ui/line-horizontal";
import ResponsiveImage from "@/ui/responsive-image";
import Image from "next/image";
import Testimonials from "@/ui/testimonials";
import SocialMedia from "@/ui/social-media";
import Hero from "@/ui/landing/hero";
import AboutSection from "@/ui/landing/about";
import WorkStepsSection from "@/ui/landing/steps";
import BlackCardSection from "@/ui/landing/black-cards";
import IconCardSection from "@/ui/landing/icon-cards";
import InfoSection from "@/ui/landing/info";
import TeamSection from "@/ui/landing/team";


const Landing: FC = function () {
  return (
    <>
      <Hero />
      <GridLineH />
      <AboutSection />
      <WorkStepsSection />
      <GridLineH />
      <BlackCardSection />
      <GridLineH />
      <IconCardSection />
      <InfoSection />
      <TeamSection />
      {/*
      
      <section className="grid-layout w-full bg-[url('/kontakt-bg.jpeg')] bg-cover bg-center">
        <div className="col-start-2 py-16 px-8">
          <h2 className="text-dark-grey text-3xl">Czy masz jakiś pomysł?</h2>
          <div className="shadow-lg rounded-lg mt-8">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Podaj imię..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Podaj email..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Podaj numer telefonu..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
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
        <ResponsiveImage className="h-full col-start-3 object-bottom" src="/kontakt-image.jpeg" alt="macbook" />
        <GridLineH className="col-span-full" />
        <div className="text-grey col-start-3 px-8 py-16">
          <h3 className="text-2xl">Współpraca</h3>
          <p className="mt-4">Zapraszamy architektów do kontaktu z nami.</p>
          <p className="mt-4">
            Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.{" "}
          </p>
          <p>Z naszymi specjalistami możesz skonsultować się w każdej sprawie.</p>
          <div className="mt-8">
            <SocialMedia />
          </div>
        </div>
      </section>
      <section className="w-full py-8 text-dark-grey">
        <Testimonials />
      </section> */}
    </>
  );
};

export default Landing;
