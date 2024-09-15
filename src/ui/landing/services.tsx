import ServiceItem from "@/ui/common/service-item";
import { FaRegCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: FaRegCheckCircle,
    items: <span>BEZPŁATNA <br /> KONSULTACJA</span>,
  },
  {
    icon: FaRegCheckCircle,
    items: <span>W KONTAKCIE <br /> 24/7</span>,
  },
  {
    icon: FaRegCheckCircle,
    items: <span>AUTORSKI <br /> NADZÓR</span>,
  },
  {
    icon: FaRegCheckCircle,
    items: <span>PEŁNA DOKUMENTACJA <br /> TECHNICZNA PROJEKTU</span>,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full section py-12">
      <div className="sm:col-start-2 lg:col-end-4 grid lg:grid-cols-2 lg:grid-flow-dense text-xl">
        {services.map((service, index) => (
          <ServiceItem key={index} iconSize={28} {...service} className="px-12"/>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
