import Heading from "@/ui/common/heading";
import type { FC } from "react";
import Image from "next-export-optimize-images/image";

const partners = [
  { name: "Satel", logo: "/images/logos/satel.png", alt: "Satel Logo" },
  { name: "Grenton", logo: "/images/logos/grenton.png", alt: "Grenton Logo" },
  { name: "TermoFol", logo: "/images/logos/termofol.png", alt: "Termofol Logo" },
];

const Partners: FC = () => {
  return (
    <section className="section z-20 bg-grey text-dark-grey">
      <div className="content-left-half">
        <Heading title="PARTNERZY" />
      </div>
      <div className="content-center-span">
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4">
          {partners.map((partner, index) => (
            <div key={index} className="grid place-content-center">
              <div className="flex justify-center items-end p-8 bg-[#F0F0F0] hover:shadow-[#F0F0F0] rounded-lg hover:shadow-md transition-shadow duration-300 min-h-52 max-w-60">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={200} // Adjust based on your needs
                  height={100} // Adjust based on your needs
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
