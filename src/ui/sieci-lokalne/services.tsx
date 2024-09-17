import ServiceItem from "@/ui/common/service-item";
import { FaRegCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: FaRegCheckCircle,
    className: "lg:col-start-1",
    items: "Cieszyć się obrazem i dźwiękiem najwyższej jakości dzięki profesjonalnie skonfigurowanym domowym kinom.",
  },
  {
    icon: FaRegCheckCircle,
    items: "Zintegrować systemy audio w całym domu, pozwalając cieszyć się ulubioną muzyką w każdym pokoju.",
  },
  {
    icon: FaRegCheckCircle,
    className: "lg:col-start-1",
    items: "Zapewnić bezpieczeństwo Twojego domu za pomocą nowoczesnych systemów monitoringu.",
  },
  {
    icon: FaRegCheckCircle,
    items: "Stworzyć niezawodne i szybkie sieci przesyłania danych dla doskonałego dostępu do Internetu.",
  },
];

const Section = () => {
  return (
    <section className="section bg-[#F5F5F5]">
      <div className="content-center-span px-0 grid lg:grid-cols-2 lg:grid-flow-dense text-xl">
        {services.map((service, index) => (
          <ServiceItem key={index} iconSize={28} {...service} className="content-padding" />
        ))}
      </div>
    </section>
  );
};

export default Section;
