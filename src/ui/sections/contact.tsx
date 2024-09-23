import { type FC } from "react";
import SocialLinks from "@/ui/sections/social-links";
import Image from "next-export-optimize-images/image";
import Heading from "../common/heading";
import Link from "next/link";
import { formatNumber, PHONENUMBER } from "@/constants";
import ContactForm from "@/ui/common/contact-form";

const ContactSection: FC = function () {
  return (
    <section className="relative section bg-cover bg-center text-dark-grey" id="contact">
      <Image
        alt="Kontakt Background Image"
        className="-z-10 object-cover"
        fill
        priority
        quality={100}
        src="/images/kontakt-bg.jpeg"
        sizes="100%"
      />
      <div className="content-left-half">
        <Heading
          title={
            <span>
              Czy masz
              <br />
              jakiś pomysł?
            </span>
          }
        />
        <ContactForm />
      </div>
      <div className="text-dark-grey content-right-half">
        <Heading
          title={
            <span>
              &nbsp;
              <br />
              Współpraca
            </span>
          }
        />
        <p className="lg:mt-10 mt-12 text-2xl">
          ZAPRASZAMY ARCHITEKTÓW <br /> DO KONTAKTU Z NAMI.
        </p>
        <div className="lg:max-w-80">
          <p className="lg:mt-14 mt-12">
            Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.{" "}
          </p>
          <p>Z naszymi specjalistami możesz skonsultować się w każdej sprawie.</p>
        </div>
        <div className="lg:mt-16 mt-12 text-xl">
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
