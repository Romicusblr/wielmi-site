import type { FC } from "react";
import ResponsiveImage from "@/ui/responsive-image";
import GridLineH from "@/ui/line-horizontal";
import BrandedButton from "@/ui/button";
import SocialMedia from "@/ui/social-media";

const ContactSection: FC = function () {
  return (
    <section className="grid-layout w-full bg-[url('/kontakt-bg.jpeg')] bg-cover bg-center">
      <div className="sm:col-start-2 sm:row-start-3 lg:row-start-1 py-16 px-8">
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
      <ResponsiveImage className="h-full lg:col-start-3 object-bottom hidden lg:block" src="/kontakt-image.jpeg" alt="macbook" />
      <GridLineH className="col-span-full row-start-2" />
      <div className="text-dark-grey lg:col-start-3 sm:col-start-2 row-start-1 lg:row-start-3 px-8 py-16">
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
  );
};

export default ContactSection;
