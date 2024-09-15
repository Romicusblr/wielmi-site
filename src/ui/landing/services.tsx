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
    <section className="section">
      <div className="content-center-span px-0 grid lg:grid-cols-2 lg:grid-flow-dense text-xl">
        {services.map((service, index) => (
          <ServiceItem key={index} iconSize={28} {...service} className="content-padding"/>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
