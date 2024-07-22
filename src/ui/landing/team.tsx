import type { FC } from "react";
import Image from 'next-export-optimize-images/image'

const persons = [
  {
    name: "Aleks",
    description: "Electrical Team Leader",
    image: "/zespol_man.jpeg",
  },
  {
    name: "Andrzej",
    description: "Inżynier",
    image: "/zespol_man.jpeg",
  },
  {
    name: "Roman",
    description: "Programista",
    image: "/zespol_man.jpeg",
  },
];

interface PersonProps {
  name: string;
  description: string;
  image: string;
}

const Person: FC<PersonProps> = function ({ name, description, image }) {
  return (
    <div className="p-4">
      <Image className="" src={image} alt={name} width={300} height={300} />
      <h3 className="text-2xl ">{name}</h3>
      <p className="">{description}</p>
    </div>
  );
};

const TeamSection: FC = function () {
  return (
    <section className="w-full py-8 bg-grey text-dark-grey grid-layout" id="team">
      <div className="text-3xl col-start-2 p-8">
        <h2 className="font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8 lg:text-left text-center">
          NASZ ZESPÓŁ
        </h2>
        <p className="mb-8 lg:text-left text-center">Odpowiadamy za każdy projekt</p>
      </div>
      <div className="col-start-2 col-span-2 p-8 flex flex-col lg:flex-row justify-between items-center">
        {persons.map((p) => {
          return <Person {...p} key={p.name} />;
        })}
      </div>
    </section>
  );
};

export default TeamSection;
