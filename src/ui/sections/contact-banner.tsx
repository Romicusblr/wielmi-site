import ResponsiveImage from "@/ui/common/responsive-image";
import Heading from "../common/heading";
import BrandedButton from "../common/button";
import Link from "next/link";
import { CONTACT_LINK } from "@/constants";

const ContactBanner = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              Skontaktuj się
              <br />z nami
            </span>
          }
          subtitles={["BEZPOŚREDNIO", "LUB TELEFONICZNIE"]}
        />
      </div>
      <div className="content-right-half place-content-end">
        <Link className="w-full" href={CONTACT_LINK}>
          <BrandedButton className="px-12 w-full max-w">napisać do nas</BrandedButton>
        </Link>
      </div>
    </section>
  );
};

export default ContactBanner;
