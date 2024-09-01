import type { FC } from "react";
import { FaUser } from "react-icons/fa6";
import Heading from "@/ui/common/heading";

const persons = [
  {
    name: "Aleks",
    description: "Electrical Team Leader",
    image: "/images/zespol_man.jpeg",
  },
  {
    name: "Andrzej",
    description: "Inżynier",
    image: "/images/zespol_man.jpeg",
  },
  {
    name: "Roman",
    description: "Programista",
    image: "/images/zespol_man.jpeg",
  },
];

interface PersonProps {
  name: string;
  description: string;
  image: string;
}

const Person: FC<PersonProps> = function ({ name, description, image }) {
  return (
    <div className="text-center">
      <div className="p-8 grid place-items-center border rounded-full">
        <FaUser size={150}/>
      </div>
      <h3 className="text-2xl mt-4">{name}</h3>
      <p className="">{description}</p>
    </div>
  );
};

const TeamSection: FC = function () {
  return (
    <section className="w-full py-8 bg-grey text-dark-grey grid-layout">
      <div className="text-3xl sm:col-start-2 lg:col-end-4 p-8">
        <Heading title="NASZ ZESPÓŁ"/>
        <p className="mb-8 lg:text-left text-center">Odpowiadamy za każdy projekt</p>
      </div>
      <div className="sm:col-start-2 lg:col-end-4 p-8 flex flex-col gap-8 lg:flex-row justify-between items-center">
        {persons.map((p) => {
          return <Person {...p} key={p.name} />;
        })}
      </div>
    </section>
  );
};

export default TeamSection;
