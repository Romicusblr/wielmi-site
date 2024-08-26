import type { FC } from "react";

const services = [
  {
    icon: "✔️", // Placeholder for icon
    text: "Cieszyć się obrazem i dźwiękiem najwyższej jakości dzięki profesjonalnie skonfigurowanym domowym kinom.",
  },
  {
    icon: "✔️", // Placeholder for icon
    text: " Zintegrować systemy audio w całym domu, pozwalając cieszyć się ulubioną muzyką w każdym pokoju.",
  },
];

const services2 = [
  {
    icon: "✔️", // Placeholder for icon
    text: " Zapewnić bezpieczeństwo Twojego domu za pomocą nowoczesnych systemów monitoringu.",
  },
  {
    icon: "✔️", // Placeholder for icon
    text: "Stworzyć niezawodne i szybkie sieci przesyłania danych dla doskonałego dostępu do Internetu.",
  },
];

const ServiceItem: FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 bg-dark-grey text-white rounded-full w-16 h-16 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="ml-6">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <section className="grid-layout">
      <div className="p-12 lg:col-start-2 sm:col-start-2">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="p-12 lg:col-start-3 sm:col-start-2">
        {services2.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Section2;
